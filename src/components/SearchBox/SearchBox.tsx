import React, { useState } from "react";
import './SearchBox.scss';

import { InputsBox } from "./InputsBox";
import { FiltersBox } from "./FiltersBox";
import { Button } from "../Button";
import { TicketCard } from "../TicketCard";
export const SearchBox = ({ renderTicket }: any) => {

    const [name, setName]: any = useState({});
    async function getTicket() {
        try {
            const { calendarFinish, calendarStart, from, to } = name.values;
            console.log(from.toString(), to.toString(), calendarStart.toString());

            const response = await fetch(`https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${from.toString()}&destination=${to.toString()}&currency=usd&departure_at=${calendarStart.toString()}&return_at=${calendarFinish.toString()}&sorting=price&direct=true&limit=10&token=be0bcf9a2860e671a347da88a9784277`);
            // https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${from.toString()}&destination=${to.toString()}&currency=usd&departure_at=${calendarStart.toString()}&return_at=2022-11-28&sorting=price&direct=true&limit=100&token=be0bcf9a2860e671a347da88a9784277`

            const responseFormat = await (response).json();
            // console.log(await responseFormat);
            // setticketData(await responseFormat);
            if (response.ok && responseFormat.data.length != 0) {
                renderTicket(responseFormat);
            }
        } catch (error) {
            return console.log(error);
        }
    };

    const handleNameCgahge = (dataInput: any) => {
        setName(dataInput);

    };

    return <div className="search-box">
        <div className="search-box_ticket-search">

            <FiltersBox />

            <InputsBox onChange={handleNameCgahge} />
            <Button text="Найти билет" className="search-box_button" onClick={getTicket} />
        </div>
    </div>;
};