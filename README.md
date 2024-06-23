# Weather Application
A simple weather application built with React that allows users to get the current weather information for a specific location. The app fetches weather data from the OpenWeatherMap API.

## Features

- Search for weather data by city name
- Display current temperature, weather condition, feels like temperature, humidity, and wind speed
- Error handling for failed API requests

## Technologies Used

- React
- Axios for API requests
- OpenWeatherMap API

## Setup

1. Clone the repository:
   ```bash
  git clone https://github.com/PalampalliPraneeth/Weather-application.git
  cd Weather-application
  ```
2. Install Dependencies
   ```bash
  cd weather-application
  npm install
   ```
3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```bash
   REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open (http://localhost:3000) to view the app in your browser.

## Usage

Enter a city name in the search box and press Enter. The app will display the current weather information for that location.
