// global variables
let futureValue
let investment
let rate
let years

let repeat

// collect values from user

repeat = false
do {
    investment = parseFloat(prompt('Enter investment as xxxx.xx'))

    if (isNaN(investment)) {
        alert("Your investment MUST be a number. Please try again.")
        repeat = true
    } else {
        repeat = false
    }
} while (repeat);



repeat = false
do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'))

    if (isNaN(rate) || rate<0 || rate>6) {
        alert("Your rate MUST be a number between 0 and 6 (inclusive). Please try again.")
        repeat = true
    } else {
        repeat = false
    }
} while (repeat);


repeat = false
do {
    years = parseFloat(prompt('Enter the number of years you want to invest for'))

    if (isNaN(years) || years<0 || years>30) {
        alert("Your number of years MUST be a number between 0 and 30 (inclusive). Please try again.")
        repeat = true
    } else {
        repeat = false
    }
} while (repeat);



// calculate future value
futureValue = investment // we need a copy of this, initially

for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100)
}

// display results
document.write(`Investment amount: $${investment.toFixed(2)}<br>`)
document.write(`Interest rate: ${rate.toFixed(2)}\%<br>`) // unclear if % symbol needs to be escaped or not
document.write(`Number of years: ${years.toFixed(2)}<br>`)
document.write(`Future value: $${futureValue.toFixed(2)}`)


