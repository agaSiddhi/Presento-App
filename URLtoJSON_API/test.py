import requests

url = "http://127.0.0.1:4000/scrape_and_convert"
data = {
    "url": "https://medium.com/towards-data-science/must-read-papers-on-gans-b665bbae3317"  # Replace with the actual Medium article URL
}

response = requests.post(url, json=data)
print(response.json())
