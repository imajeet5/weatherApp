
import { useEffect, useState } from 'react';
import './App.css';
import Loader from './Loader';
import Weather from './Weather';

const aK = "8cffaaa09404e93df0c2814ce35d9e77";

function App() {
  
  const [state, setState] = useState({latitude: null,longitude: null, errorMessage: ""});
   const [temperature, setTemperature] = useState(null);
  
  const isLoading = !temperature;
  
  
  
  
  
  
  
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({latitude: (position.coords.latitude),  longitude: (position.coords.longitude), errorMessage: ""});
        
      },
      (err) => {
        setState({...state, errorMessage: err});
      }
    );
  }, []);
  
  
  useEffect(() => {
    
    const getWeather = async () => {
      if(state.latitude || state.longitude){
        const respJson = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${state.latitude}&lon=${state.longitude}&appid=${aK}&units=metric`)
        
        const weather = await respJson.json()
        
        console.log(weather)
        setTemperature(weather.main.temp);
    }
    
    
    }
    
    getWeather();
    
  }, [state.latitude, state.latitude])
  
  
  
  return (
    <div className="App">
     {isLoading ? <Loader/>:<Weather temperature={temperature}/>}
    </div>
  );
}

export default App;
