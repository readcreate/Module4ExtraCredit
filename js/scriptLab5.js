// define variables; also need to allow user to re-run the application if they want (if they type in yes; otherwise they enter no and we close the application)

let miles
let gallons
let mpg
let again = 'y'

do {
    miles = parseFloat(prompt('Enter the miles driven.'))
    gallons = parseFloat(prompt('Enter the number of gallons that your fuel tank holds.'))
    
    //want to make sure that miles and gallons are both numbers > 0
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`)
    } else {
        alert('One or both entries are invalid.')
    }

    do {
        again = prompt('Run the application again? (y/n)', 'y')
    } while (again != 'y' && again != 'n');

} while (again === 'y'); // as long as again is y, user re-runs application

console.log('Application has exited') // if user wants to stop