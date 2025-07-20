import React, { useState } from 'react'

const Weather = () => {

    let [city,setCity]=useState("");
    let [weather,setWeather]=useState(null);

    async function weatherFetch(){
       // Step 1 : To access the latitude & longitude of an weather.
        let data=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
        let resData=await data.json();
        // console.log(resData.results[0]);

        let {latitude,longitude,name,country}=resData.results[0];
        // console.log(latitude,longitude,name,country)

       // Step 2: Gey Longitude & Latitude out;
       let getTemp=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)
       let resTemp=await getTemp.json()

       console.log(resTemp)

       setWeather({
        name:name,
        country,
        temperature:resTemp.current.temperature_2m
       })
    }

    weatherFetch()
    console.log(weather)

  return (
    <div>
      <h1>Weather API</h1>

      <h2> Weather Checker</h2>
      <input type="text" placeholder='Enter City Name' onChange={(e)=>{setCity(e.target.value)}} />
      <button onClick={()=>{weatherFetch()}}>Get Weather</button>
      {weather && 
      <div>
        <h2>{weather.name }, {weather.country}</h2>
        <p>Temperature is {weather.temperature}</p>
      </div>
      }
    </div>
  )
}

export default Weather
