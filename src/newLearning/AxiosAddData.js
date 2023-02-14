// Import the axios library
const axios = require('axios');

// Set the API endpoint URL
const apiEndpoint = 'https://example-api.com/data';

// Set the data to add to the API
const dataToAdd = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};

// Send the POST request to the API endpoint
axios.post(apiEndpoint, dataToAdd)
  .then(response => {
    // Handle the response from the API
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors that occurred
    console.error(error);
  });
