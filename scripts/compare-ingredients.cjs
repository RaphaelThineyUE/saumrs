const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const VIEWPORT = { width: 1920, height: 1080 };
const OUTPUT_DIR = path.join(__dirname, '..', 'playwright-report', 'ingredients-diff');

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const loadPng = (filePath) =>
  new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(new PNG())
      .on('parsed', function parsed() {
        resolve(this);
      })
      .on('error', reject);
  });

const writePng = (png, filePath) =>
  new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(filePath);
    png.pack().pipe(stream).on('finish', resolve).on('error', reject);
  });

const compareScreenshots = async (newShotPath, oldShotPath) => {
  const imgNew = await loadPng(newShotPath);
  const imgOld = await loadPng(oldShotPath);

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

  const diffPath = path.join(OUTPUT_DIR, 'ingredients.diff.png');
  await writePng(diff, diffPath);

  return { diffPixels, width, height, diffPath };
};

const run = async () => {
  ensureDir(OUTPUT_DIR);

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: VIEWPORT });

  const reactPage = await context.newPage();
  const htmlPage = await context.newPage();

  await reactPage.goto(`${BASE_URL}/ingredients`, { waitUntil: 'networkidle' });
  await htmlPage.goto(`${BASE_URL}/old/ingredients-page.html`, { waitUntil: 'networkidle' });

  await reactPage.waitForTimeout(1500);
  await htmlPage.waitForTimeout(1500);

  const reactShot = path.join(OUTPUT_DIR, 'ingredients.react.png');
  const htmlShot = path.join(OUTPUT_DIR, 'ingredients.html-sample.png');

  await reactPage.screenshot({ path: reactShot, fullPage: true });
  await htmlPage.screenshot({ path: htmlShot, fullPage: true });

  const result = await compareScreenshots(reactShot, htmlShot);

  await browser.close();

  const summary = {
    baseUrl: BASE_URL,
    viewport: VIEWPORT,
    pageA: '/ingredients',
    pageB: '/old/ingredients-page.html',
    ...result,
    diffPercent: Number(((result.diffPixels / (result.width * result.height)) * 100).toFixed(4)),
  };

  fs.writeFileSync(path.join(OUTPUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2));

  console.log(`Diff pixels: ${result.diffPixels}`);
  console.log(`Diff percent: ${summary.diffPercent}%`);
  console.log(`Diff image: ${result.diffPath}`);

  if (result.diffPixels > 0) {
    process.exitCode = 1;
  }
};

run().catch((err) => {
  console.error('Ingredients visual comparison failed:', err);
  process.exit(1);
});
