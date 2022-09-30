import React from "react";
import './TicketCard.scss';

import { DateAndLocation } from "./components/DateAndLocation";
import { Button } from "../Button";

import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { TbLuggage, TbLuggageOff } from "react-icons/tb";



export const TicketCard = () => {
    return <div className="ticket-card">

        <div className="ticket-card_flight-information">
            <DateAndLocation date={"13 JUN 2022"} time={"08:30"} iata={"MSQ"} airport={"(Minsk National Airport)"}/>
            
            <div className="ticket-card_flight-information--flight-box">
                <div className="ticket-card_flight-information--flight-time">3h 55m</div>
                <div className="ticket-card_flight-information--flight-line">
                    <div><GiAirplaneDeparture/></div>
                    <hr/>
                    <div><GiAirplaneArrival/></div>
                </div>
            </div>

            <DateAndLocation date={"13 JUN 2022"} time={"12:25"} iata={"DME"} airport={"(Moscow Domodedovo Airport)"}/>
        </div>


        <div className="ticket-card_additional-information">
            <h1 className="ticket-card_additional-information--title">Flight-information</h1>

            <div className="ticket-card_additional-information--flight-number">
                <p>Flight-number:</p>
                <h3>CX759</h3>
            </div>

            <div className="ticket-card_additional-information--flight-model">
                <p>Flight-model:</p>
                <h3>Airbus A350-900</h3>
            </div>

            <div className="ticket-card_additional-information--class">
                <p>Class:</p>
                <h3>Economy</h3>
            </div>
        </div>

        <div className="ticket-card_up-line"></div>

        <div className="ticket-card_buy-ticket">
            <div className="ticket-card_buy-ticket--baggage">
                <Button className="ticket-card_buy-ticket--baggage-yes" Icon={TbLuggage}/>
                <Button  className="ticket-card_buy-ticket--baggage-no" Icon={TbLuggageOff}/>
            </div>
            <p className="ticket-card_buy-ticket--price">337$</p>
            <Button className="ticket-card_buy-ticket--button-pay" text={"Buy"}/>
        </div>

    </div>;
};