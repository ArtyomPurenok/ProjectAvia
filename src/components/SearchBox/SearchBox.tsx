import React, { useState } from "react";
import { useSelector } from "react-redux";
import './SearchBox.scss';

import { InputsBox } from "./InputsBox";
import { FiltersBox } from "./FiltersBox";
import { Button } from "../Button";


export const SearchBox = ({ renderTicket }: any) => {
    const dataForSearchReducer = useSelector((state: any) => state.dataTicketSearch);


    async function getTicket() {
        try {
            const response = await fetch(`https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${dataForSearchReducer.inputFromIATA}&destination=${dataForSearchReducer.inputToIATA}&currency=usd&departure_at=${dataForSearchReducer.calendarStart}&return_at=${dataForSearchReducer.calendarFinish}&sorting=price&direct=true&limit=10&token=be0bcf9a2860e671a347da88a9784277`);
            const responseFormat = await (response).json();

            if (response.ok && responseFormat.data.length != 0) {
                console.log(responseFormat);
                
                renderTicket(responseFormat);
            }
        } catch (error) {
            return console.log(error);
        }
    };



    return <div className="search-box">
        <div className="search-box_ticket-search">

            <FiltersBox />

            <InputsBox/>
            <Button text="Найти билет" className="search-box_button" onClick={getTicket} />
        </div>
    </div>;
};