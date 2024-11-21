import requests

# Generate a number
number = 77

# Send the number to the Node.js server
response = requests.post('http://localhost:3000/number', json={'number': number})

print(response.text)
