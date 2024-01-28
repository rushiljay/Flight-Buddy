import requests

flight_api_url = 'https://flight-buddy-ec24703f32e0.herokuapp.com/airports?code=DFW'


# Getting flight data for DFW
response = requests.get(flight_api_url)
print(response.json())