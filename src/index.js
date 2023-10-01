"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetch = require('node-fetch');
var moment = require('jalali-moment');
var puppeteer = require("puppeteer-core");
var exepath = "C:\\Users\\Mpc\\AppData\\Local\\Chromium\\Application\\chrome.exe";
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, coockies, NameAndValue;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer.launch({
                    executablePath: exepath,
                })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, page.goto("https://dining.iut.ac.ir/Cas/Login/?scheme=CAS", { waitUntil: 'networkidle2' })];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.$eval('input[id=username]', function (el) { return el.value = '40017583'; })];
            case 4:
                _a.sent();
                return [4 /*yield*/, page.$eval('input[id=password]', function (el) { return el.value = 'M1rz@e181'; })];
            case 5:
                _a.sent();
                return [4 /*yield*/, page.$eval('button[name=submitBtn]', function (btn) { return btn.click(); })];
            case 6:
                _a.sent();
                return [4 /*yield*/, page.waitForNavigation('networkidle2')];
            case 7:
                _a.sent();
                return [4 /*yield*/, page.cookies()];
            case 8:
                coockies = _a.sent();
                NameAndValue = coockies.map(function (cookie) { return "".concat(cookie.name, "=").concat(cookie.value); }).join('; ');
                return [4 /*yield*/, getLinks(NameAndValue)];
            case 9:
                _a.sent();
                return [4 /*yield*/, page.close()];
            case 10:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
