import React from "react";
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
    const { origin, destination, origin_airport, destination_airport, price, flight_number, departure_at, return_at, duration } = ticket.ticket;
    return <div className="ticket-card">
        <div className="ticket-card_flight-information">
            <DateAndLocation date={departure_at.substring(0, 10)} time={departure_at.substring(11, 16)} iata={origin} airport={origin_airport} />
            <div className="ticket-card_flight-information--flight-box">
                <div className="ticket-card_flight-information--flight-time">{duration} min</div>
                <div className="ticket-card_flight-information--flight-line">
                    <div><GiAirplaneDeparture /></div>
                    <hr />
                    <div><GiAirplaneArrival /></div>
                </div>
            </div>
            <DateAndLocation date={return_at.substring(0, 10)} time={return_at.substring(11, 16)} iata={destination} airport={destination_airport} />
        </div>
        <div className="ticket-card_additional-information">
            <h1 className="ticket-card_additional-information--title">Flight-information!!!</h1>
            <div className="ticket-card_additional-information--flight-number">
                <p>Flight-number:</p>
                <h3>{flight_number}</h3>
            </div>
            <div className="ticket-card_additional-information--flight-model">
                <p>Flight-model:!!!</p>
                <h3>Airbus A350-900!!!</h3>
            </div>
            <div className="ticket-card_additional-information--class">
                <p>Class:!!!</p>
                <h3>Economy!!!</h3>
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