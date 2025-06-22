import InfoBox from "./infoBox";
import SearchBox from "./searchBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({
    city: "Delhi",
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    feelsLike: 24.84,
    weather: "haze",
  });

  let updateInfo = (result) => {
    setWeatherData(result);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Weather Application</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherData} />
    </div>
  );
}