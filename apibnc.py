import requests

# Generate a number
number = 77

# Send the number to the Node.js server
response = requests.post('https://solartesty2.onrender.com/number', json={'number': number})

print(response.text)
