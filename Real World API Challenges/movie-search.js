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

            console.log("Title: " + movieBox.Title)
            console.log("Year: " + movieBox.Year)
            console.log("Type: " + movieBox.Type)
            console.log("Plot: " + movieBox.Plot)
        })
        .catch(function(errorBag) {
            console.log("Movie mess up: " + errorBag)
        })
}

console.log("Searching movie now...")
findMyMovie("Sandeep")
console.log("Searching again for fun...")
findMyMovie("Star Wars 2")
