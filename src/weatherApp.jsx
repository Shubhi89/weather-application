import InfoBox from "./infoBox";
import SearchBox from "./searchBox";

export default function WeatherApp() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Weather Application</h1>
      <SearchBox />
      <InfoBox />
    </div>
  );
}