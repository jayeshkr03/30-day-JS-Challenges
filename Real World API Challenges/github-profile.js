function getGitHuman(usernameBox) {
    let url = "https://api.github.com/users/" + usernameBox

    fetch(url)
        .then(function(replyBack) {
            return replyBack.json()
        })
        .then(function(gitData) {
            if (gitData.message === "Not Found") {
                console.log("No git account found.")
                return
            }

            console.log("Name: " + gitData.name)
            console.log("Username: " + gitData.login)
            console.log("Bio: " + gitData.bio)
            console.log("Repos: " + gitData.public_repos)
        })
        .catch(function(explode) {
            console.log("Something went wrong: " + explode)
        })
}

console.log("")
console.log("")
console.log("")
getGitHuman("fizzflip")
getGitHuman("hehe")
getGitHuman("krjayesh")
