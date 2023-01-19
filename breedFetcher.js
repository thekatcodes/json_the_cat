const request = require("request");

// console.log(breedName[0])
const fetchBreedDescription = function(breedName, callback) {
  const searchURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(searchURL, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);

      if (data.length === 0) {
        callback("Breed not found", null);
      } else {
        callback(null, data[0].description);
      }
    }
  });

};

module.exports = { fetchBreedDescription };
