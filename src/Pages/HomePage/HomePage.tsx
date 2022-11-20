import React, { useState } from "react";
import './HomePage.scss';
import { Header } from "../components/Header/Header";
import { Button } from "../../components/Button";
import { ModalTicket } from "../../components/ModalTicket/ModalTicket";

export const HomePage = () => {
    const [modalacvive, setModalActive] = useState(false);
    return <div className="home-page">
        <div className="home-page_center">
            <Header />
            <Button className="buttonRandomWay" text='Random Ways' onClick={() => setModalActive(!modalacvive)} />
            {modalacvive && <ModalTicket active={modalacvive} setActive={setModalActive} />}
        </div>
        {/* <Slidder /> */}

    </div >;
};