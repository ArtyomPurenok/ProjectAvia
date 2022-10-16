import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from 'formik';
import './InputsBox.scss';

import { Input } from "../../Input";
import { Button } from "../../Button";
import { RecommendedCountries } from "./RecommendedCountries";
import { inputFromIATA, inputFromLocation, inputToIATA, inputToLocation } from "../../../redux/reducer/dataSearchAviaTicketReducer";

import { TbCurrentLocation } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowLeftRightFill } from "react-icons/ri";



export const InputsBox = ({ onChange }: any) => {
    const dataForSearchReducer = useSelector((state: any) => state.dataTicketSearch);
    const refInputFrom = useRef(null);
    const refInputTo = useRef(null);

    
    const formik = useFormik({
        initialValues: {
            from: dataForSearchReducer.inputFromIATA ?? '',
            to: dataForSearchReducer.inputToIATA ?? '',
            calendarStart: '',
            calendarFinish: ''
        },
        onSubmit: values => {
        }
    });

    const inputDateUp = () => {
        onChange(formik);
    };













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
            formik.handleChange;
        }else {setInputFrom(false);}
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
            formik.handleChange;
        }else {setInputTo(false);}
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









    return <form onBlur={inputDateUp} onSubmit={formik.handleSubmit}>
        <div className="inputs-box">
            <div className="inputs-box_inputs">

                <div className="inputs-box_input-div-left">
                    <TbCurrentLocation className="inputs-box_input-div-left--img"/>
                    <Input refInput={refInputFrom} onClick={selectTextInputFrom} onChange={findCountryFrom} className="inputs-box_input-div-left--input" defaultValue={null} placeholder="Откуда" name="from"/>
                    <Button className="inputs-box_inputs--button" Icon={RiArrowLeftRightFill}/>

                    {inputFrom && <RecommendedCountries reducersObject={objValueInputFrom} text={textForSeach} onClick={closeInputFrom}/>}
                </div>


                <div className="inputs-box_input-div-right">
                    <IoLocationOutline className="inputs-box_input-div-right--img"/>
                    <Input refInput={refInputTo} onClick={selectTextInputTo} onChange={findCountryTo} className="inputs-box_input-div-right--input" defaultValue={null} placeholder="Куда" name="to"/>

                    {inputTo && <RecommendedCountries reducersObject={objValueInputTo} text={textForSeach} onClick={closeInputTo}/>}
                </div>

            </div>


            <div>
                <Input className="inputs-box_calendar" type='date' placeholder="Data S" value={formik.values.calendarStart} onChange={formik.handleChange} name="calendarStart"/>
                <Input className="inputs-box_calendar" type='date' placeholder="Data F" value={formik.values.calendarFinish} onChange={formik.handleChange} name="calendarFinish"/>
            </div>
        </div>;
    </form>;
};