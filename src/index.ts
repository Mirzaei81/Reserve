import {Pokedex} from './foodType'
import { jozveLinks} from './links';
const fetch = require('node-fetch');
const moment = require('jalali-moment');
const puppeteer = require("puppeteer-core");
const cheerio = require('cheerio');
import * as fs from  "fs" ;
let breakfest = [2,2,2,2,2]
let launch = [1,0,0,0,0]
let diner = [3,3,4,3,4]
interface IConfig{
	executablePath:string|null;
}

function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let config={
	executablePath:process.env.CHROME_PATH,
}as IConfig
(async() => {
	const browser = await puppeteer.launch(config);
	const page= await browser.newPage();
	await page.goto("https://dining.iut.ac.ir/Cas/Login/?scheme=CAS",{ waitUntil:'networkidle2'});
	await page.$eval('input[id=username]',(el:HTMLInputElement)=> el.value = '40017583');
	await page.$eval('input[id=password]',(el:HTMLInputElement)=> el.value = 'M1rz@e181');
	await page.$eval('button[name=submitBtn]',(btn:HTMLButtonElement) => btn.click());
	await page.waitForNavigation('networkidle2');
	const coockies = await page.cookies();
	let  NameAndValue = coockies.map((cookie:any) => `${cookie.name}=${cookie.value}`).join('; ');
	await getMenu(NameAndValue);
	await page.close()
})();
async function getCoockiesYekta(){
	const browser = await puppeteer.launch(config);
	const page= await browser.newPage();
	await page.goto("https://webauth.iut.ac.ir/cas/login?service=https%3A%2F%2Fyekta.iut.ac.ir%2Flogin%2Findex.php%3FauthCASattras%3DCASattras",{ waitUntil:'networkidle2'});
	await page.$eval('input[id=username]',(el:HTMLInputElement)=> el.value = '40017583');
	await page.$eval('input[id=password]',(el:HTMLInputElement)=> el.value = 'M1rz@e181');
	await page.$eval('button[name=submitBtn]',(btn:HTMLButtonElement) => btn.click());
	await sleep(5000)
	const coockies = await page.cookies();
	let  NameAndValue = coockies.map((cookie:any) => `${cookie.name}=${cookie.value}`).join('; ');
	await getLinks(NameAndValue)
	await page.close()
}

