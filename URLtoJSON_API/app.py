from flask import Flask, request, jsonify
import requests
from flask_cors import CORS, cross_origin
from bs4 import BeautifulSoup
import openai
import json

app = Flask(__name__)
cors = CORS(app)

def scrape_medium_article(url):
    """
      This code uses the link in the request to extract the information and return it in the
      response.
      Input: URL
      Output: scraped text
    """
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }

    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    main_content = soup.find('article')
    paragraphs = main_content.find_all('p')
    extracted_text = ' '.join([p.get_text() for p in paragraphs])

    extracted_text = extracted_text.strip()

    return extracted_text

def get_presentation_json(text):
    openai.api_key = "YOUR API KEY"

    prompt = '''you are a presentation maker. I will be giving you article text and you have to convert that into presentation, try to make it concise and crisp and also make it in point form and strictly follow the format that I will be giving you. The format of returning is json format 
                FORMAT:
                {
                "presentationTitle": "title of presentation",
                "slide": [{
                "title": "Title of the slide goes here",
                "points": ['all the points will go in this list.Write complete and descriptive sentences for each slide maximum 10-15 words long, explaining the concepts told in the text. Remember that content should be in points to enhance readability.'],
                "imageDescription" : "strictly give an image description that complements the written content and enhances the visual appeal of the slide, promoting audience understanding and engagement.You can write as 15-30 words long description."
                }]
                }
                In the response, return the json object of the above told format. Do not skip any part of the format. If you are not able to generate the answer, return the json object with None object.
                '''

    def api_call(text, prompt):
      completion = openai.ChatCompletion.create(
        model ="gpt-3.5-turbo-16k",
        temperature = 0.8,
        max_tokens = 2000,
        messages = [
          {"role": "system", "content":prompt},
          {"role": "user", "content": text}
        ]
      )
      response = completion.choices[0].message
      return response["content"]
    
    return api_call(text, prompt)

@app.route("/scrape_and_convert", methods=['POST'])
@cross_origin()
def scrape_and_convert():
    # Get the URL from the request body
    data = request.json
    url = data.get('url')
    if not url:
        return jsonify({"error": "URL is missing from the request body."}), 400

    # Scrape the Medium article
    scraped_text = scrape_medium_article(url)

    # Generate the presentation JSON using OpenAI GPT-3.5 Turbo 16k model
    json_response = get_presentation_json(scraped_text)
    data_json = json.loads(json_response)
    data_json = json.dumps(data_json, indent=4)
    print(data_json)

    return data_json

app.run(host="0.0.0.0", port=4000)
