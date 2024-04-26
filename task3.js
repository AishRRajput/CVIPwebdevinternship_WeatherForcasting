const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', () => {
    const cityName = searchInput.value;
    if (cityName) {
        getWeather(cityName);
    } else {
        alert('Please enter a city name');
    }
});

async function getWeather(city) {
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const weatherDescription = weather[0].description;

    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Description: ${weatherDescription}</p>
    `;
}
