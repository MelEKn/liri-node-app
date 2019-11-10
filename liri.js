require("dotenv").config();
var keys = require("./keys.js");
// var Spotify = require('node-spotify-api');
console.log("This is keys:");
console.log(keys);
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }

//   console.log(data); 
//   });

//capture the command that the user puts in

var userCommand = process.argv[2];

// capture the command that the user puts in (process.argv[2])

// capture the user's search term (process.argv index 3 and later) (*use activity 18 level 2 for guidance on how to capture this!*)

var nodeArgs = process.argv;
var searchTerm = "";

for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    searchTerm += "+" + nodeArgs[i];
  } else {
    searchTerm += nodeArgs[i];

  }
}

console.log("searchTerm is " + searchTerm);
console.log("userCommand is " + userCommand);


// Make a switch statement for the four commands. The default case should tell the user to try again.

switch(userCommand){
// check if userCommand is "movie-this"
  case "movie-this": 
    console.log("Your choice was " + userCommand);
    break;

// Use Axios to call the OMDB API using the user's search term. Use activities 17 and 18 as a reference!

// Display to the user:
  // * Title of the movie.
  // * Year the movie came out.
  // * IMDB Rating of the movie.
  // * Rotten Tomatoes Rating of the movie.
  // * Country where the movie was produced.
  // * Language of the movie.
  // * Plot of the movie.
  // * Actors in the movie.

  // Provide a default search if the user didn't provide an argument.

// check if userCommand is "concert-this"
  case "concert-this":
      console.log("Your choice was " + userCommand);
      break;
  // run an API call using axios to the bands-in-town API
  // inject the user's search term in the queryURL

  // Display name of venue, venue location, and the date of the event 
  // Format the date of the event to be MM/DD/YYYY (look at the moment node package documentation!)

  // check if userCommand is "spotify-this-song"
  case "spotify-this-song":
    console.log("Your choice was " + userCommand);
    break;
// Using Spotify Node package info and documentation, make a call to the Spotify API using the user's search term

// Display to the user:
// * Artist(s)
// * The song's name
// * A preview link of the song from Spotify
// * The album that the song is from

// Provide a default searchTerm if the user didn't provide an argument



// check if userCommand is "do-what-it-says" (DO THIS PART OF THE ASSIGNMENT ONLY IF THE OTHER THREE API CALLS WORK WELL!)
case "do-what-it-says":
    console.log("Your choice was " + userCommand);
    break;
 // Use "fs" to read the random.txt file (hint, you will need to require fs! Look at activities 12 and 13)
  // The command will be whatever is before the comma. The search term will be whatever is after the comma.
  // Make the corresponding API call depending on what the command is.

  // If the user doesn't provide 1 of the 4 recognizable commands, display message to the user to try again
//check if userCommand is "concert-this"
 //check if userCommand is "spotify-this-song"

 //check if userCommand is "movie-this"

 //check if userCommand is "do-what-it-says"

 //otherwise, display message to the user to try again
 default:
   console.log("Unrecognized command, please try again with a command of 'concert-this', 'spotify-this-song', 'movie-this', or 'do-what-it'says'.");
}