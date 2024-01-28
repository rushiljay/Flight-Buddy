import requests
import pandas

flight_api_url = 'https://flight-buddy-ec24703f32e0.herokuapp.com/'


# Getting flight data for DFW
response = requests.get(flight_api_url + 'airports?code=DFW')
print(response.json())

# Getting flight data by day
response = requests.get(flight_api_url + 'flights?date=2017-08-29')
# flight_data = pd.read_csv()
print(response.json())
