# liri-node-app
Liri Node App Project

The Liri Node App Project is a command-line node application. When running the program, the user can use one of four commands: 

*"concert-this"
*"spotify-this-song"
*"movie-this"
*"do-what-it-says"

For "concert-this", the user includes after that command the name of a band that is currently touring. The application uses the "Bands in Town" API to tell the user that band's next 5 shows: their venue, location, and date. This information is then logged to log.txt. 

For "spotify-this-song", the user enters the name of a song. The app tells the user the artist who plays that song, the name of the song, the album that song is on, and provides a link to a preview of that song. This information is then logged to log.txt as well. 

For "movie-this", the user enters the name of a movie, and the app tells the user the movie's Title, Release Year, Country, Language, Plot, and Actors. This information is also logged to log.txt. 

Here is an image of the app providing this information for 3 above queries:
![commands-demo image](/images.liri-image2.JPG)

And here are video links demonstrating a user making three relevant requests and the application's output:
https://drive.google.com/file/d/1cwSt66EaiWiTEc9P3IyqlJpznntjO0uR/view?usp=sharing
https://drive.google.com/file/d/1vXbC_17Lp3cl3DdbehhZU-2muA_Hp_Dk/view?usp=sharing
(The above videos are also included at the bottom in Video Demo Links.)

Finally, for "do-what-it-says", the app uses the 'fs' Node package to read a file named 'random.txt' and run the command and the search term provided in that text file. 

For example, here "do-what-it-says" runs the command and search term within 'random.txt' provided in the instructions: "spotify-this-song,"I Want it That Way""

![do-what-it-says demo image](/images/liri-image1.JPG)

Or in this example, 'random.txt' contains a file that says "movie-this,The Matrix":

![do-what-it-says The Matrix demo image](/images/liri-image-dwis-matrix.jpg)



Video Demo Links: 
1: https://drive.google.com/file/d/1cwSt66EaiWiTEc9P3IyqlJpznntjO0uR/view?usp=sharing
2: https://drive.google.com/file/d/1vXbC_17Lp3cl3DdbehhZU-2muA_Hp_Dk/view?usp=sharing


APIs used: Spotify REST, OMDB, Bands in Town

NPM Packages used: Node-Spotify-API, Axios, Moment, DotEnv

Author: Melissa Knapp
Portfolio: https://melekn.github.io/Responsive-Portfolio/portfolio.html 

Melissa Knapp was the sole developer of this Liri Node App. She used instructions provided by Trilogy Education Services and received assistance from Instructor Dave Leonhardt and Teaching Assistants Shelby Reyes and Kathryn Breslyn. 