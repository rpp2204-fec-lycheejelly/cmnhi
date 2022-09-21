# COMNHI
This project was done by a group of 3 people in a month's time with an end goal of creating a functioning single-page ecommerce app.

### Product Overview


## Tools Used
* Front-End:
  * React.JS

* Server-Side: 
  * Express.JS
  * Nodemon
  * Postman

* Bundling:
  * Webpack
  
* Deployment:
  * AWS EC2 Instance
 
We used React.JS for the front-end development utilizing stateful components, functional components, and React hooks. We also used Express.JS to start up a development server and connect our routes to the provided API. Additionally, we used this in conjunction with Nodemon, which allowed our server to automatically re-run upon saving. We used WebPack to bundle our code to make it more modular and organized, and for testing our server routes, we used Postman for verifying GET, PUT, and POST requests. Lastly, we deployed our app using an AWS EC2 instance.

## Challenges Faced
The main bulk of the challenges we faced comes from the multitude of requests to the API from our server. This resulted in status code 429 errors when navigating products too quickly. In the future, we could use a database to properly cache previously accessed data to cut down on total API calls. Another idea would be to refactor the method in which we are implementing our API calls to allow for better orchestration and more efficient requests. With more time, we also would have also liked to implement a compression tool to significantly increase our app's loading time and performance.

## Set Up
To run the project...
* Run `npm install` to install all required dependencies.
* Copy the example.env file and rename it `.env`
* In the `.env` file, provide your own Github access token under the "API_KEY" variable.
* Run `npm start` to load both webpack and nodemon.
* The page will be accessible through localhost:4000.

## Team Members
 * Product Overview: [Ethan Ayaay](https://github.com/ayaayethan)
 * Related Items: [Miranda Zhou](https://github.com/mirandasizhou)
 * Questions and Answers: [Dongning Song](https://github.com/mathdsong)

