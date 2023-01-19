const request = require("request");

let breedName = [];
for (let arg = 0; arg < process.argv.length - 2; arg++) {
	breedName.push(process.argv[arg + 2]);
}
// console.log(breedName[0])
const fetchBreedDescription = function(breedName, callback) {
    
    request(
        `https://api.thecatapi.com/v1/breeds/search?q=${breedName[0]}`,
        function (error, response, body) {
            "error:", error; // Print the error if one occurred
            // console.log(error)
            "statusCode:", response && response.statusCode; // Print the response status code if a response was received
            if (error !== null) {
                console.log("Request failed");
                return;
            }
            "body:", body; // Print the HTML for the Google homepage.
            const data = JSON.parse(body);
            // console.log(data);
    
            if (data.length === 0) {
                console.log("Requested breed is not found");
            } else {
                console.log(data[0].description);
            }
        }
    );
}

module.exports = {fetchBreedDescription}