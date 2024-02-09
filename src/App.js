import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);

  const apiKey = '895284fb2d2c50a520ea537456963d9c';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${apiKey}`;

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await axios.get(`${apiUrl}&q=${location}`);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError('Error fetching weather data. Please try again.');
      }
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Please Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <div className='top'>
            <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">{data.main && <h1>{data.main.temp.toFixed()}°F</h1>}</div>
              <div className="description">
                {data.weather && <p>{data.weather[0].main}</p>}
              </div>
            </div>

            {data.name && (
              <div className="bottom">
                <div className="feels">
                  {data.main && <p className="bold">{data.main.feels_like.toFixed()}°F</p>}
                  <p>Feels Like</p>
                </div>
                <div className="humidity">
                  {data.main && <p className="bold">{data.main.humidity}%</p>}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  {data.wind && <p className="bold">{data.wind.speed.toFixed()} MPH</p>}
                  <p>Wind Speed</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
