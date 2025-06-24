// weather app

async function getSkyFromStack(cityName) {
    let myKey = "975522c9b10fb6d5f3c9c9bb2a9cea60"
    let link = "https://api.weatherstack.com/current?access_key=" + myKey + "&query=" + encodeURIComponent(cityName) + "&units=m"

    try {
        let answer = await fetch(link)
        if (!answer.ok) {
            throw new Error("Error: " + answer.status)
        }

        let info = await answer.json()

        if (info.error) {
            console.log("Warning: " + info.error.info)
            return
        }

        console.log("City: " + info.location.name + ", " + info.location.country)
        console.log("Temp: " + info.current.temperature + "°C")
    } catch (e) {
        console.log("Error: " + e)
    }
}

getSkyFromStack("Bhavnagar")
getSkyFromStack("New Delhi")
