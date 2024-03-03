import puppeteer from 'puppeteer';

import { fetchQueue } from './Queue';

let browser;
let browserInitializingPromise = null;

// Function to get body content without script tags
const getBodyContentWithoutScripts = async (page) => {
  return page.evaluate(() => {
    const body = document.body.cloneNode(true); // Clone the body to not affect the actual page
    const scripts = body.querySelectorAll('script');
    scripts.forEach(s => s.remove()); // Remove all script tags
    return body.innerHTML; // Return the innerHTML of the modified body
  });
};

// Function to get the meta title of the page
const getMetaTitle = async (page) => {
  return page.evaluate(() => {
    return document.querySelector('title')?.innerText;
  });
};

async function getBrowserInstance() {
  if (browser) {
    return browser;
  } else if (browserInitializingPromise) {
    await browserInitializingPromise;
    return browser;
  } else {
    browserInitializingPromise = (async () => {
      console.log(`initial browser install`);

      browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      // Set User Agent and Viewport as before
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36 Edg/89.0.774.57');
      await page.setViewport({ width: 1920, height: 1080 });

      // Navigate to the login page and log in
      await page.goto('https://shopee.co.id/buyer/login', { waitUntil: 'networkidle2' });

      // Check for Open Graph title containing "Login"
      const loginTitle = await page.$eval('meta[property="og:title"]', el => el.content.toLowerCase());
      if (loginTitle.includes("login")) {
        console.log(`login page detected`);
        
        // Simulate a click on the first nav element found in the document
        await page.click('nav');

        // Fill in the login form
        console.log(`filling login credentials`);
        await page.type('input[name="loginKey"]', 'wawan@kyodo-i.com');
        await page.type('input[name="password"]', 'Shopee145632789!');

        // Confirm input values
        const loginKey = await page.$eval('input[name="loginKey"]', el => el.value);
        const password = await page.$eval('input[name="password"]', el => el.value);

        console.log(`Filled loginKey: ${loginKey}`); // Should log "wawan@kyodo-i.com"
        console.log(`Filled password: ${password}`); // Should log "Shopee145632789!"

        // Get the meta title before clicking the button
        const titleBeforeClick = await getMetaTitle(page);
        console.log('Meta title before clicking the button:', titleBeforeClick);
        // Get the active URL before clicking the button
        const urlBeforeClick = page.url();
        console.log('Active URL before clicking the button:', urlBeforeClick);
        

        // Click the submit button or submit the form
        const logPageConsole = msg => console.log('PAGE LOG:', msg.text());
        page.on('console', logPageConsole);
        await page.evaluate(() => {
          // This code runs in the browser context
          const buttons = document.querySelector('form').querySelectorAll('button');
          if (buttons.length > 0) {
            console.log('Button exist, clicking..');
            const button = buttons[buttons.length - 1];

            const buttonInfo = {
              textContent: button.textContent,
              id: button.id,
              className: button.className
            };
            console.log(JSON.stringify(buttonInfo));

            button.click();
          } else {
            console.error('No button found');
          }
        });
        page.off('console', logPageConsole);

        // Wait for navigation after the login
        await page.waitForNavigation({ waitUntil: 'networkidle2' });

        // Get the meta title after waitForNavigation
        const titleAfterNavigation = await getMetaTitle(page);
        console.log('Meta title after navigation:', titleAfterNavigation);
        // Get the active URL after waitForNavigation
        const urlAfterNavigation = page.url();
        console.log('Active URL after navigation:', urlAfterNavigation);
        
        console.log('Login Successfull');
      } else {
        console.error('Login page with expected Open Graph title not found.');
        // Handle the situation, e.g., by throwing an error or returning
      }

      // Close the login page but keep the browser instance open
      await page.close();
    })();

    await browserInitializingPromise;
    browserInitializingPromise = null; // Reset the promise after the browser is initialized
    return browser;
  }
}

export default async function fetchOpenGraphData(url) {
  const processTask = async () => {
    const browser = await getBrowserInstance();
    const page = await browser.newPage();
    
    // Set User Agent and Viewport as before
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36 Edg/89.0.774.57');
    await page.setViewport({ width: 1920, height: 1080 });

    console.log(`go to link ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2' });

    const ogData = await page.evaluate(() => {
      const ogTags = {};
      document.querySelectorAll('meta').forEach((tag) => {
        if (tag.getAttribute('property')?.startsWith('og:')) {
          const property = tag.getAttribute('property').replace('og:', '');
          ogTags[property] = tag.getAttribute('content');
        }
      });
      return ogTags;
    });

    await page.close();

    console.log(`ogData collected`);
    console.log(ogData);
    return ogData;
  };

  return new Promise((resolve, reject) => {
    fetchQueue.enqueue(async () => {
      try {
        const ogData = await processTask();
        resolve(ogData);
      } catch (error) {
        reject(error);
      }
    });
  });
}