async function getLinks(cookies:string){
	const xsrf_token:string = "11TmdkoHT2b_ju2ve6UkGLqVcZVZtlBe4vUiwBqAF1qHX_yCqiyDiOfr9UUTU5d3CG7oXOiSLg0LwAJqjZ2dzUG2U-FpRkZpdqVhPHOY4X0fIRNBssMJJc02aALGhqPQd6odvg2";
	const response = await fetch('https://yekta.iut.ac.ir/mod/assign/view.php?id=195738',
	{
		"headers": {
			"cookie":cookies,
			"x-xsrf-token": xsrf_token,
		},
		"method": "GET"
		}
	)
	const html = await response.text()
	const $ = cheerio.load(html);
	const link = $('div.urlworkaround a').attr('href');
	console.log(link);
	console.log("-------------END----------------------")
}
async function getMenu(cookies:string){
	let day = moment().locale('fa').format("DD")-3;
	let month = moment().locale('fa').format("MM");
	if(day<0){
		month-=1
		day=29
	}
	let paddedNumber = day.toString().padStart(2, '0');

	console.log(`day : ${paddedNumber} month : ${month}`)
	const xsrf_token:string =
	"11TmdkoHT2b_ju2ve6UkGLqVcZVZtlBe4vUiwBqAF1qHX_yCqiyDiOfr9UUTU5d3CG7oXOiSLg0LwAJqjZ2dzUG2U-FpRkZpdqVhPHOY4X0fIRNBssMJJc02aALGhqPQd6odvg2";

	const response = await fetch(`https://dining.iut.ac.ir/api/v0/Reservation?lastdate=1402%2F${month}%2F${paddedNumber}&navigation=7`, {
		"headers": {
			"accept": "application/json, text/plain, */*",
			"cookie":cookies,
			"x-xsrf-token": xsrf_token,
			"Referer": "https://dining.iut.ac.ir/",
		},
		"method": "GET"
	});
	const res = await response.json();
	fs.writeFileSync("./menu.json",JSON.stringify(res))
	console.log(res)
	await reserveLaunch(cookies,await res);
	await reserveDinner(cookies,await res);
	await reserveBreakfest(cookies,await res);
}
async function reserveLaunch(cookies:string,food:Pokedex[])
{
	console.log(food[1].Meals[1].FoodMenu[0]);
	console.log(food);
	for(let i=0;i<5;i++)
	{
		let x =launch[i];
		let body = `[
			{
			"Row":4,
			"Id":"${food[i].Meals[1].Id}",
			"Date":"${food[i].Meals[1].Date}",
			"MealId":"${food[i].Meals[1].MealId}",
			"FoodId":"${food[i].Meals[1].FoodMenu[0].FoodId}",
			"FoodName":"${food[i].Meals[1].FoodMenu[0].FoodName}",
			"SelfId":"${food[i].Meals[1].FoodMenu[0].SelfMenu[0].SelfId}",
			"LastCounts":0,
			"Counts":1,
			"Price":"${food[i].Meals[1].FoodMenu[0].SelfMenu[0].Price}",
			"SobsidPrice":0,
			"PriceType":2,
			"State":0,
			"Type":"${food[i].Meals[1].FoodMenu[0].FoodType}",
			"OP":1,
			"OpCategory":1,
			"Provider":1,
			"Saved":0,
			"MealName":"${food[i].Meals[1].MealName}",
			"DayName":"${food[i].Meals[1].DayName}",
			"SelfName":"${food[i].Meals[1].FoodMenu[0].SelfMenu[0].SelfName}",
			"DayIndex":"${i}",
			"MealIndex":0}]`;
		body = JSON.stringify(JSON.parse(body), null, 0);
		const response = await fetch("https://dining.iut.ac.ir/api/v0/Reservation", {
			"headers": {
				"accept-language": "en-US,en;q=0.5",
				"content-type": "application/json;charset=UTF-8",
				"sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Brave\";v=\"114\"",
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": "\"Windows\"",
				"sec-fetch-dest": "empty",
				"sec-fetch-site": "same-origin",
				"accept": "application/json, text/plain, */*",
				"x-xsrf-token": "5AjTIYETvAKeUKYPbNtIjsqiWMqf_0xT1f_eNdZvHmtGvC7AQoH8zzOjd3Qmren6hWeL0l8vwPQeiHYJYQMaMdjsvnoix8r1PCwR7U2_SWD0C6P1FHaUYY-Owo19Nwg-TUHv3w2",
				"cookie":cookies,
				"Referer": "https://dining.iut.ac.ir/",
				"Referrer-Policy": "strict-origin-when-cross-origin"
			},
			"body": body,
			"method": "POST"
			})
		console.log(await response.text());
	}
}

