const { fetchBreedDescription } = require('./breedFetcher');

let breedName = [];
for (let arg = 0; arg < process.argv.length - 2; arg++) {
	breedName.push(process.argv[arg + 2]);
}

fetchBreedDescription(breedName, function(error, desc) {
    if (error) {
        console.log('Error fetch details:', error);
    } else {
        console.log(desc);
    }
});