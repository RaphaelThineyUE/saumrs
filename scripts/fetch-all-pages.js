const { chromium } = require('playwright');
const fs = require('fs');

async function fetchAllPages() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const pages = [
    { url: 'https://www.saumrs.com/five-pillars/', name: 'five-pillars' },
    { url: 'https://www.saumrs.com/subscriptions/', name: 'subscriptions' },
    { url: 'https://www.saumrs.com/contact/', name: 'contact' }
  ];

  for (const pageInfo of pages) {
    try {
      console.log(`\nFetching ${pageInfo.name}...`);
      await page.goto(pageInfo.url, { waitUntil: 'networkidle' });

      const passwordInput = await page.$('#input_wp_protect_password');
      if (passwordInput) {
        await passwordInput.fill('KiteLife');
        const submitButton = await page.$('input[type="submit"]') || await page.$('button[type="submit"]');
        if (submitButton) {
          await submitButton.click();
          await page.waitForLoadState('networkidle');
        }
      }

      await page.waitForTimeout(2000);

      const images = await page.$$eval('img', imgs => 
        imgs.map(img => ({
          src: img.src,
          alt: img.alt,
          class: img.className
        }))
      );

      console.log(`\n=== Images on ${pageInfo.name} ===`);
      images.forEach((img, i) => {
        if (!img.src.includes('logo') && !img.src.includes('placeholder.png')) {
          console.log(`${i + 1}. ${img.alt || 'No alt'}: ${img.src}`);
        }
      });

      const outputPath = `/workspaces/saumrs/scripts/live-${pageInfo.name}-images.json`;
      fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));

    } catch (error) {
      console.error(`Error fetching ${pageInfo.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('\n✓ Done!');
}

fetchAllPages();
