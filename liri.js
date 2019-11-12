require("dotenv").config();
var keys = require("./keys.js");
// var Spotify = require('node-spotify-api');
console.log("This is keys:");
console.log(keys);
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

var moment = require("moment");

// Load the fs package to read and write
var fs = require("fs");


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

switch (userCommand) {
  // check if userCommand is "movie-this"
  case "movie-this":
    console.log("Your choice was " + userCommand);

    //If the user doesn't type a movie in, the program outputs data for the movie 'Mr. Nobody'

    if (searchTerm == "") {
      searchTerm = "Mr.+Nobody";
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";

    //Use 'Axios' to retrieve data from OMDB API, and output information about the movie to the user

    axios.get(queryUrl).then(
      function (response) {

        //create string to store the output of the movie info

        var output = "";

        output += "Title: " + response.data.Title + "\n";
        output += "Release Year: " + response.data.Year + "\n";
        output += "IMDB Rating: " + response.data.imdbRating + "\n";
        output += "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n";
        output += "Country: "  + response.data.Country + "\n";
        output += "Language: "  + response.data.Language + "\n";
        output += "Plot: "  + response.data.Plot + "\n";
        output += "Actors: "  + response.data.Actors + "\n";
  
        //Outputs relevant information about movie to the user
  
        console.log(output);
  
        //sends output to the log.txt file
  
        fs.appendFile("log.txt", userCommand + " " + searchTerm + ":\n\n" + output + "\n", function(err) {
          if (err) {
            return console.log(err);
          }
        });

      })

      //Show an error message if the server responded with an error

      //Code and notes for error handling taken from "levelTwoOmdbInteractive.js" in Activity 18. 

      .catch(function (error) {
        if (error.response) {

          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    break;



  // check if userCommand is "concert-this"
  case "concert-this":
    console.log("Your choice was " + userCommand);


    // run an API call using axios to the bands-in-town API
    // inject the user's search term in the queryURL

    var queryURL = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
      function (response) {
        console.log(response.data);
        console.log("Length is " + response.data.length);
        console.log("The first event is :");
        console.log(response.data[0]);

        var numEvents = response.data.length;
        console.log("numEvents is " + numEvents);
        // console.log(response);
        // if(numEvents==0){
        //   return console.log("There are no upcoming concerts for " + searchTerm);
        // }
        if (response.data[0] == "\n{warn=Not found}\n") {
          console.log("This if statement was triggered");
        }
        console.log("response.data[0] is " + response.data[0]);

        var numResults = 0;

        //If there are any results for venues, but fewer than 5, then the app should display as many events as there are

        if (response.data.length > 0 && response.data.length < 5) {
          numResults = response.data.length;
        }
        else {

          //if there are more than 5 events, the app will only display 5.

          numResults = 5;
        }

        console.log("numResults is " + numResults);

        //create string to store the output of the next 5 shows

        var output = "";

        for (var i = 0; i < numResults; i++) {
          

          //convert datetime to MM/DD/YYYY format
          var dateFormat = "MM/DD/YYYY";
          var concertDate = response.data[i].datetime;
          var convertedDate = moment(concertDate).format(dateFormat);

          //Put venue, location, and date into output

          output += "Venue: " + response.data[i].venue.name + "\n";
          output += "Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country + "\n";
          output += "Date: " + convertedDate + "\n --------------- \n\n";
        }
        
        //dispay output to user

        console.log(output);

        //write output to text file "log.txt"

        fs.appendFile("log.txt", userCommand + " " + searchTerm + ":\n\n" + output, function(err) {
          if (err) {
            return console.log(err);
          }
        });

      })
      //Show an error message if the server responded with an error
      //(Code and notes for error handling taken from "levelTwoOmdbInteractive.js" in Activity 18. )

      .catch(function (error) {
        if (error.response) {

          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });

    // Display name of venue, venue location, and the date of the event 
    // Format the date of the event to be MM/DD/YYYY (look at the moment node package documentation!)
    break;

  // check if userCommand is "spotify-this-song"
  case "spotify-this-song":
    console.log("Your choice was " + userCommand);
    spotify.search({ type: 'track', query: searchTerm }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
        // console.log(data.tracks.items[0]);

       //create string to store the output of the artist, song name,  a preview link of the song from Spotify, and the album that the song is from

      var output = "";

      output += "Artist: " + data.tracks.items[0].album.artists[0].name + "\n";
      output += "Song: " + data.tracks.items[0].name + "\n";
      output += "Preview: " + data.tracks.items[0].preview_url + "\n";
      output += "Album: "  + data.tracks.items[0].album.name + "\n";

      //Outputs relevant information about the song to the user

      console.log(output);

      //sends output to the log.txt file

      fs.appendFile("log.txt", userCommand + " " + searchTerm + ":\n\n" + output + "\n", function(err) {
        if (err) {
          return console.log(err);
        }
      });



    });




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
    fs.readFile("random.txt", "utf8", function (err, what) {
      if (err) {
        return console.log(err);
      }

      // Break down all the numbers inside
      what = what.split(",");

      userCommand = what[0];
      searchTerm = what[1];
      console.log("userCommand is " + userCommand);
      console.log("searchTerm is " + searchTerm);

    });



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