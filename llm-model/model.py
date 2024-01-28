import ollama
from fastapi import FastAPI


app = FastAPI()

@app.get('/{question}')
def query(question):
    response = ollama.chat(model='mistral', messages=[
    {
        'role': 'user',
        'content': '''
        Estimated Wait Time for Bathrooms:

    Economy Class: Approximately 5 minutes.
    Business Class: Less than 2 minutes.
    In-flight Food and Beverage Options:

    Economy Class:
    Meal: Grilled chicken with steamed vegetables, or Vegetarian pasta.
    Snacks: Cheese and crackers, mixed nuts.
    Drinks: Water, soda, juice, coffee, tea.
    Nutritional Information: Chicken meal - 600 calories, Vegetarian pasta - 550 calories.
    Business Class:
    Meal: Seared salmon with quinoa salad, or Braised beef with roasted potatoes.
    Snacks: Gourmet cheese platter, chocolate truffles.
    Drinks: Includes Economy options plus a selection of wines and spirits.
    Nutritional Information: Salmon meal - 700 calories, Beef meal - 750 calories.
    Local Arrival Information at Destination (JFK Airport, New York):

    Weather: Partly cloudy, 68°F (20°C).
    Local Time: 6:45 PM EST.
    Ground Transportation: Taxis, rental cars, and shuttle services available outside the terminal.
    Special Requests and Assistance:

    Passengers can call flight attendants for specific dietary needs or other special requests.
    Flight attendants may not have information on certain LLM-specific queries.
    Flight Current Location and Time:

    Current Location: Overflying Chicago, IL.
    Current Time: 4:30 PM EST.
    Airline Rewards and Financial Offers:

    Rewards Program: AAdvantage® Miles, earn miles for every dollar spent.
    Credit Cards Offered: Citi® / AAdvantage® Platinum Select® card, AAdvantage® Aviator® Red World Elite Mastercard®.
    Special Offer: Earn 50,000 bonus miles after spending $2,500 in the first 3 months.


    RULE: Limit responses to 25 words.
    -----

    '''+question,
    },
    ])
    return {response['message']['content']}