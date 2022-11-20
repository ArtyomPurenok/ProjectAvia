import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './RecommendedCountries.scss';

import { GiControlTower } from "react-icons/gi";


type Props = {
    text?: string
    className?: string
    onClick?: any
    reducersObject?: any
}

export const RecommendedCountries = ({text, onClick, reducersObject, className}: Props) => {
    const dispatch = useDispatch();
    
    const [arrRecommended, setArrRecommended] = useState([]);


    const getArrCountries = async () => {
        const response: any = await fetch(`https://autocomplete.travelpayouts.com/places2?locale=en&types[]=airport&types[]=city&term=${text}`, {
            method: "GET",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
        });

        if(response.ok) {     
            const result = await response.json();
            setArrRecommended(result.slice(0, 6));
        }
    };

    
    useEffect(() => {
        getArrCountries();
    }, [text]);    





    return <div className={`recommended-countries recommended-countries_${className}`} onClick={onClick}>

        {arrRecommended?.map((el: any) => {
            if (el.type === "city") {
                return <div className="recommended-countries_card-city" onClick={() => {dispatch(reducersObject.reducerInputIATA(el.code)), dispatch(reducersObject.reducerInputLocation(el.name));}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <p className="recommended-countries_card-city--city">{el.name}</p>
                        <p className="recommended-countries_card-city--country">{`(${el.country_name})`}</p>
                    </div>

                    <p className="recommended-countries_iata"> {el.code}</p>

                </div>;
            }

            if (el.type === "airport") {
                return <div className="recommended-countries_card-airport" onClick={() => {dispatch(reducersObject.reducerInputIATA(el.code)), dispatch(reducersObject.reducerInputLocation(el.name));}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <GiControlTower/>
            
                        <div>
                            <p  className="recommended-countries_airport">{el.name}</p>
                            <p  className="recommended-countries_country">{`(${el.city_name})`}</p>
                        </div>
                    </div>

                    <p className="recommended-countries_iata">{el.code}</p>
                </div>;
            }
            return <div><p>{el.code}</p></div>;
        })}




    </div>;
};