import React, { useState } from "react";
import './FiltersBox.scss';
import { useSelector } from "react-redux";

import { Button } from "../../../Button";
import { PassengerSelection } from "./components/PassengerSelection";

import { RiArrowLeftRightFill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineArrowDropDown } from "react-icons/md";

import { useChoosingDirection } from "./hooks/useChoosingDirection";
import { useCountingPassengers } from "./hooks/useCountingPassengers";


export const FiltersBox = () => {
    const dataPassenger = useSelector((state: any) => state.dataTicketSearch);
    const hookImgDirection = useChoosingDirection;
    const countingPassengers = useCountingPassengers;


    const [active, setActive] = useState('');

    const OpenSelection = () => {
        if(active === 'open') {
            return setActive('');
        }else {return setActive('open');};
    };





    const [imgDirection, setImgDirection] = useState(<RiArrowLeftRightFill/>);
    const choosingDirection = (el: any) => {
        return setImgDirection(hookImgDirection(el.target.value));    
    };



    return <div className="filters-box">


        <div className="filters-box_select-div">
            {imgDirection}

            <div className="filters-box_select-arrow"></div>

            <select className="filters-box_select-directions" onChange={choosingDirection}>
                <option>Туда и обратно</option>
                <option>В одну сторону</option>
            </select>
        </div>



        <div className="filters-box_number-passengers">
            <div className="filters-box_number-passengers--user"><HiOutlineUser/></div>
            <Button className="filters-box_number-passengers--button" text={`${countingPassengers(dataPassenger)}`} onClick={OpenSelection}/>
            <div className="filters-box_number-passengers--arrow"><MdOutlineArrowDropDown/></div>
            {active && <PassengerSelection/>}
        </div>



        <div className="filters-box_select-div">

            <div className="filters-box_select-arrow"></div>

            <select className="filters-box_select-directions">
                <option>Экономкласс</option>
                <option>Первый класс</option>
            </select>
        </div>
    </div>;
};