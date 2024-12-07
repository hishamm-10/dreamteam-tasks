from selenium import webdriver
from selenium.webdriver.common.keys import Keys
driver = webdriver.Chrome()
driver.get("")
button = driver.find_element("id", "example-button")
button.click()
input_field = driver.find_element("id", "example-input")
input_field.send_keys("Hello, Selenium!")
input_field.send_keys(Keys.ENTER)
driver.quit()
