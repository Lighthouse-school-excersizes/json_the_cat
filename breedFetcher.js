const request = require('request');
const userInput = process.argv.slice(2);
const breed = userInput[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    return console.log('error occured');
  }
  const data = JSON.parse(body);
  if (data === undefined) {
    console.log('error breed not found');
  } else {
    console.log(data[0]['description']);
  }
});