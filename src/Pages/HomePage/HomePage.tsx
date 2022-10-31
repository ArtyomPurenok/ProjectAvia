import React, { useState } from "react";
import './HomePage.scss';

import { Header } from "../components/Header/Header";
import { SearchBox } from "./SearchBox";
import { TicketCard } from "./TicketCard";



export const HomePage = () => {
    const [ticketData, setticketData]: any = useState('');

    const renderTicket = (ticket: any) => {
      setticketData(ticket);
    };

    return <div className="home-page">

        <div className="home-page_center">
            <Header />
            <SearchBox renderTicket={renderTicket} />
        </div>



        {ticketData && ticketData?.data.map((ticket: any, index: any) => (<TicketCard key={index} currency={ticketData.currency} ticket={ticket} />))}
    </div>;
};