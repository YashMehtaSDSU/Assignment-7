//STEP 01
var movies = ["The Notebook", "Manifest", "Uncoupled", "Titanic", "Dahmer"];
window.console.log(movies[1]);

//STEP 02

var movies = [];
movies[0] = "The Notebook";
movies[1] = "Manifest";
movies[2] = "Uncoupled";
movies[3] = "Titanic";
movies[4] = "Dahmer";
window.console.log(movies[0]);

//STEP 03

var movies = ["The Notebook", "Manifest", "Uncoupled", "Titanic", "Dahmer"];
movies[movies.length] = "The Watcher";
window.console.log(movies.length);

//STEP 04

var movies = [];
movies[0] = "The Notebook";
movies[1] = "Manifest";
movies[2] = "Uncoupled";
movies[3] = "Titanic";
movies[4] = "Dahmer";
delete movies[0];
window.console.log(movies);


//STEP 05
var movies = [];
movies[0] = "The Notebook";
movies[1] = "Manifest";
movies[2] = "Uncoupled";
movies[3] = "Titanic";
movies[4] = "Dahmer";
movies[5] = "The Watcher";
movies[6] = "Fast Times at Ridgemont High";

var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

//STEP 06

var movies = [];
movies[0] = "The Notebook";
movies[1] = "Manifest";
movies[2] = "Uncoupled";
movies[3] = "Titanic";
movies[4] = "Dahmer";
movies[5] = "The Watcher";
movies[6] = "Fast Times at Ridgemont High";

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}


//STEP 07
var movies = [];
movies[0] = "The Notebook";
movies[1] = "Manifest";
movies[2] = "Uncoupled";
movies[3] = "Titanic";
movies[4] = "Dahmer";
movies[5] = "The Watcher";
movies[6] = "Fast Times at Ridgemont High";
movies.sort();

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

//STEP 08
var movies = [];
movies[0] = "The Notebook";
movies[1] = "Manifest";
movies[2] = "Uncoupled";
movies[3] = "Titanic";
movies[4] = "Dahmer";
movies[5] = "The Watcher";
movies[6] = "Fast Times at Ridgemont High";

window.console.log("Movies I like:\n\n");
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

var leastFavMovies = [];
leastFavMovies[0] = "Mars Attacks";
leastFavMovies[1] = "Attack of the Killer Tomatoes";
leastFavMovies[2] = "The Blob";

window.console.log("\n\nMovies I regret watching:\n\n");
var element;
for (element in leastFavMovies) {
    if (leastFavMovies.hasOwnProperty(element)) {
        window.console.log(leastFavMovies[element]);
    }
}

//STEP 09
var movies = [];
movies[0] = "The Notebook";
movies[1] = "Manifest";
movies[2] = "Uncoupled";
movies[3] = "Titanic";
movies[4] = "Dahmer";
movies[5] = "The Watcher";
movies[6] = "Fast Times at Ridgemont High";

var leastFavMovies = [];
leastFavMovies[0] = "Mars Attacks";
leastFavMovies[1] = "Attack of the Killer Tomatoes";
leastFavMovies[2] = "The Blob";

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}


//STEP 10
var movies = [];
movies[0] = "The Notebook";
movies[1] = "Manifest";
movies[2] = "Uncoupled";
movies[3] = "Titanic";
movies[4] = "Dahmer";
movies[5] = "The Watcher";
movies[6] = "Fast Times at Ridgemont High";

var leastFavMovies = [];
leastFavMovies[0] = "Mars Attacks";
leastFavMovies[1] = "Attack of the Killer Tomatoes";
leastFavMovies[2] = "The Blob";

movies = movies.concat(leastFavMovies);
window.console.log(movies.pop());
