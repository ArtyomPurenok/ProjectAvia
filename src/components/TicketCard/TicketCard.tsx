import React, { useEffect, useState } from "react";
import './TicketCard.scss';

import { DateAndLocation } from "./components/DateAndLocation";
import { Button } from "../Button";

import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { TbLuggage, TbLuggageOff } from "react-icons/tb";
import { log } from "console";
type Iticket = {
    ticket: any;
};


export const TicketCard = (ticket: any,) => {
    const { local_arrival, cityFrom, route, duration, price, cityTo, utc_departure, flyFrom, flyTo } = ticket.ticket; let fly;
    const [nameAirFrom, setNameAirFrom] = useState();
    const [nameAirTo, setNameAirTo] = useState();
    useEffect(() => {
        getAiroportName();
    }, [flyFrom]);
    const getAiroportName = async () => {
        const urlFrom = `https://api.tequila.kiwi.com/locations/query?term=${flyFrom}&locale=en-US&location_types=airport&limit=5`;
        const urlTo = `https://api.tequila.kiwi.com/locations/query?term=${flyTo}&locale=en-US&location_types=airport&limit=5`;
        const options = {
            headers: {
                'accept': 'application/json',
                'apikey': 'ftlmCHIrWRvayIj867aXpbi5q6D5q5hR',
            },
        };

        const responseFrom = await fetch(urlFrom, options);

        if (responseFrom.ok) {
            const result = await responseFrom.json();
            setNameAirFrom(result.locations[0].name);
        }
        const responseTo = await fetch(urlTo, options);
        if (responseTo.ok) {
            const result = await responseTo.json();
            setNameAirTo(result.locations[0].name);
        }
    };




    function convertTime(sec: number) {
        const hours = Math.floor(sec / 3600);
        const minutes = sec / 60 % 60;
        const seconds = sec % 60;
        return hours + ":" + minutes;
    };
    return <div className="ticket-card">
        <div className="ticket-card_flight-information">
            <DateAndLocation date={utc_departure.substring(0, 10)} time={utc_departure.substring(11, 16)} iata={cityFrom} airport={nameAirFrom} />
            <div className="ticket-card_flight-information--flight-box">
                <div className="ticket-card_flight-information--flight-time">{convertTime(duration.departure)} min</div>
                <div className="ticket-card_flight-information--flight-line">
                    <div><GiAirplaneDeparture /></div>
                    <hr />
                    <div><GiAirplaneArrival /></div>
                </div>
            </div>
            <DateAndLocation date={local_arrival.substring(0, 10)} time={local_arrival.substring(11, 16)} iata={cityTo} airport={nameAirTo} />
        </div>
        <div className="ticket-card_additional-information">
            <h1 className="ticket-card_additional-information--title">Flight-information</h1>
            <div className="ticket-card_additional-information--flight-number">
                <p>Flight-number:</p>
                <h3>{route.flight_no}</h3>
            </div>
            <div className="ticket-card_additional-information--flight-model">
                <p>Flight-model:!!!</p>
                <h3>Airbus A350-900!!!</h3>
            </div>
            <div className="ticket-card_additional-information--class">
                <p>Class:!!!</p>
                <h3>{route.fare_category}</h3>
            </div>
        </div>
        <div className="ticket-card_up-line"></div>
        <div className="ticket-card_buy-ticket">
            <div className="ticket-card_buy-ticket--baggage">
                <Button className="ticket-card_buy-ticket--baggage-yes" Icon={TbLuggage} />
                <Button className="ticket-card_buy-ticket--baggage-no" Icon={TbLuggageOff} />
            </div>
            <p className="ticket-card_buy-ticket--price">{price} <span >{ticket.currency.toUpperCase()}</span> </p>
            <Button className="ticket-card_buy-ticket--button-pay" text={"Buy"} />
        </div>
    </div>;
};