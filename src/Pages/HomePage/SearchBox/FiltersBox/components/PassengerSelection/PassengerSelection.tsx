import React, { useState } from "react";
import './PassengerSelection.scss';
import { useDispatch, useSelector } from "react-redux";

import { adults, children, infants } from "../../../../../../redux/reducer/dataSearchAviaTicketReducer";

import { PassengerTypeCard } from "./PassengerTypeCard";
import { Button } from "../../../../../../components/Button";




export const PassengerSelection = ({test}: any) => {
    const dataTicketSearch = useSelector((state: any) => state.dataTicketSearch);
    const dispatch = useDispatch();

    const [newAdults, setNewAdults] = useState(adults);
    const [newChildren, setNewChildren] = useState(children);
    const [newInfants, setNewInfants] = useState(children);

    const setNewNumberAdults = (el: any) => {
        setNewAdults(el);
    };

    const setNewNumberChildren = (el: any) => {
        setNewChildren(el);
    };

    const setNewNumberInfants = (el: any) => {
        setNewInfants(el);
    };

    


    const dispatchNewNUmbers = () => {
        dispatch(adults(newAdults));
        dispatch(children(newChildren));
        dispatch(infants(newInfants));
        test();
    };




    return <div className="passenger-selection">
        <PassengerTypeCard namePassenger="Взрослые" numberPassenger={dataTicketSearch.adults} callBackNumber={setNewNumberAdults} />
        <PassengerTypeCard namePassenger="Дети" addition="(2-11 лет)" numberPassenger={dataTicketSearch.children} callBackNumber={setNewNumberChildren} />
        <PassengerTypeCard namePassenger="Младенцы" numberPassenger={dataTicketSearch.infants} callBackNumber={setNewNumberInfants} />

        <div className="passenger-selection_buttons-box">
            <Button onClick={test} text="Отмена" className="passenger-selection_button" />
            <Button onClick={dispatchNewNUmbers} text="Готово" className="passenger-selection_button" />

        </div>
    </div>;
};