var Videolinks = [
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
    'https://yekta.iut.ac.ir/mod/url/view.php?id=348080'
];
var jozveLinks = [
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
    'https://yekta.iut.ac.ir/mod/resource/view.php?id=348079'
];
function getLinks(cookies) {
    return __awaiter(this, void 0, void 0, function () {
        var xsrf_token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    xsrf_token = "11TmdkoHT2b_ju2ve6UkGLqVcZVZtlBe4vUiwBqAF1qHX_yCqiyDiOfr9UUTU5d3CG7oXOiSLg0LwAJqjZ2dzUG2U-FpRkZpdqVhPHOY4X0fIRNBssMJJc02aALGhqPQd6odvg2";
                    return [4 /*yield*/, fetch(jozveLinks[0], {
                            "headers": {
                                "accept": "application/json, text/plain, */*",
                                "cookie": cookies,
                                "x-xsrf-token": xsrf_token,
                                "Referer": "https://dining.iut.ac.ir/",
                            },
                            "method": "GET"
                        })];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    return [2 /*return*/];
            }
        });
    });
}
function getMenu(cookies) {
    return __awaiter(this, void 0, void 0, function () {
        var day, month, xsrf_token, response, res, _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    day = moment().locale('fa').format("DD");
                    month = moment().locale('fa').format("MM");
                    xsrf_token = "11TmdkoHT2b_ju2ve6UkGLqVcZVZtlBe4vUiwBqAF1qHX_yCqiyDiOfr9UUTU5d3CG7oXOiSLg0LwAJqjZ2dzUG2U-FpRkZpdqVhPHOY4X0fIRNBssMJJc02aALGhqPQd6odvg2";
                    return [4 /*yield*/, fetch("https://dining.iut.ac.ir/api/v0/Reservation?lastdate=1402%2F".concat(month, "%2F").concat(day - 6, "&navigation=7"), {
                            "headers": {
                                "accept": "application/json, text/plain, */*",
                                "cookie": cookies,
                                "x-xsrf-token": xsrf_token,
                                "Referer": "https://dining.iut.ac.ir/",
                            },
                            "method": "GET"
                        })];
                case 1:
                    response = _g.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    res = _g.sent();
                    _a = reserveLaunch;
                    _b = [cookies];
                    return [4 /*yield*/, res];
                case 3: return [4 /*yield*/, _a.apply(void 0, _b.concat([_g.sent()]))];
                case 4:
                    _g.sent();
                    _c = reserveDinner;
                    _d = [cookies];
                    return [4 /*yield*/, res];
                case 5: return [4 /*yield*/, _c.apply(void 0, _d.concat([_g.sent()]))];
                case 6:
                    _g.sent();
                    _e = reserveBreakfest;
                    _f = [cookies];
                    return [4 /*yield*/, res];
                case 7: return [4 /*yield*/, _e.apply(void 0, _f.concat([_g.sent()]))];
                case 8:
                    _g.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function reserveLaunch(cookies, food) {
    return __awaiter(this, void 0, void 0, function () {
        var i, x, body, response, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < 7)) return [3 /*break*/, 5];
                    x = 1;
                    if (i < 5) {
                        x = 1;
                    }
                    else {
                        x = 0;
                    }
                    body = "[\n\t\t\t{\n\t\t\t\"Row\":4,\n\t\t\t\"Id\":\"".concat(food[i].Meals[1].Id, "\",\n\t\t\t\"Date\":\"").concat(food[i].Meals[1].Date, "\",\n\t\t\t\"MealId\":\"").concat(food[i].Meals[1].MealId, "\",\n\t\t\t\"FoodId\":\"").concat(food[i].Meals[1].FoodMenu[x].FoodId, "\",\n\t\t\t\"FoodName\":\"").concat(food[i].Meals[1].FoodMenu[x].FoodName, "\",\n\t\t\t\"SelfId\":\"").concat(food[i].Meals[1].FoodMenu[x].SelfMenu[0].SelfId, "\",\n\t\t\t\"LastCounts\":0,\n\t\t\t\"Counts\":1,\n\t\t\t\"Price\":\"").concat(food[i].Meals[1].FoodMenu[x].SelfMenu[0].Price, "\",\n\t\t\t\"SobsidPrice\":0,\n\t\t\t\"PriceType\":2,\n\t\t\t\"State\":0,\n\t\t\t\"Type\":\"").concat(food[i].Meals[1].FoodMenu[x].FoodType, "\",\n\t\t\t\"OP\":1,\n\t\t\t\"OpCategory\":1,\n\t\t\t\"Provider\":1,\n\t\t\t\"Saved\":0,\n\t\t\t\"MealName\":\"").concat(food[i].Meals[1].MealName, "\",\n\t\t\t\"DayName\":\"").concat(food[i].Meals[1].DayName, "\",\n\t\t\t\"SelfName\":\"").concat(food[i].Meals[1].FoodMenu[x].SelfMenu[0].SelfName, "\",\n\t\t\t\"DayIndex\":\"").concat(i, "\",\n\t\t\t\"MealIndex\":0}]");
                    body = JSON.stringify(JSON.parse(body), null, 0);
                    return [4 /*yield*/, fetch("https://dining.iut.ac.ir/api/v0/Reservation", {
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
                                "cookie": cookies,
                                "Referer": "https://dining.iut.ac.ir/",
                                "Referrer-Policy": "strict-origin-when-cross-origin"
                            },
                            "body": body,
                            "method": "POST"
                        })];
                case 2:
                    response = _c.sent();
                    _b = (_a = console).log;
                    return [4 /*yield*/, response.text()];
                case 3:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function reserveDinner(cookies, food) {
    return __awaiter(this, void 0, void 0, function () {
        var i, x, body, response, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < 5)) return [3 /*break*/, 5];
                    x = 2;
                    body = "[\n\t\t\t{\n\t\t\t\"Row\":4,\n\t\t\t\"Id\":\"".concat(food[i].Meals[2].Id, "\",\n\t\t\t\"Date\":\"").concat(food[i].Meals[2].Date, "\",\n\t\t\t\"MealId\":\"").concat(food[i].Meals[2].MealId, "\",\n\t\t\t\"FoodId\":\"").concat(food[i].Meals[2].FoodMenu[x].FoodId, "\",\n\t\t\t\"FoodName\":\"").concat(food[i].Meals[2].FoodMenu[x].FoodName, "\",\n\t\t\t\"SelfId\":\"").concat(food[i].Meals[2].FoodMenu[x].SelfMenu[0].SelfId, "\",\n\t\t\t\"LastCounts\":0,\n\t\t\t\"Counts\":1,\n\t\t\t\"Price\":\"").concat(food[i].Meals[2].FoodMenu[x].SelfMenu[0].Price, "\",\n\t\t\t\"SobsidPrice\":0,\n\t\t\t\"PriceType\":2,\n\t\t\t\"State\":0,\n\t\t\t\"Type\":\"").concat(food[i].Meals[2].FoodMenu[x].FoodType, "\",\n\t\t\t\"OP\":1,\n\t\t\t\"OpCategory\":1,\n\t\t\t\"Provider\":1,\n\t\t\t\"Saved\":0,\n\t\t\t\"MealName\":\"").concat(food[i].Meals[2].MealName, "\",\n\t\t\t\"DayName\":\"").concat(food[i].Meals[2].DayName, "\",\n\t\t\t\"SelfName\":\"").concat(food[i].Meals[2].FoodMenu[x].SelfMenu[0].SelfName, "\",\n\t\t\t\"DayIndex\":\"").concat(i, "\",\n\t\t\t\"MealIndex\":0}]");
                    body = JSON.stringify(JSON.parse(body), null, 0);
                    return [4 /*yield*/, fetch("https://dining.iut.ac.ir/api/v0/Reservation", {
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
                                "cookie": cookies,
                                "Referer": "https://dining.iut.ac.ir/",
                                "Referrer-Policy": "strict-origin-when-cross-origin"
                            },
                            "body": body,
                            "method": "POST"
                        })];
                case 2:
                    response = _c.sent();
                    _b = (_a = console).log;
                    return [4 /*yield*/, response.text()];
                case 3:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function reserveBreakfest(cookies, food) {
    return __awaiter(this, void 0, void 0, function () {
        var i, x, body, response, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    i = 1;
                    _c.label = 1;
                case 1:
                    if (!(i < 5)) return [3 /*break*/, 5];
                    x = 1;
                    body = "[\n\t\t\t{\n\t\t\t\"Row\":4,\n\t\t\t\"Id\":\"".concat(food[i].Meals[0].Id, "\",\n\t\t\t\"Date\":\"").concat(food[i].Meals[0].Date, "\",\n\t\t\t\"MealId\":\"").concat(food[i].Meals[0].MealId, "\",\n\t\t\t\"FoodId\":\"").concat(food[i].Meals[0].FoodMenu[x].FoodId, "\",\n\t\t\t\"FoodName\":\"").concat(food[i].Meals[0].FoodMenu[x].FoodName, "\",\n\t\t\t\"SelfId\":\"").concat(food[i].Meals[0].FoodMenu[x].SelfMenu[0].SelfId, "\",\n\t\t\t\"LastCounts\":0,\n\t\t\t\"Counts\":1,\n\t\t\t\"Price\":\"").concat(food[i].Meals[0].FoodMenu[x].SelfMenu[0].Price, "\",\n\t\t\t\"SobsidPrice\":0,\n\t\t\t\"PriceType\":2,\n\t\t\t\"State\":0,\n\t\t\t\"Type\":\"").concat(food[i].Meals[0].FoodMenu[x].FoodType, "\",\n\t\t\t\"OP\":1,\n\t\t\t\"OpCategory\":1,\n\t\t\t\"Provider\":1,\n\t\t\t\"Saved\":0,\n\t\t\t\"MealName\":\"").concat(food[i].Meals[0].MealName, "\",\n\t\t\t\"DayName\":\"").concat(food[i].Meals[0].DayName, "\",\n\t\t\t\"SelfName\":\"").concat(food[i].Meals[0].FoodMenu[x].SelfMenu[0].SelfName, "\",\n\t\t\t\"DayIndex\":\"").concat(i, "\",\n\t\t\t\"MealIndex\":0}]");
                    body = JSON.stringify(JSON.parse(body), null, 0);
                    return [4 /*yield*/, fetch("https://dining.iut.ac.ir/api/v0/Reservation", {
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
                                "cookie": cookies,
                                "Referer": "https://dining.iut.ac.ir/",
                                "Referrer-Policy": "strict-origin-when-cross-origin"
                            },
                            "body": body,
                            "method": "POST"
                        })];
                case 2:
                    response = _c.sent();
                    _b = (_a = console).log;
                    return [4 /*yield*/, response.text()];
                case 3:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
