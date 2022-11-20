import React, { useState } from "react";
import './HomePage.scss';
import { Header } from "../components/Header/Header";
import { Button } from "../../components/Button";
import { ModalTicket } from "../../components/ModalTicket/ModalTicket";
import { SearchBox } from "./SearchBox";
import { PopularDestinationGrid } from "../../components/PopularDestinationGrid/PopularDestinationGrid";

export const HomePage = () => {
    const [modalacvive, setModalActive] = useState(false);




    return <div className="home-page">

        <div className="home-page_center">
            <Header />
            <SearchBox/>
            <Button className="buttonRandomWay" text='Random Ways' onClick={() => setModalActive(!modalacvive)} />
            {modalacvive && <ModalTicket active={modalacvive} setActive={setModalActive} />}
        </div>

        <div className="home-page_popular-destination">
            <PopularDestinationGrid/>
        </div>
        

        {/* <div>
            {ticketData && ticketData?.data.map((ticket: any, index: any) => (<TicketCard key={index} currency={ticketData.currency} ticket={ticket} />))}
        </div> */}

        {/* <Slidder /> */}

    </div >;
};