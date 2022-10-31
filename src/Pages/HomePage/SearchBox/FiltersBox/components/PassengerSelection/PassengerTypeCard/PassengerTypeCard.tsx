import React, { useEffect, useState } from "react";
import './PassengerTypeCard.scss';
import { useDispatch } from "react-redux";

import { Button } from "../../../../../../../components/Button";


type PassengerProps = {
    namePassenger: string
    typePassenger?: any
    addition?: string
    numberPassenger: number

}

export const PassengerTypeCard = ({namePassenger, addition, numberPassenger, typePassenger}: PassengerProps) => {
    const dispatch = useDispatch();
    
    const [number, setNumber] = useState(0);

    useEffect(() => {
        setNumber(numberPassenger);
    }), [];


    const numberUp = () => {
        return dispatch(typePassenger("plus"));
    };
    const numberDown = () => {
        return dispatch(typePassenger("minus"));
    };



    return <div className="passenger-type-card">
        <p className="passenger-type-card_passenger-name">
        {namePassenger}{addition && <p className="passenger-type-card_passenger-addition">{addition}</p>}
        </p>

        <Button className="passenger-type-card_button-minus" text={'-'} onClick={numberDown}/>
        <p className="passenger-type-card_passenger-number">{numberPassenger && number}</p>
        <Button className="passenger-type-card_button-plus" text={'+'} onClick={numberUp}/>
    </div>;
};