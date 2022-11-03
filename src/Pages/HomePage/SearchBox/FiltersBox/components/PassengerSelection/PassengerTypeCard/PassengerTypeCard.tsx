import React, { useEffect, useMemo, useState } from "react";
import './PassengerTypeCard.scss';

import { Button } from "../../../../../../../components/Button";


type PassengerProps = {
    namePassenger: string
    callBackNumber?: any
    addition?: string
    numberPassenger: number

}

export const PassengerTypeCard = ({namePassenger, addition, numberPassenger, callBackNumber}: PassengerProps) => {
    
    const [number, setNumber] = useState<Number>(0);

    useMemo(() => {
        setNumber(numberPassenger);
    }, [numberPassenger]);

    useEffect(() => {
        callBackNumber(number);
    });



    const numberUp = () => {
        setNumber(+number + 1);
    };

    const numberDown = () => {
        if (number === 0) {
            return setNumber(0);
        }
        setNumber(+number - 1);
    };


    return <div className="passenger-type-card">
        <p className="passenger-type-card_passenger-name">
        {namePassenger}{addition && <p className="passenger-type-card_passenger-addition">{addition}</p>}
        </p>

        <Button className="passenger-type-card_button-minus" text={'-'} onClick={numberDown}/>
        <p className="passenger-type-card_passenger-number">{+number}</p>
        <Button className="passenger-type-card_button-plus" text={'+'} onClick={numberUp}/>
    </div>;
};