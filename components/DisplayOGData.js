import React from "react";
import puppeteer from 'puppeteer';

export default async function DisplayOGData({ link }) {
  const ogData = await getData(link)

  return (
    <div className="single-open-graph-metadata">
      {ogData && (
        <>
          <img src={ogData["og:image"]} alt={ogData["og:title"]} />
          <h4>{ogData["og:title"]}</h4>
          <p>{ogData["og:description"]}</p>
        </>
      )}
    </div>
  );
}

export async function getData(link) {
  try {
    var browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3");
    await page.goto(link, { waitUntil: "networkidle2" });

    var ogData = {};
    var metaTags = await page.$$eval('meta', tags => {
        return Array.from(tags, tag => ({
          property: tag.getAttribute('property'),
          content: tag.getAttribute('content'),
        }));
    });

    for (var tag of metaTags) {
        if (tag.property && tag.property.startsWith('og:')) {
          ogData[tag.property] = tag.content;
        }
    }
  } catch (error) {
    console.error(`Failed to fetch Open Graph data: ${error}`);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
    
  return ogData;
}
