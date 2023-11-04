import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherWrapper from "./WeatherWrapper";

function App() {
  return (
    <>
      <WeatherWrapper />
    </>
  )
}

export default App


/* 
Custom Cog symbol that moves app left and hidden settings to right for settings
Create custom toggler for both imperial/metric or night/day mode?
Add Icons for temp, temp high, temp low, humidity
Create new component that takes in weather description (toLowerCase?) and returns react icon for weather condition

Add Favorites functionality, Star by city name
Add local storage for favorites functionality, brightness, and units
Add recent Cities looked up?
Add Remove for favorited Cities instead of a star or maybe white star instead of golden
Add tip area when hovering over star
*/