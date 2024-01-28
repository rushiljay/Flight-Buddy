import ollama
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/{question}')
def query(question):
    response = ollama.chat(model='mistral', messages=[
    {
        'role':'system',
        'content': 'You are a flight attendant for American Airlines. If you are unsure, please refer to a Flight Attendant during flight'
    },
    {
        'role': 'assistant',
        'content': '''
        Estimated Wait Time for Bathrooms:

    Wait Times for Bathrooms: The best times to use the bathroom are after meal service, before drink service, mid-flight on long-haul flights, and avoiding the beginning and end of the flight. Watch for natural lulls in bathroom use and listen to announcements from the crew.

Luggage Information: Each passenger is allowed 1 personal item and 1 carry-on. Personal items must fit under the seat and not exceed 18 x 14 x 8 inches. Carry-ons should not exceed 22 x 14 x 9 inches and must fit in the overhead bin or under the seat. Soft-sided garment bags up to 51 inches and musical instruments are also allowed as carry-ons. For delayed or damaged bags, please file a report at the Baggage Service Office before leaving the airport.

Food Options: We offer complimentary drinks and snacks on flights over 250 miles. This includes a variety of soft drinks, coffee, tea, juice, and water, along with Biscoff cookies and pretzels. For flights under 250 miles, non-alcoholic drinks are available by request. Alcoholic beverages and additional snacks are available for purchase on domestic flights over 250 miles. Special meals to meet dietary, medical, and religious needs are available on select flights, but they should be requested at least 24 hours before departure.

Flight Menu JFK to LHR: We have a variety of special meals available, including Asian Vegetarian, Baby Meal, Bland Meal, Child's Meal, Diabetic Meal, Gluten-Intolerant Meal, Hindu Meal, Kosher Meal, Lacto-Ovo Vegetarian Meal, Low Fat Meal, Low Sodium Meal, Muslim Meal, Non-Lactose Meal, Vegetarian Jain Meal, and Vegetarian/Vegan Meal. Please note menus can vary based on availability and seasonality.

Arrival at London Heathrow (LHR): LHR is located 14 miles west of Central London with multiple terminals. Expect to go through customs and immigration, and follow signs to baggage claim if you have checked bags. Currency exchange services are available, and there are various transport options to the city, including Heathrow Express, Tube, buses, taxis, and ride-sharing services.

Credit Cards:

Citi® / AAdvantage® Platinum Select® World Elite Mastercard®:

Earn 50,000 bonus miles after $2,500 in purchases within the first 3 months.
$0 intro annual fee for the first year, then $99.
Earn 2 miles for every $1 spent at restaurants, gas stations, and on eligible American Airlines purchases.
First checked bag free on domestic itineraries for you and up to 4 companions.
Preferred boarding and 25% savings on inflight food and beverage purchases.
No foreign transaction fees.
American Airlines AAdvantage® MileUp® Mastercard®:

Earn 15,000 bonus miles after $500 in purchases within the first 3 months.
No annual fee.
Earn 2 miles for every $1 spent at grocery stores and on eligible American Airlines purchases.
25% savings on inflight food and beverage purchases.
Citi® / AAdvantage® Executive World Elite Mastercard®:

Earn 70,000 bonus miles after $7,000 in purchases within the first 3 months.
Annual fee $595.
Complimentary Admirals Club® membership.
Earn 4 miles for every $1 spent on eligible American Airlines purchases.
Global Entry or TSA PreCheck® fee credit.
CitiBusiness® / AAdvantage® Platinum Select® World Elite Mastercard®:

Earn 65,000 bonus miles after $4,000 in purchases within the first 4 months.
$0 intro annual fee for the first year, then $99.
Earn 2 miles for every $1 spent on select business categories and on eligible American Airlines purchases.
First checked bag free on domestic itineraries for you and up to 4 companions.
Earn an American Airlines Companion Certificate for domestic travel after $30,000 in purchases each year.

Economy Class Menu:

Meal Options:
Asian Vegetarian: Spicy Tofu and Vegetable Stir-Fry
Baby Meal: Selection of Jarred Baby Foods
Bland Meal: Grilled Chicken with Steamed Rice
Child's Meal: Mini Cheeseburgers and Sweet Potato Fries
Diabetic Meal: Grilled Salmon with Quinoa Salad
Gluten-Intolerant Meal: Chicken and Bell Pepper Skewers with Polenta
Low Fat Meal: Turkey Breast with Roasted Vegetables
Low Sodium Meal: Herb-Grilled Chicken with Couscous Salad
Vegetarian/Vegan Meal: Chickpea Curry with Jasmine Rice
Drinks and Snacks: Complimentary drinks (coffee, tea, juice, water, and a variety of soft drinks) and snacks (Biscoff cookies and pretzels).
Business Class Menu:

Meal Options:
Hindu Meal: Paneer Tikka Masala with Basmati Rice
Kosher Meal: Beef Brisket with Potato Kugel
Lacto-Ovo Vegetarian Meal: Spinach and Ricotta Ravioli
Muslim Meal: Lamb Kofta with Couscous
Non-Lactose Meal: Grilled Shrimp with Wild Rice
Vegetarian Jain Meal: Stir-Fried Vegetables with Saffron Rice
Drinks and Snacks: In addition to the Economy options, Business Class offers a selection of premium wines and spirits. Snacks include gourmet cheese platters and more upscale options.

    RULE: Limit responses to 25 words.
    -----

    '''
    },
    {
        'role':'user',
        'content': question
    }
    ])
    return {response['message']['content']}