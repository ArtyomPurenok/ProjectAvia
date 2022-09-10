import React from "react";
import './PassengerSelection.scss';

import { PassengerTypeCard } from "./PassengerTypeCard";
import { Button } from "../../../../../Button";

export const PassengerSelection = () => {
    return <div className="passenger-selection">
        <PassengerTypeCard namePassenger="Взрослые"/>
        <PassengerTypeCard namePassenger="Дети" addition="(2-11 лет)"/>
        <PassengerTypeCard namePassenger="Младенцы" addition="с местом"/>
        <PassengerTypeCard namePassenger="Младенцы" addition="без места"/>

        <div className="passenger-selection_buttons-box">
            <Button text="Отмена" className="passenger-selection_button"/>
            <Button text="Готово" className="passenger-selection_button"/>
        </div>
    </div>;
};