const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let today = new Date();
    let heure = today.getHours() * 30;
    let minute = today.getMinutes() * deg;
    let seconde = today.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(heure)+(minute/12)}deg)`;
    mn.style.transform = `rotateZ(${minute}deg)`;
    sc.style.transform = `rotateZ(${seconde}deg)`;
})



