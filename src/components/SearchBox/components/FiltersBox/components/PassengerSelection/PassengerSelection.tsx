import React, { useState } from "react";
import './PassengerSelection.scss';
import { useSelector } from "react-redux";

import { adults, children, infants } from "../../../../../../redux/reducer/dataSearchAviaTicketReducer";

import { PassengerTypeCard } from "./PassengerTypeCard";
import { Button } from "../../../../../Button";




export const PassengerSelection = () => {
    const dataTicketSearch = useSelector((state: any) => state.dataTicketSearch);

    return <div className="passenger-selection">
        <PassengerTypeCard namePassenger="Взрослые" numberPassenger={dataTicketSearch.adults} typePassenger={adults} />
        <PassengerTypeCard namePassenger="Дети" addition="(2-11 лет)" numberPassenger={dataTicketSearch.children} typePassenger={children} />
        <PassengerTypeCard namePassenger="Младенцы" numberPassenger={dataTicketSearch.infants} typePassenger={infants} />

        <div className="passenger-selection_buttons-box">
            <Button text="Отмена" className="passenger-selection_button" />
            <Button text="Готово" className="passenger-selection_button" />

        </div>
    </div>;
};