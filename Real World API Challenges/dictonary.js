// dictionary word lookup

function lookUpWordSilly(wordy) {
  let link = "https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(wordy)
  fetch(link)
    .then(function(reply) {
      return reply.json()
    })
    .then(function(bag) {
      if (!Array.isArray(bag) || bag.length === 0 || bag.title === "No Definitions Found") {
        console.log("No such word as" + wordy + "found.")
        return
      }

      let firstMeaning = bag[0].meanings[0]
      let firstDefObj = firstMeaning.definitions[0]
      let defText = firstDefObj.definition

      console.log("Word: " + bag[0].word)
      console.log("Mean1: " + defText)
    })
    .catch(function(whoops) {
      console.log("Fetch fail: " + whoops)
    })
}

lookUpWordSilly("banana")
lookUpWordSilly("blarghlewoof")
