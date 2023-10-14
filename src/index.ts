import {Pokedex} from './foodType'
const fetch = require('node-fetch');
const moment = require('jalali-moment');
const puppeteer = require("puppeteer-core");
const cheerio = require('cheerio');
interface IConfig{
	executablePath:string|null;
}
function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let config= {
	executablePath:"C:\\Users\\Mpc\\AppData\\Local\\Chromium\\Application\\chrome.exe"
}as IConfig

(async() => {
	if(process.env.Dev){
		config.executablePath = null
	}
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
})()
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

const Videolinks = 
	[
		'https://yekta.iut.ac.ir/mod/url/view.php?id=333894',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=333895',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=333896',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=334785',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=334787',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=336253',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=336254',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=336261',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=336262',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=338640',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=338641',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=338642',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=338643',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=338645',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=338646',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=339560',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=339562',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=339563',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=339564',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=340953',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=340954',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=340955',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=340956',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=340957',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=343572',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=343573',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=343574',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=343575',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=343576',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=343577',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=343578',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=344595',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=344596',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=344597',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=345218',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=345219',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=345220',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=345221',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=345222',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=347619',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=347620',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=347621',
		'https://yekta.iut.ac.ir/mod/url/view.php?id=348080']

const jozveLinks =[
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=333890',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=333891',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=333892',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=333903',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=333905',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=333908',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=333909',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=334777',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=334781',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=334782',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=334783',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=334784',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=334786',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=336249',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=336250',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=336251',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=336252',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=336259',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=336260',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=336743',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=336744',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=338624',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=338625',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=338628',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=338629',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=338631',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=338632',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=338637',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=338638',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=338639',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=339553',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=339554',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=339555',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=339556',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=339557',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=339558',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=339559',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=340124',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=340125',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=340948',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=340949',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=340950',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=340951',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=340952',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343565',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343568',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343569',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343570',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343571',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343579',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343580',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343670',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343671',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343672',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343673',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=343674',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=344592',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=344593',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=344594',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=345161',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=345210',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=345211',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=345212',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=345214',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=345215',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=345216',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=345223',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=345897',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=345902',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=347616',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=347617',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=347618',
	'https://yekta.iut.ac.ir/mod/resource/view.php?id=348079'];

async function getLinks(cookies:string){
	const xsrf_token:string = "11TmdkoHT2b_ju2ve6UkGLqVcZVZtlBe4vUiwBqAF1qHX_yCqiyDiOfr9UUTU5d3CG7oXOiSLg0LwAJqjZ2dzUG2U-FpRkZpdqVhPHOY4X0fIRNBssMJJc02aALGhqPQd6odvg2";
	for (const VideoLink of jozveLinks){
	const response = await fetch(VideoLink,
	{
		"headers": {
			"cookie":cookies,
			"x-xsrf-token": xsrf_token,
			"Referer": "https://dining.iut.ac.ir/",
		},
		"method": "GET"
		}
	)
	const html = await response.text()
	const $ = cheerio.load(html);
	const link = $('div.urlworkaround a').attr('href');
	console.log(link);
	}
	console.log("-------------END----------------------")
}
async function getMenu(cookies:string){
	let day = moment().locale('fa').format("DD");
	let month = moment().locale('fa').format("MM");
	console.log(`day : ${day} month:${month}`)
	const xsrf_token:string = "11TmdkoHT2b_ju2ve6UkGLqVcZVZtlBe4vUiwBqAF1qHX_yCqiyDiOfr9UUTU5d3CG7oXOiSLg0LwAJqjZ2dzUG2U-FpRkZpdqVhPHOY4X0fIRNBssMJJc02aALGhqPQd6odvg2";
	const response = await fetch(`https://dining.iut.ac.ir/api/v0/Reservation?lastdate=1402%2F${month}%2F${day-6}&navigation=7`, {
		"headers": {
			"accept": "application/json, text/plain, */*",
			"cookie":cookies,
			"x-xsrf-token": xsrf_token,
			"Referer": "https://dining.iut.ac.ir/",
		},
		"method": "GET"
	});
	const res = await response.json();
	await reserveLaunch(cookies,await res);
	await reserveDinner(cookies,await res);
	await reserveBreakfest(cookies,await res);
}
async function reserveLaunch(cookies:string,food:Pokedex[])
{
	console.log(food[1].Meals[1].FoodMenu[0]);
	for(let i=0;i<7;i++)
	{
		let x =1;
		if(i<5){x=1}
		else{x=0}
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
		let x =2;
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
		let x =1;
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
