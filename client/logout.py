curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"refresh":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1MDI5NTEwOCwiaWF0IjoxNjUwMjA4NzA4LCJqdGkiOiJhYTY3ZDUxNzkwMGY0MTEyYTY5NTE0MTNmNWQ4NDk4NCIsInVzZXJfaWQiOjF9.tcj1_OcO1BRDfFyw4miHD7mqFdWKxmP7BJDRmxwCzrg"}' \
  http://localhost:8000/api/token/blacklist/