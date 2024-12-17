import "./styles.css";
import Sun from "./Sun";
// TODO: Load real data from https://wttr.in/
// Docs: https://github.com/chubin/wttr.in
const mockWeather = {
  temp_C: "22",
  temp_F: "72",
};

export default function App() {
  const weather = mockWeather;
  return (
    <div className="App">
      <h1>London</h1>
      <Sun />
      <h2>{weather.temp_C} ℃</h2>
    </div>
  );
}
