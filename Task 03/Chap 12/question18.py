from selenium import webdriver
driver = webdriver.Chrome()
driver.get("https://www.example.com")
driver.get("https://www.example.org")
driver.back()
driver.forward()
driver.refresh()
driver.quit()
