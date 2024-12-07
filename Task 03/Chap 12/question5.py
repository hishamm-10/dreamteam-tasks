import requests
url = ""
response = requests.get(url)
with open('filename.html','wb') as file:
    file.write(response.content)