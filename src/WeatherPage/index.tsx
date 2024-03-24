import React from "react";
import { getWeatherInfo } from "../api/data";

const WeatherPage = () => {
    return (
        <>
        {getWeatherInfo().light}
        <br></br>
        {getWeatherInfo().sky}
        <br></br>
        {getWeatherInfo().cold ? "cold" : "warm"}
        <br></br>
        {getWeatherInfo().temperature}
        
        </>
    )
}

export default WeatherPage;