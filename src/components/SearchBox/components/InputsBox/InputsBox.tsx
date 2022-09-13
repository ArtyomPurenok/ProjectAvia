import React from "react";
import './InputsBox.scss';

import { Input } from "../../../Input";
import { Button } from "../../../Button";
import { TbCurrentLocation } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowLeftRightFill } from "react-icons/ri";


export const InputsBox = () => {
    return <div className="inputs-box">


        <div className="inputs-box_inputs">
            <div className="inputs-box_input-div-left">
                <TbCurrentLocation className="inputs-box_input-div-left--img"/>
                <Input className="inputs-box_input-div-left--input" placeholder="Откуда"/>
                <Button className="inputs-box_inputs--button" Icon={RiArrowLeftRightFill}/>
            </div>


            <div className="inputs-box_input-div-right">
                <IoLocationOutline className="inputs-box_input-div-right--img"/>
                <Input className="inputs-box_input-div-right--input" placeholder="Куда"/>
            </div>
        </div>


        <div>
            <Input className="inputs-box_calendar" type='date'/>
            <Input className="inputs-box_calendar" type='date'/>
        </div>


    </div>;
};