async function reserveDinner(cookies:string,food:Pokedex[])
{
	for(let i=0;i<5;i++)
	{
		let x =diner[i];
		let body = `[
			{
			"Row":4,
			"Id":"${food[i].Meals[2].Id}",
			"Date":"${food[i].Meals[2].Date}",
			"MealId":"${food[i].Meals[2].MealId}",
			"FoodId":"${food[i].Meals[2].FoodMenu[x].FoodId}",
			"FoodName":"${food[i].Meals[2].FoodMenu[x].FoodName}",
			"SelfId":"${food[i].Meals[2].FoodMenu[x].SelfMenu[0].SelfId}",
			"LastCounts":0,
			"Counts":1,
			"Price":"${food[i].Meals[2].FoodMenu[x].SelfMenu[0].Price}",
			"SobsidPrice":0,
			"PriceType":2,
			"State":0,
			"Type":"${food[i].Meals[2].FoodMenu[x].FoodType}",
			"OP":1,
			"OpCategory":1,
			"Provider":1,
			"Saved":0,
			"MealName":"${food[i].Meals[2].MealName}",
			"DayName":"${food[i].Meals[2].DayName}",
			"SelfName":"${food[i].Meals[2].FoodMenu[x].SelfMenu[0].SelfName}",
			"DayIndex":"${i}",
			"MealIndex":0}]`;
		body = JSON.stringify(JSON.parse(body), null, 0);
		const response = await fetch("https://dining.iut.ac.ir/api/v0/Reservation", {
			"headers": {
				"accept-language": "en-US,en;q=0.5",
				"content-type": "application/json;charset=UTF-8",
				"sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Brave\";v=\"114\"",
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": "\"Windows\"",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"sec-gpc": "1",
				"accept": "application/json, text/plain, */*",
				"x-xsrf-token": "5AjTIYETvAKeUKYPbNtIjsqiWMqf_0xT1f_eNdZvHmtGvC7AQoH8zzOjd3Qmren6hWeL0l8vwPQeiHYJYQMaMdjsvnoix8r1PCwR7U2_SWD0C6P1FHaUYY-Owo19Nwg-TUHv3w2",
				"cookie":cookies,
				"Referer": "https://dining.iut.ac.ir/",
				"Referrer-Policy": "strict-origin-when-cross-origin"
			},
			"body": body,
			"method": "POST"
			})
		console.log(await response.text());
	}
}
async function reserveBreakfest(cookies:string,food:Pokedex[])
{
	for(let i=1;i<5;i++)
	{
		let x =breakfest[i];
		let body = `[
			{
			"Row":4,
			"Id":"${food[i].Meals[0].Id}",
			"Date":"${food[i].Meals[0].Date}",
			"MealId":"${food[i].Meals[0].MealId}",
			"FoodId":"${food[i].Meals[0].FoodMenu[x].FoodId}",
			"FoodName":"${food[i].Meals[0].FoodMenu[x].FoodName}",
			"SelfId":"${food[i].Meals[0].FoodMenu[x].SelfMenu[0].SelfId}",
			"LastCounts":0,
			"Counts":1,
			"Price":"${food[i].Meals[0].FoodMenu[x].SelfMenu[0].Price}",
			"SobsidPrice":0,
			"PriceType":2,
			"State":0,
			"Type":"${food[i].Meals[0].FoodMenu[x].FoodType}",
			"OP":1,
			"OpCategory":1,
			"Provider":1,
			"Saved":0,
			"MealName":"${food[i].Meals[0].MealName}",
			"DayName":"${food[i].Meals[0].DayName}",
			"SelfName":"${food[i].Meals[0].FoodMenu[x].SelfMenu[0].SelfName}",
			"DayIndex":"${i}",
			"MealIndex":0}]`;
		body = JSON.stringify(JSON.parse(body), null, 0);
		const response = await fetch("https://dining.iut.ac.ir/api/v0/Reservation", {
			"headers": {
				"accept-language": "en-US,en;q=0.5",
				"content-type": "application/json;charset=UTF-8",
				"sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Brave\";v=\"114\"",
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": "\"Windows\"",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"sec-gpc": "1",
				"accept": "application/json, text/plain, */*",
				"x-xsrf-token": "5AjTIYETvAKeUKYPbNtIjsqiWMqf_0xT1f_eNdZvHmtGvC7AQoH8zzOjd3Qmren6hWeL0l8vwPQeiHYJYQMaMdjsvnoix8r1PCwR7U2_SWD0C6P1FHaUYY-Owo19Nwg-TUHv3w2",
				"cookie":cookies,
				"Referer": "https://dining.iut.ac.ir/",
				"Referrer-Policy": "strict-origin-when-cross-origin"
			},
			"body": body,
			"method": "POST"
			})
		console.log(await response.text());
	}
}
