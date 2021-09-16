import React, {  useEffect, useState } from 'react'

const Weather = ({ temperature}) => {
    const [temp, setTemp] = useState(temperature);
    const [unit, setUnit] = useState("C");
    
    useEffect(() => {
     
        if(temperature > 30){
            document.body.style.backgroundColor="orange"
        }else{
            document.body.style.backgroundColor="aqua"
        }
        
    })
    
    
    const changeUnit = () => {
        if(unit === 'C'){
            const cToFahr = temp * 9 / 5 + 32;
            setTemp(cToFahr.toFixed(2));
            setUnit("F");
        }else{
            var fToCel = (temp - 32) * 5 / 9;
            setTemp(fToCel.toFixed(2));
            setUnit("C")
        }
    }
    
    return (
        <div  style={{color:'white'}}>
             <h1>
            {temp}  {unit}
        </h1>
        <button onClick={changeUnit} style={{fontSize:'1.2rem'}}>Change to {unit === 'C'? 'F': 'C'}</button>
        
        </div>
       
        
    )
}

export default Weather
