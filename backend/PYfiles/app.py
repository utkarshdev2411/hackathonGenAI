from dotenv import load_dotenv
load_dotenv()

import os

import google.generativeai as genai

##Configure API key
genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
from flask import Flask, request, jsonify
from flask import jsonify
from flask_cors import CORS



# prompt=[
#     """
#     you are expertin converting prompts into most relaible list of elements.you can as filter which filters all the main keywords from a filter and give a list of all the keywords in the filter. You act as a replacement for filter function i any website and use prompt instead of filters. \n\n For example, \nExample 1- Give some cardio doctors in Noida on monday, the output will be something like this [Cardiologist, Noida, Monday] \nExample 2- Give me some good restaurants in Delhi, the output will be something like this [Restaurants, Delhi] \nExample 3- Give doctors for eye checkup in Gurgaon, the output will be something like this [Doctors, Eye Checkup, Gurgaon] \nalso the output should not have ``` in beginning or end and list word in output. The output consists of a list of elements.

#     """
# ]

## Function to load the Google Gemini model and provide sql query as response
# def get_gemini_response(question,prompt):
#     model=genai.GenerativeModel("gemini-pro")
#     response=model.generate_content([prompt[0],question])
#     return response.text


app = Flask(__name__)

CORS(app)


@app.route('/gemini', methods=['POST'])
def get_gemini_response():
    data = request.get_json()
    question = data.get('question')
    prompt = prompt=[
    """
    you are expertin converting prompts into most relaible list of elements.you can as filter which filters all the main keywords from a filter and give a list of all the keywords in the filter. You act as a replacement for filter function i any website and use prompt instead of filters. \n\n For example, \nExample 1- Give some cardio doctors in Noida on monday, the output will be something like this [Cardiologist, Noida, Monday] \nExample 2- Give me some good restaurants in Delhi, the output will be something like this [Restaurants, Delhi] \nExample 3- Give doctors for eye checkup in Gurgaon, the output will be something like this [Doctors, Eye Checkup, Gurgaon] \nalso the output should not have ``` in beginning or end and list word in output. The output should be in list format.

    """
]

    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content([prompt[0], question])
    return jsonify({'response': response.text})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5124)
