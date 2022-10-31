import React from "react";
import './DateAndLocation.scss';

type Props = {
    date?: string;
    time?: string;
    iata?: string;
    airport?: string;
}


export const DateAndLocation = ({date, time, iata, airport}: Props) => {
    return <div className="date-and-location">
        <p className="date-and-location_date">{date}</p>
        <p className="date-and-location_time">{time}</p>
        <p className="date-and-location_iata">{iata}</p>
        <p className="date-and-location_airport">{airport}</p>
    </div>;
};