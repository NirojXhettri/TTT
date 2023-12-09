let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let rankineInput = document.querySelector('#rankine > input')
let reaumurInput = document.querySelector('#reaumur > input')

let clearBtn = document.getElementById('clearBtn');
let convertBtn = document.getElementById('convertBtn');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

function showInvalidMessage() {
    alert('Please enter a valid temperature.');
}

function convertTemperature() {
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = parseFloat(fahrenheitInput.value);
    let kTemp = parseFloat(kelvinInput.value);
    let rTemp = parseFloat(rankineInput.value);
    let reTemp = parseFloat(reaumurInput.value);

    if (!isNaN(cTemp)) {
        fTemp = (cTemp * (9 / 5)) + 32;
        kTemp = cTemp + 273.15;
        rTemp = cTemp * (9 / 5) + 491.67;
        reTemp = cTemp * (4 / 5);
    } else if (!isNaN(fTemp)) {
        cTemp = (fTemp - 32) * (5 / 9);
        kTemp = (fTemp - 32) * (5 / 9) + 273.15;
        rTemp = fTemp + 459.67;
        reTemp = cTemp * (4 / 5);
    } else if (!isNaN(kTemp)) {
        cTemp = kTemp - 273.15;
        fTemp = (kTemp - 273.15) * (9 / 5) + 32;
        rTemp = kTemp * (9 / 5);
        reTemp = cTemp * (4 / 5);
    } else if (!isNaN(rTemp)) {
        cTemp = (rTemp - 491.67) * (5 / 9);
        fTemp = rTemp - 459.67;
        kTemp = rTemp * (5 / 9);
        reTemp = cTemp * (4 / 5);
    } else if (!isNaN(reTemp)) {
        cTemp = reTemp * (5 / 4);
        fTemp = (reTemp * (9 / 4)) + 32;
        kTemp = cTemp + 273.15;
        rTemp = cTemp * (9 / 5) + 491.67;
    } else {
        showInvalidMessage();
        return;
    }

    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
    rankineInput.value = roundNumber(rTemp);
    reaumurInput.value = roundNumber(reTemp);
}

convertBtn.addEventListener('click', convertTemperature);

clearBtn.addEventListener('click', () => {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
    rankineInput.value = "";
    reaumurInput.value = "";
});
