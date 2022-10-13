import React, { useState } from "react";
import './SearchBox.scss';

import { InputsBox } from "./components/InputsBox";
import { FiltersBox } from "./components/FiltersBox";
import { Button } from "../Button";
import { TicketCard } from "../TicketCard";
export const SearchBox = ({ }) => {
    const [ticketData, setticketData]: any = useState(null);
    const [name, setName]: any = useState({});
    async function getTicket() {
        try {
            const { calendarFinish, calendarStart, from, to } = name.values;
            console.log(from.toString(), to.toString(), calendarStart.toString());

            const response = await fetch(`https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${from.toString()}&destination=${to.toString()}&currency=usd&departure_at=${calendarStart.toString()}&return_at=${calendarFinish.toString()}&sorting=price&direct=true&limit=10&token=be0bcf9a2860e671a347da88a9784277`);
            // https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${from.toString()}&destination=${to.toString()}&currency=usd&departure_at=${calendarStart.toString()}&return_at=2022-11-28&sorting=price&direct=true&limit=100&token=be0bcf9a2860e671a347da88a9784277`

            const responseFormat = (response).json();
            console.log(await responseFormat);
            setticketData(await responseFormat);
        } catch (error) {
            return console.log(error);
        }
    };

    const handleNameCgahge = (name: any) => {
        setName(name);

    };

    return <div className="search-box">
        <div className="search-box_ticket-search">

            {/* <FiltersBox /> */}
            {/* <div className="search-box_setting-filters">setting filters</div> */}

            <InputsBox onChange={handleNameCgahge} />

            <Button text="Найти билет" className="search-box_button" onClick={getTicket} />
            {ticketData && ticketData?.data.map((ticket: any, index: any) => (<TicketCard key={index} currency={ticketData.currency} ticket={ticket} />))}

        </div>
    </div>;
};