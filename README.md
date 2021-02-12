# Restaurant online Menu

##Deployed at:

	http://res-menu.surge.sh
	
	backend git https://github.com/antonenkokrg/capstone2



##About
Application was created for small businesses to support them in pandemic time. Its a cheap way to switch paper menu to online. Online menu can be available from everywhere by QRcode and the owners can change it anytime.
	
##Features
Responsive menu with option to change. QRcode generator with function to save and print it. Login page.

##Tests
Tests are created for backend to run it:

		cd /backend
		jest
		
##User Flows
###Backend

	POST /auth/token:  { username, password } => { token }
	Returns JWT token which can be used to authenticate further requests.
	Authorization required: none
	
	POST /auth/register:   { business } => { token }
	user must include { username, password, email, logo_url, address .
	Returns JWT token which can be used to authenticate further requests.
	Authorization required: none
	
	GET businesses/[business] => { menu :[ type, name, description, [.....]] }
	Returns {id, type, description, price, businesses_id}
	Authorization required: none
	
	POST businesses/[business] { dish } => { dish }
	Dish should be { type, name, description, price, businesses_id }
	Returns { id, name}
	Authorization required: current business
	
	DELETE businesses/[business]/[id]  =>  { deleted: dish }
	Authorization required:  same-user-as-:business
	
###Frontend
		/login allow user to login
		
		/menu show user their menu, allow add and delete some items from menu
		
		/generateqr  Generate QR code for menu
		
		/show/:business Final view Menu

##Stack
PERN 
Postgres
Express
React 
Node

