import React from 'react';
import { useParams } from "react-router-dom";
import WeatherData from './WeatherData';

const MyWeather = () => {

  const params = useParams();
  console.log(params);

  const {day} = params;
  console.log(day);

  const [am, pm] = WeatherData[day];
  console.log(am,pm);

  return (
    <div>

      <h2>오전</h2>
      <p>{am}</p>
      <h2>오후</h2>
      <p>{pm}</p>
      
    </div>
  );
};

export default MyWeather;