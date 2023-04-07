## Page 1
List of city (GET) http://localhost:4002/locations

List of restaurants (GET) http://localhost:4002/restaurants 

List of QuickSearch (GET) http://localhost:4002/quickSearch

restaurants wrt city (GET) http://localhost:4002/restaurants?stateId=1

## Page 2
List of restaurant wrt Meal http://localhost:4002/restaurants?mealId=1

Restaurants wrt cuisine & Meal http://localhost:4002/filter/1?cuisineId=2

Restaurants wrt cost & Meal http://localhost:4002/filter/1?lcost=800&hcost=1000

Sort on basis of cost http://localhost:4002/filter/1?lcost=800&hcost=1000&sort=-1

## Page 3
Details of a restaurant http://localhost:4002/details/64272070d6d27d809c06f867
http://localhost:4002/details/2
Menu of a restaurant 
http://localhost:4002/menu/2
## Page 4
Menu Details (POST) 
http://localhost:4002/menuItem
PlaceOrder (POST) 
http://localhost:4002/placeorder
## Page 5
List of orders 
http://localhost:4002/orders

List of orders wrt to email 
http://localhost:4002/orders?email=jack@gmail.com

update payment details (PUT) 
http://localhost:4002/updateOrder/1

{ "status":"Pending", "bank_name":"SBI" , "date": "19/03/2023" }

delete orders (DELETE) http://localhost:4002/deleteOrder/6430743ca56c1e46594e0404

CRUD C - Create - POST R - Read - GET U - Update - PUT D - Delete - DELETE