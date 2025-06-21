import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setCity("");
  };

  return (
    <div className="searchBox">
      <h3>Search for the weather</h3>
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
