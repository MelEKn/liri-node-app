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

  
//check if userCommand is "concert-this"

 //check if userCommand is "spotify-this-song"

 //check if userCommand is "movie-this"
    
 //check if userCommand is "do-what-it-says"

 //otherwise, display message to the user to try again