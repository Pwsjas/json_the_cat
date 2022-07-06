const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return error;
    }
    const data = JSON.parse(body);
    if (data[0]) {
      callback(error, data[0].description);
    } else {
      callback(error, null);
    }
  });
};

module.exports = {
  fetchBreedDescription
};