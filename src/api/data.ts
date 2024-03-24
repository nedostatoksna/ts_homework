import { City, User, Weather } from "../typesAndInterfaces/interfaces";
import { user, weather, city } from "./db,";

type getUserInfoFn = () => User

const getUserInfo: getUserInfoFn = () => {
    return user;
};

type getWeatherInfoFn = () => Weather
const getWeatherInfo: getWeatherInfoFn = () => {

    return weather;
};

type getCityInfoFn = () => City

const getCityInfo: getCityInfoFn = () => {

    return city;
};

export {getUserInfo, getWeatherInfo, getCityInfo };