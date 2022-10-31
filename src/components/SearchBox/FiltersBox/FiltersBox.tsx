import React, { useState } from "react";
import './FiltersBox.scss';
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../Button";
import { PassengerSelection } from "./components/PassengerSelection";

import { RiArrowLeftRightFill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineArrowDropDown } from "react-icons/md";

import { useChoosingDirection } from "./hooks/useChoosingDirection";
import { useCountingPassengers } from "./hooks/useCountingPassengers";
import { direction, flightClass } from "../../../redux/reducer/dataSearchAviaTicketReducer";


export const FiltersBox = () => {
    const dispatch = useDispatch();
    const dataPassenger = useSelector((state: any) => state.dataTicketSearch);
    const hookImgDirection = useChoosingDirection;
    const countingPassengers = useCountingPassengers;


    const [active, setActive] = useState('');

    const OpenSelection = () => {
        if (active === 'open') {
            return setActive('');
        } else { return setActive('open'); };
    };

    const [imgDirection, setImgDirection] = useState(<RiArrowLeftRightFill />);

    const choosingDirection = (el: any) => {
        dispatch(direction(el.target.value));
        // setImgDirection(hookImgDirection(el.target.value));
    };



    return <div className="filters-box">


        <div className="filters-box_select-div">
            {imgDirection}

            <div className="filters-box_select-arrow"></div>

            <select className="filters-box_select-directions" disabled onChange={choosingDirection}>
                <option value="round">Туда и обратно</option>
                <option value="oneway">В одну сторону</option>
            </select>
        </div>



        <div className="filters-box_number-passengers">
            <div className="filters-box_number-passengers--user"><HiOutlineUser /></div>
            <Button className="filters-box_number-passengers--button" text={`${countingPassengers(dataPassenger)}`} onClick={OpenSelection} />
            <div className="filters-box_number-passengers--arrow"><MdOutlineArrowDropDown /></div>
            {active && <PassengerSelection />}
        </div>



        <div className="filters-box_select-div">

            <div className="filters-box_select-arrow"></div>

            <select className="filters-box_select-directions" onChange={(el: any) => dispatch(flightClass(el.target.value))}>
                <option value='M'>economy</option>
                <option value='W'>economy premium</option>
                <option value='C'>business</option>
                <option value='F'>first class</option>
            </select>
        </div>
    </div>;
};