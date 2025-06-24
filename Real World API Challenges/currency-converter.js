function convertMoney(fromCoin, toCoin, amountNum) {
    let url = "https://api.exchangerate-api.com/v4/latest/" + fromCoin

    fetch(url)
        .then(function(bag) {
            return bag.json()
        })
        .then(function(moneyBox) {
            let rate = moneyBox.rates[toCoin]
            let finalMoney = amountNum * rate
            console.log(amountNum + " " + fromCoin + " = " + finalMoney + " " + toCoin)
        })
        .catch(function(oopsie) {
            console.log("money fail: " + oopsie)
        })
}

console.log("Trying to convert money now...")
convertMoney("USD", "INR", 5)
console.log("Doing another one just for fun...")
convertMoney("EUR", "JPY", 20)
