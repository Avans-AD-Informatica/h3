const api_url = "https://api.open-meteo.com/v1/forecast?latitude=51.5719&longitude=4.7683&current_weather=true";
const api_url_bitcoin = "https://api.coinlore.net/api/ticker/?id=90";

window.onload = function () {
    getBitcoin();
    getData();
};

async function getBitcoin() {
    try {
        const response = await fetch(api_url_bitcoin);
        const data = await response.json();
        console.log("Bitcoin data:", data);
        if (data && data[0] && data[0]['price_usd']) {
            document.getElementById('bitcoin').innerText = data[0]['price_usd'];
        } else {
            console.error("Invalid Bitcoin data format");
        }
    } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
    }
}

async function getData() {
    try {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log("Weather data:", data);
        if (data && data['current_weather']) {
            let temperature = data['current_weather']['temperature'];
            let windspeed = data['current_weather']['windspeed'];
            let winddirection = data['current_weather']['winddirection'];
            let time = data['current_weather']['time'];
    
            document.getElementById('temperature').innerText = temperature;
            document.getElementById('wind').innerText = windspeed;
            document.getElementById('navigation').innerText = winddirection;
            document.getElementById('time').innerText = String(time).substr(time.length - 5);
        } else {
            console.error("Invalid weather data format");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
