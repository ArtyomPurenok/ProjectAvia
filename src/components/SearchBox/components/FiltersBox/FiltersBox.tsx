import React, { useEffect, useState } from "react";
import './FiltersBox.scss';

import { Button } from "../../../Button";
import { PassengerSelection } from "./components/PassengerSelection";

export const FiltersBox = () => {
    const [active, setActive] = useState('');

    const OpenSelection = () => {
        if(active === 'open') {
            return setActive('');
        }else {return setActive('open');};
    };


    // useEffect(() => {
    //     console.log(active);
        
    // });



    return <div className="filters-box">

        <div className="filters-box_select-div">
            img 
            <select className="filters-box_select-directions">
                <option>Туда и обратно</option>
                <option>Обратно</option>
            </select>
        </div>

        <div>
            <Button className="filters-box_number-passengers" text={`img ${1}`} onClick={OpenSelection}/> {/*+ img 2шт*/}
            {active && <PassengerSelection/>}
        </div>



        <div className="filters-box_select-div">
            img
            <select className="filters-box_select-directions">
                <option>Экономкласс</option>
                <option>Первый класс</option>
            </select>
        </div>
    </div>;
};