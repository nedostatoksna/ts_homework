import React from "react";
import { getCityInfo } from "../api/data";
import { City } from "../typesAndInterfaces/interfaces";

const CityPage = () => {

    interface Tbilisi extends City {
        name: string;
        country: 'Georgia';
        population: number;
        europe: boolean;
    }
    type getTbilisiFn = (name: 'Tbilisi') => Tbilisi
    const getTbilisi: getTbilisiFn = (name) => {
        const result: Tbilisi = {
            name: 'Tbilisi',
            country: 'Georgia',
            population: 1241709,
            europe: true
        }
        return result;
    }
    type GetCountryFn = (city: 'Ljubljana' | 'Ankara' | 'Tbilisi') => string
    const getCountry: GetCountryFn = (city) => {
        let country;
        city === 'Ljubljana' ? country = 'Slovenia' :
        city === 'Ankara' ? country = 'Turkey' :
        country = 'Georgia';
        return country;
    } 
    return (
        <>
            {getTbilisi('Tbilisi').name}
            <br></br>
            {getCountry('Tbilisi')}
            <br></br>
            {getTbilisi('Tbilisi').population}
            <br></br>
            {getTbilisi('Tbilisi').europe && "yes"}
            <br></br>
            <br></br>
            {getCityInfo().name}
            <br></br>
            {getCityInfo().country}
            <br></br>
            {getCityInfo().population}
            <br></br>
            {getCityInfo().europe && "yes"}
        </>
    )
}

export default CityPage;