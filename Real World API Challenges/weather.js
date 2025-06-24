// weather app

async function getSkyFromStack(cityName) {
    let myKey = "975522c9b10fb6d5f3c9c9bb2a9cea60"
    let link = "https://api.weatherstack.com/current?access_key=" + myKey + "&query=" + encodeURIComponent(cityName) + "&units=m"

    try {
        let answer = await fetch(link)
        if (!answer.ok) {
            throw new Error("bad http " + answer.status)
        }

        let info = await answer.json()

        if (info.error) {
            console.log("stack no work: " + info.error.info)
            return
        }

        console.log("City: " + info.location.name + ", " + info.location.country)
        console.log("Temp: " + info.current.temperature + "°C")
        console.log("Sky look: " + info.current.weather_descriptions[0])
    } catch (uhOh) {
        console.log("Fetch go boom: " + uhOh)
    }
}

getSkyFromStack("Bhavnagar")
getSkyFromStack("New Delhi")
