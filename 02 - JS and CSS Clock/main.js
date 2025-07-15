// Create a variable linking the second, minutes and hours to the DOM
const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

// Create a function to set the time on the clock
function setDate() {

    // create a variable that grabs the date object
    const now = new Date();

    // create variables to grab the seconds, minutes and hours out of the object
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    console.log(hours)

    // create variables that takes the seconds, minutes and hours to get the degrees of rotation of the object in the DOM. 
    const secondsDegrees = ((seconds/60) * 360) +90;
    const minutesDegrees = ((minutes/60) * 360) +90;
    const hourDegrees =    ((hours/24)   *360)  +90;

    //adding the degree of rotation into the DOM
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

// using the set interval method to ensure the function keeps repeating every 1000 miliseconds, or 1 second.  
setInterval(setDate, 1000)