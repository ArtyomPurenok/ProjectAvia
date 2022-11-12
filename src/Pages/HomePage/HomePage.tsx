import React, { useState } from "react";
import './HomePage.scss';

import { Header } from "../components/Header/Header";
import { SearchBox } from "./SearchBox";
import { TicketCard } from "./TicketCard";
import { Button } from "../../components/Button";
import { ModalTicket } from "../../components/ModalTicket/ModalTicket";

export const HomePage = () => {
    const [ticketData, setticketData]: any = useState('');
    const [modalacvive, setModalActive] = useState(false);
    const renderTicket = (ticket: any) => {
        setticketData(ticket);
    };

    return <div className="home-page">
        <div className="home-page_center">
            <Header />
            <SearchBox renderTicket={renderTicket} />
            <Button className="buttonRandomWay" text='Random Ways' onClick={() => setModalActive(!modalacvive)} />
            <ModalTicket acvive={modalacvive} setActive={setModalActive} />
        </div>

        {ticketData && ticketData?.data.map((ticket: any, index: any) => (<TicketCard key={index} currency={ticketData.currency} ticket={ticket} />))}
    </div>;
};