import requests

res = requests.post("http://localhost:8000/api/token/",json={
    "username":"someone",
    "password":"1234"
})

print(res.text)
