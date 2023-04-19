## Get ALL Users
(GET) http://localhost:5000/api/auth/users

## Registers
(POST) http://localhost:5000/api/auth/register
{
"name":"geethu",
"email":"geethu9701@gmail.com",
"password": "87878495748",
"phone":9348394880,
"role": "user",
}

## LOGIN
(POST) http://localhost:5000/api/auth/login
(BODY) {
"email":"geethu9701@gmail.com",
"password": "87878495748"
}
(RESPONSE)
{
    "auth": true,
    "token": "eyJh"
}

## User Info
(GET) http://localhost:5000/api/auth/userInfo
(Header) => {'x-access-token': 'token value from login }