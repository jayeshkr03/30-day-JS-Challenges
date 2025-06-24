// Fetch and Display Users

function getThePeople() {
    fetch("https://raw.githubusercontent.com/jayeshkr03/friendly-octo-meme/refs/heads/main/users.json")
        .then(function(gotData) {
            return gotData.json()
        })
        .then(function(allThePeople) {
            for (let i = 0; i < allThePeople.length; i++) {
                console.log("Name is: " + allThePeople[i].name)
                console.log("Email is: " + allThePeople[i].email)
                console.log(" ")
            }
        })
}

getThePeople()
