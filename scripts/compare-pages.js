const fs = require("fs");
const cheerio = require("cheerio");

// Extract clean text content from HTML
function extractTextContent(html) {
  const $ = cheerio.load(html);

  // Remove scripts, styles, and WordPress admin elements
  $('script, style, .wp-admin, header[data-elementor-type="header"]').remove();

  const texts = [];

  // Find all headings and paragraphs
  $("h1, h2, h3, h4, h5, h6, p").each((i, elem) => {
    const text = $(elem).text().trim().replace(/\s+/g, " ");
    if (text && text.length > 3) {
      texts.push({
        tag: elem.tagName,
        text: text,
      });
    }
  });

  return texts;
}

// Compare pages
const pages = [
  "home",
  "five-pillars",
  "ingredients",
  "protein",
  "subscriptions",
  "contact",
];

console.log("=== PAGE CONTENT COMPARISON ===\n");

pages.forEach((page) => {
  console.log(`\n--- ${page.toUpperCase()} PAGE ---`);

  try {
    const authHtml = fs.readFileSync(`live-${page}-authenticated.html`, "utf8");
    const content = extractTextContent(authHtml);

    console.log(`Found ${content.length} text elements\n`);

    // Show first 20 elements
    content.slice(0, 20).forEach((item, idx) => {
      console.log(
        `${idx + 1}. <${item.tag}>: ${item.text.substring(0, 100)}${item.text.length > 100 ? "..." : ""}`,
      );
    });

    if (content.length > 20) {
      console.log(`\n... and ${content.length - 20} more elements`);
    }
  } catch (error) {
    console.log(`Error reading ${page}: ${error.message}`);
  }
});

console.log("\n\n=== COMPARISON COMPLETE ===");
