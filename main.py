from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
import json
import sys 

opt = Options()
opt.add_argument("--headless")
driver = webdriver.Firefox(options=opt)
user = sys.argv[1]
password  = sys.argv[2]
opt = webdriver.ChromeOptions()
opt.headless = True
driver = webdriver.Chrome(executable_path="./chromedriver",options=opt,)
url = "https://dining.iut.ac.ir/"
driver.get(url)
xpath = "/html/body/div/div/div[2]/div/div/div[2]/div/form/div/a"
try:
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, xpath))
    )
finally:
    webpath = driver.find_element(By.XPATH,xpath)
    webpath.click()
    elem = driver.find_element(By.ID,"username")
    elem.send_keys(user)
    passelm = driver.find_element(By.ID,"password")
    passelm.send_keys(password)
    elem.send_keys(Keys.RETURN)
wait = WebDriverWait(driver, 5)
desired_url = "https://dining.iut.ac.ir/#!/UserIndex"
try:
    wait.until(lambda driver: driver.current_url == desired_url)
except TimeoutException:
    sys.exit(-1)
coockies = driver.get_cookies();
s = requests.Session()
for coockie in coockies:
    s.cookies.set(coockie['name'],coockie['value'])

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.5',
    'X-XSRF-Token': 'QqM2meLalyqJTj8MbO4L2Mo7gwFUkx1utVhXulwCdPj_yzRqiywEEjXVLpSAGCQFZXbIUGfkxL6UCwr93r0yPEjpZvmNCh5GqPUXv_WsX-jkFBmSa6j-eTaZ2jpcjwz1youltA2',
    'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Connection': 'keep-alive',
    'Referer': 'https://dining.iut.ac.ir/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
}

params = {
    'lastdate': '1401/09/26',
    'navigation': '7',
}

resp = s.get('https://dining.iut.ac.ir/api/v0/Reservation', params=params, headers=headers)
food = json.loads(resp.text)
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.5',
    'X-XSRF-Token': 'QqM2meLalyqJTj8MbO4L2Mo7gwFUkx1utVhXulwCdPj_yzRqiywEEjXVLpSAGCQFZXbIUGfkxL6UCwr93r0yPEjpZvmNCh5GqPUXv_WsX-jkFBmSa6j-eTaZ2jpcjwz1youltA2',
    'Content-Type': 'application/json;charset=utf-8',
    'Origin': 'https://dining.iut.ac.ir',
    'Connection': 'keep-alive',
    'Referer': 'https://dining.iut.ac.ir/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
}

for i in range(5):
    json_data = [
        {
            'Row': 6,
            'Id': food[i]['Meals'][1]['Id'],#{DayIndex}/Meals/Id
            'Date': food[i]['DayDate'],
            'MealId':food[i]['Meals'][1]['MealId'] ,#{DayIndex}/Meals/MealId
            'FoodId':food[i]['Meals'][1]['FoodMenu'][0]['FoodId'],#{DayIndex}/Meals/FoodMenu/FoodId
            'FoodName':food[i]['Meals'][1]['FoodMenu'][0]['FoodName'],#{DayIndex}/Meals/FoodMenu/FoodName
            'SelfId': food[i]['Meals'][1]['FoodMenu'][0]['SelfMenu'][0]['SelfId'],#{DayIndex}/Meals/FoodMenu/SelfMenu/SelfId
            'LastCounts': 0,
            'Counts': 1,
            'Price':food[i]['Meals'][1]['FoodMenu'][0]['SelfMenu'][0]['Price'],#{DayIndex}/Meals/FoodMenu/SelfMenu/Price
            'SobsidPrice': 0,
            'PriceType': 2,
            'State': 1,#0 (always or you fuck'ed up
            'Type': food[i]['Meals'][1]['FoodMenu'][0]['FoodType'],#{DayIndex}/Meals/FoodMenu/FoodType
            'OP': 1,
            'OpCategory': 1,
            'Provider': 1,#{DayIndex}/Meals/FoodMenu/SelfMenu/SelfId (Check It)
            'Saved': 1,
            'MealName': food[i]['Meals'][1]["MealName"],#{DayIndex}/Meals/MealName
            'DayName': food[i]["Meals"][1]["DayName"],#{DayIndex}/Meals/DayName
            'SelfName': food[i]["Meals"][1]["FoodMenu"][0]['SelfMenu'][0]["SelfName"],#{DayIndex}/Meals/FoodMenu/SelfName
            'DayIndex':i,#{DayIndex} == {DayIndex}/DayId
            'MealIndex': 1,
        },
    ]
    response = s.post('https://dining.iut.ac.ir/api/v0/Reservation', headers=headers, json=json_data)

#for i in range(0):
 #   json_data = [
  #      {
 #           'Row': 6,
 #           'Id': food[i]['Meals'][2]['Id'],#{DayIndex}/Meals/Id
  #          'Date': food[i]['DayDate'],
 #           'MealId':food[i]['Meals'][2]['MealId'] ,#{DayIndex}/Meals/MealId
  #          'FoodId':food[i]['Meals'][2]['FoodMenu'][0]['FoodId'],#{DayIndex}/Meals/FoodMenu/FoodId
  #          'FoodName':food[i]['Meals'][2]['FoodMenu'][0]['FoodName'],#{DayIndex}/Meals/FoodMenu/FoodName
   #         'SelfId': food[i]['Meals'][2]['FoodMenu'][0]['SelfMenu'][0]['SelfId'],#{DayIndex}/Meals/FoodMenu/SelfMenu/SelfId
   #         'LastCounts': 0,
 #           'Counts': 1,
  #          'Price':food[i]['Meals'][2]['FoodMenu'][0]['SelfMenu'][0]['Price'],#{DayIndex}/Meals/FoodMenu/SelfMenu/Price
   #         'SobsidPrice': 0,
    #        'PriceType': 1,
   #         'State': 0,#0 (always or you fuck'ed up
     #       'Type': food[i]['Meals'][2]['FoodMenu'][0]['FoodType'],#{DayIndex}/Meals/FoodMenu/FoodType
     #       'OP': 1,
    #        'OpCategory': 1,
     #       'Provider': 1,#{DayIndex}/Meals/FoodMenu/SelfMenu/SelfId (Check It)
     #       'Saved': 1,
     #       'MealName': food[i]['Meals'][2]["MealName"],#{DayIndex}/Meals/MealName
     #       'DayName': food[i]["Meals"][2]["DayName"],#{DayIndex}/Meals/DayName
    #        'SelfName': food[i]["Meals"][2]["FoodMenu"][0]['SelfMenu'][0]["SelfName"],#{DayIndex}/Meals/FoodMenu/SelfName
    #        'DayIndex':i,#{DayIndex} == {DayIndex}/DayId
 #           'MealIndex': 1,
 #       },
  #  ]
    response = s.post('https://dining.iut.ac.ir/api/v0/Reservation', headers=headers, json=json_data)
    print(response.json())
driver.close()
