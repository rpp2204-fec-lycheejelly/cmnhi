# COMNHI
This project was created by a group of 3 people in a month's time with an end goal of a functioning single-page ecommerce app.


## Tools Used
We used React.JS for the front-end development utilizing stateful components, functional components, and React hooks. For the server, we used Express.JS to connect our routes to the provided API. We used WebPack to bundle our code to make it more modular and organized. To test our server routes, we used Postman for testing GET, PUT, and POST requests. For refreshing our server, we used Nodemon to automatically re-run every time we made a change in our code. Lastly, we deployed our app using an AWS EC2 instance.

## Challenges Faced
The main bulk of the challenges we faced comes from the multitude of requests to the API from our server. This resulted in status code 429 errors when navigating products too quickly. In the future, we could use a database to properly cache previously accessed data to cut down on total API calls. Another idea would be to refactor the method in which we are implementing our API calls to allow for better orchestration and more efficient requests. With more time, we also would have liked to implement a compression tool to significantly increase our app's loading time and performance.

## Set Up
To run the project...
* Run 'npm install' to install all required dependencies.
* Copy the example.env file and rename it as '.env'
* In the '.env' file, provide your own Github access token under the "API_KEY" variable.
* Run the 'npm start' script to load both webpack and nodemon.
* The page will be accessible through localhost:4000.

