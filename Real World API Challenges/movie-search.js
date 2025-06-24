// movie name search app

function findMyMovie(movieName) {
    let myKey = "5dfb8347"
    let link = "https://www.omdbapi.com/?apikey=" + myKey + "&t=" + encodeURIComponent(movieName)

    fetch(link)
        .then(function(reply) {
            return reply.json()
        })
        .then(function(movieBox) {
            if (movieBox.Response === "False") {
                console.log("Movie not found: " + movieBox.Error)
                return
            }

            console.log("Name: " + movieBox.Title + ", " + movieBox.Year)
            console.log("Plot: " + movieBox.Plot)
            console.log("")
        })
        .catch(function(errorBag) {
            console.log("Movie mess up: " + errorBag)
        })
}

findMyMovie("Sandeep")
findMyMovie("Star Wars 2")
console.log("Search results:")