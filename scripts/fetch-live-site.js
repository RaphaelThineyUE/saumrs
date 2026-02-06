const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function fetchLiveSite() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('Navigating to saumrs.com/ingredients...');
    await page.goto('https://www.saumrs.com/ingredients/', { waitUntil: 'networkidle' });

    // Check if password prompt exists
    const passwordInput = await page.$('#input_wp_protect_password');
    
    if (passwordInput) {
      console.log('Password prompt detected. Entering password...');
      await passwordInput.fill('KiteLife');
      
      // Find and click submit button
      const submitButton = await page.$('input[type="submit"]') || await page.$('button[type="submit"]');
      if (submitButton) {
        await submitButton.click();
        await page.waitForLoadState('networkidle');
        console.log('Password submitted successfully!');
      }
    }

    // Wait a bit for the page to fully load
    await page.waitForTimeout(2000);

    // Get page HTML
    const html = await page.content();
    
    // Save HTML to file
    const outputPath = path.join(__dirname, 'live-ingredients-page.html');
    fs.writeFileSync(outputPath, html);
    console.log(`HTML saved to: ${outputPath}`);

    // Get all image sources
    const images = await page.$$eval('img', imgs => 
      imgs.map(img => ({
        src: img.src,
        alt: img.alt,
        class: img.className
      }))
    );

    console.log('\n=== Images found on ingredients page ===');
    images.forEach((img, i) => {
      console.log(`${i + 1}. ${img.alt || 'No alt'}: ${img.src}`);
    });

    // Save images info to JSON
    const imagesPath = path.join(__dirname, 'live-ingredients-images.json');
    fs.writeFileSync(imagesPath, JSON.stringify(images, null, 2));
    console.log(`\nImages info saved to: ${imagesPath}`);

    // Also try the home page
    console.log('\n\nFetching home page...');
    await page.goto('https://www.saumrs.com/', { waitUntil: 'networkidle' });
    
    const homePasswordInput = await page.$('#input_wp_protect_password');
    if (homePasswordInput) {
      console.log('Password prompt on home page. Entering password...');
      await homePasswordInput.fill('KiteLife');
      const homeSubmitButton = await page.$('input[type="submit"]') || await page.$('button[type="submit"]');
      if (homeSubmitButton) {
        await homeSubmitButton.click();
        await page.waitForLoadState('networkidle');
      }
    }

    await page.waitForTimeout(2000);
    
    const homeHtml = await page.content();
    const homeOutputPath = path.join(__dirname, 'live-home-page.html');
    fs.writeFileSync(homeOutputPath, homeHtml);
    console.log(`Home page HTML saved to: ${homeOutputPath}`);

    const homeImages = await page.$$eval('img', imgs => 
      imgs.map(img => ({
        src: img.src,
        alt: img.alt,
        class: img.className
      }))
    );

    console.log('\n=== Images found on home page ===');
    homeImages.forEach((img, i) => {
      console.log(`${i + 1}. ${img.alt || 'No alt'}: ${img.src}`);
    });

    const homeImagesPath = path.join(__dirname, 'live-home-images.json');
    fs.writeFileSync(homeImagesPath, JSON.stringify(homeImages, null, 2));
    console.log(`\nHome images info saved to: ${homeImagesPath}`);

  } catch (error) {
    console.error('Error fetching live site:', error);
  } finally {
    await browser.close();
  }
}

fetchLiveSite();
