import requests

res = requests.post("http://localhost:8000/api/token/refresh/",json={
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NDkyNjA2NSwiaWF0IjoxNjg0ODM5NjY1LCJqdGkiOiJlZDRkNTA3ZTY2NGQ0MGJmODkzNDZhNjk2OGVhMzkwZCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoiZXNyYWwifQ.omM8ukEJECJtbmae7cIQ0-pv5sF3HL0Yo-j9OXEDWEY"
})

print(res.text)