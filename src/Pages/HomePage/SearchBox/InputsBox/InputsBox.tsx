import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './InputsBox.scss';

import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { RecommendedCountries } from "./RecommendedCountries";
import { inputFromIATA, inputFromLocation, inputToIATA, inputToLocation, reverse } from "../../../../redux/reducer/dataSearchAviaTicketReducer";

import { TbCurrentLocation } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowLeftRightFill } from "react-icons/ri";
import AirDatepicker from "air-datepicker";
import 'air-datepicker/air-datepicker.css';
import { Calendar } from "../../../../components/Calendar/Calendar";



export const InputsBox = () => {
    const dataForSearchReducer = useSelector((state: any) => state.dataTicketSearch);
    const dispatch = useDispatch();
    const refInputFrom = useRef(null);
    const refInputTo = useRef(null);

    let date = new Date();

    const calendarOPtions = {
        range: true,
        multipleDatesSeparator: '-',
        minDate: date
    };
    new AirDatepicker('.calendar', calendarOPtions);


    const objValueInputFrom = {
        reducerInputIATA: inputFromIATA,
        reducerInputLocation: inputFromLocation,
    };
    const objValueInputTo = {
        reducerInputIATA: inputToIATA,
        reducerInputLocation: inputToLocation,
    };

    const [textForSeach, setTextForSeach] = useState('');

    //input from
    const [inputFrom, setInputFrom] = useState(false);

    const findCountryFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length >= 1) {
            setInputTo(false);
            setInputFrom(true);
            setTextForSeach(event.target.value);
        } else { setInputFrom(false); }
    };

    const setValueInputFrom = (el: any) => {
        el.current.value = dataForSearchReducer.inputFromLocation;
    };

    const closeInputFrom = () => {
        setInputFrom(false);
        setValueInputFrom(refInputFrom);
    };

    const selectTextInputFrom = (el: any) => {
        setInputTo(false);
        setValueInputTo(refInputTo);
        return el.target.select();
    };

    useEffect(() => {
        setValueInputFrom(refInputFrom);
    }, [dataForSearchReducer.inputFromLocation]);




    //input to
    const [inputTo, setInputTo] = useState(false);

    const findCountryTo = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length >= 1) {
            setInputFrom(false);
            setInputTo(true);
            setTextForSeach(event.target.value);
        } else { setInputTo(false); }
    };

    const setValueInputTo = (el: any) => {
        el.current.value = dataForSearchReducer.inputToLocation;
    };

    const closeInputTo = () => {
        setInputTo(false);
        setValueInputTo(refInputTo);
    };

    const selectTextInputTo = (el: any) => {
        setInputFrom(false);
        setValueInputFrom(refInputFrom);
        return el.target.select();
    };

    useEffect(() => {
        setValueInputTo(refInputTo);
    }, [dataForSearchReducer.inputToLocation]);


    const setReverse = () => { dispatch(reverse()); };





    return <div className="inputs-box">
        <div className="inputs-box_inputs">

            <div className="inputs-box_input-div-left">
                <TbCurrentLocation className="inputs-box_input-div-left--img" />
                <Input refInput={refInputFrom} onClick={selectTextInputFrom} onChange={findCountryFrom} className="inputs-box_input-div-left--input" defaultValue={null} placeholder="Откуда" />
                <Button onClick={setReverse} className='inputs-box_inputs--button' Icon={RiArrowLeftRightFill} />
                {inputFrom && <RecommendedCountries reducersObject={objValueInputFrom} text={textForSeach} onClick={closeInputFrom} />}
            </div>
            <div className="inputs-box_input-div-right">
                <IoLocationOutline className="inputs-box_input-div-right--img" />
                <Input refInput={refInputTo} onClick={selectTextInputTo} onChange={findCountryTo} className="inputs-box_input-div-right--input" defaultValue={null} placeholder="Куда" />
                {inputTo && <RecommendedCountries reducersObject={objValueInputTo} text={textForSeach} onClick={closeInputTo} />}
            </div>
        </div>
        <div>

            <Calendar range={true} />
        </div>
    </div>;
};