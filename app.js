const request = require('postman-request');
const secret_key = require('./secret')
const url = 'http://api.weatherstack.com/current?access_key='+secret_key+'&&query=cairo'
request(url, (error, response, body) => {
	console.log('error:', error); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	console.log('body:', body); // Print the HTML for the Google homepage.
  });