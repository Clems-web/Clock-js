// Select ours div's hands
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

// Coefficient constant
const deg = 6;

// We call an arrow function non-stop
setInterval(() => {

    // Here is our Object Date
    let today = new Date();

    // On clock, hours go from 0 to 12, multiply it by 12 and you get an angle for your clock hand (12*30 = 360°)
    let hours = today.getHours() * 30;

    // Same here but minute and second go from 0 to 60 => 60*6 = 360°
    let minute = today.getMinutes() * deg;
    let second = today.getSeconds() * deg;

    // Rotate hours hand on Z axis, to be more precise in space between 2 hours lines we add the angle value of the
    // minutes divide by the number of hours represented in the clock so our hours's hand can move smoothly
    // between the previous and next hour value without "jumping" to the next one

    hr.style.transform = `rotateZ(${(hours)+(minute/12)}deg)`;

    //Rotate minutes & seconds hands on Z axis
    mn.style.transform = `rotateZ(${minute}deg)`;
    sc.style.transform = `rotateZ(${second}deg)`;
})



