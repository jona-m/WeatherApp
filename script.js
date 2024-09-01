const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const searchInput = document.querySelector('.search-box input');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const button = document.getElementById('button');





function searchWeather() {

    const APIKey = '5cee43a72d30ba4cb314189a5d92227c';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`).then(response => response.json()).then(json => {

        if (json.cod === '404') {

            container.style.height = '450px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');

            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadeIN');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');


        switch (json.weather[0].main) {

            case 'Clear':
                image.src = 'images/clear.png';
                image.style.height = '220px';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                image.style.height = '220px';
                break;

            case 'Snow':
                image.src = 'images/snow.png';
                image.style.height = '220px';
                break;

            case 'Clouds':
                image.src = 'images/clouds.png';
                image.style.height = '220px';
                break;

            case 'Haze':
                image.src = 'images/haze.png';
                image.style.height = '220px';
                break;

            default:
                image.scr = '';
        }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;


        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';

    });
}
button.addEventListener('click', searchWeather);
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchWeather(); // Call the searchWeather function directly
    }
});





