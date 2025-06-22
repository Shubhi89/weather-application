import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const apiKey = "dbbf1fceb3627f31dc34c63f76b51778";


  let getWeatherInfo = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    let result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather : data.weather[0].description,
    };
    return result;
  }

  let [city, setCity] = useState("");

  let handleChange =  (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    setCity("");
    let info = await getWeatherInfo(city);
    updateInfo(info);
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter city"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </div>
  );
}




 
