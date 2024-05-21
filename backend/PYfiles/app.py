from dotenv import load_dotenv
load_dotenv()

import os

import google.generativeai as genai

##Configure API key
genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))




prompt=[
    """
    you are expertin converting prompts into most relaible list of elements.you can as filter which filters all the main keywords from a filter and give a list of all the keywords in the filter. You act as a replacement for filter function i any website and use prompt instead of filters. \n\n For example, \nExample 1- Give some cardio doctors in Noida on monday, the output will be something like this [Cardiologist, Noida, Monday] \nExample 2- Give me some good restaurants in Delhi, the output will be something like this [Restaurants, Delhi] \nExample 3- Give doctors for eye checkup in Gurgaon, the output will be something like this [Doctors, Eye Checkup, Gurgaon] \nalso the output should not have ``` in beginning or end and list word in output. The output consists of a list of elements.

    """
]

## Function to load the Google Gemini model and provide sql query as response
question="cardiologist related doctors in delhi on monday"
def get_gemini_response(question,prompt):
    model=genai.GenerativeModel("gemini-pro")
    response=model.generate_content([prompt[0],question])
    return response.text
answer=get_gemini_response(question,prompt)
print(answer)