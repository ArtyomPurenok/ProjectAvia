import React, { useEffect, useState } from "react";
import './PassengerTypeCard.scss';

import { Button } from "../../../../../../Button";

type PassengerProps = {
    namePassenger: string
    addition?: string
}

export const PassengerTypeCard = ({namePassenger, addition}: PassengerProps) => {
    const [number, setNumber] = useState(0);


    useEffect(() => {
        console.log(number);
        
    });

    const numberUp = () => {
        return setNumber(number + 1);
    };

    const numberDown = () => {
        return setNumber(number - 1);
    };

    return <div className="passenger-type-card">
        <p className="passenger-type-card_passenger-name">
        {namePassenger}{addition && <p className="passenger-type-card_passenger-addition">{addition}</p>}
        </p>

        <Button className="passenger-type-card_button-minus" text={'-'} onClick={numberDown}/>
        <p className="passenger-type-card_passenger-number">{number}</p>
        <Button className="passenger-type-card_button-plus" text={'+'} onClick={numberUp}/>
    </div>;
};