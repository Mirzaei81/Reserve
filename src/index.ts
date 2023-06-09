const puppeteer = require("pupeteer");
const path:string = "C:\\Users\\Mpc\\AppData\\Local\\Chromium\\Application\\chrome.exe"
const url:string = "https://dining.iut.ac.ir/"
(async() => {
	const browser = await puppeteer.launch({
		executablePath: path,
	});
	const context = await browser.createIncognitoBrowserContext();
	const page = await context.newPage();
	page.goto(url);

	await browser.close();
})()
