const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");
const pixelmatch = require("pixelmatch");
const { PNG } = require("pngjs");

const BASE_NEW = process.env.NEW_BASE_URL || "http://localhost:5173";
const BASE_OLD = process.env.OLD_BASE_URL || "http://localhost:4175";
const VIEWPORT = { width: 1920, height: 1080 };
const OUTPUT_DIR = path.join(
  __dirname,
  "..",
  "playwright-report",
  "visual-diffs",
);

const pagesToCompare = [
  { name: "home", newPath: "/", oldPath: "/saumrsmainpagev3.html" },
  { name: "contact", newPath: "/contact", oldPath: "/contact-updated.html" },
  { name: "order", newPath: "/order", oldPath: "/order-page.html" },
  {
    name: "five-pillars",
    newPath: "/five-pillars",
    oldPath: "/five-pillars-page.html",
  },
  {
    name: "ingredients",
    newPath: "/ingredients",
    oldPath: "/ingredients-page.html",
  },
  {
    name: "subscriptions",
    newPath: "/subscriptions",
    oldPath: "/subscriptions-styled.html",
  },
];

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const fullUrl = (base, p) => `${base}${p}`;

const screenshotPath = (name, label) =>
  path.join(OUTPUT_DIR, `${name}.${label}.png`);

const loadPng = (filePath) =>
  new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(new PNG())
      .on("parsed", function parsed() {
        resolve(this);
      })
      .on("error", reject);
  });

const writePng = (png, filePath) =>
  new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(filePath);
    png.pack().pipe(stream).on("finish", resolve).on("error", reject);
  });

const compareScreenshots = async (name, newShot, oldShot) => {
  const imgNew = await loadPng(newShot);
  const imgOld = await loadPng(oldShot);

  const width = Math.max(imgNew.width, imgOld.width);
  const height = Math.max(imgNew.height, imgOld.height);

  const resizedNew = new PNG({ width, height, fill: true });
  const resizedOld = new PNG({ width, height, fill: true });

  PNG.bitblt(imgNew, resizedNew, 0, 0, imgNew.width, imgNew.height, 0, 0);
  PNG.bitblt(imgOld, resizedOld, 0, 0, imgOld.width, imgOld.height, 0, 0);

  const diff = new PNG({ width, height });
  const diffPixels = pixelmatch(
    resizedNew.data,
    resizedOld.data,
    diff.data,
    width,
    height,
    { threshold: 0 },
  );

  const diffPath = screenshotPath(name, "diff");
  await writePng(diff, diffPath);

  return { diffPixels, diffPath, width, height };
};

const run = async () => {
  ensureDir(OUTPUT_DIR);

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: VIEWPORT });

  const results = [];

  for (const pageInfo of pagesToCompare) {
    const pageNew = await context.newPage();
    const pageOld = await context.newPage();

    const newUrl = fullUrl(BASE_NEW, pageInfo.newPath);
    const oldUrl = fullUrl(BASE_OLD, pageInfo.oldPath);

    await pageNew.goto(newUrl, { waitUntil: "networkidle" });
    await pageOld.goto(oldUrl, { waitUntil: "networkidle" });

    await pageNew.waitForTimeout(1500);
    await pageOld.waitForTimeout(1500);

    const newShot = screenshotPath(pageInfo.name, "new");
    const oldShot = screenshotPath(pageInfo.name, "old");

    await pageNew.screenshot({ path: newShot, fullPage: true });
    await pageOld.screenshot({ path: oldShot, fullPage: true });

    const diffResult = await compareScreenshots(
      pageInfo.name,
      newShot,
      oldShot,
    );

    results.push({
      name: pageInfo.name,
      newUrl,
      oldUrl,
      ...diffResult,
    });

    await pageNew.close();
    await pageOld.close();
  }

  await browser.close();

  const summaryPath = path.join(OUTPUT_DIR, "summary.json");
  fs.writeFileSync(
    summaryPath,
    JSON.stringify({ viewport: VIEWPORT, results }, null, 2),
  );

  const failures = results.filter((r) => r.diffPixels > 0);
  if (failures.length) {
    console.log("Visual differences found:");
    failures.forEach((r) => {
      console.log(
        `- ${r.name}: ${r.diffPixels} pixels differ. Diff: ${r.diffPath}`,
      );
    });
    process.exitCode = 1;
  } else {
    console.log("All pages match visually.");
  }
};

run().catch((error) => {
  console.error("Visual comparison failed:", error);
  process.exit(1);
});
