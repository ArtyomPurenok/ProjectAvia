import React from "react";
import './FiltersBox.scss';

import { Button } from "../../../Button";

export const FiltersBox = () => {
    return <div className="filters-box">

        <div className="filters-box_select-div">
            img 
            <select className="filters-box_select-directions">
                <option>Туда и обратно</option>
                <option>Обратно</option>
            </select>
        </div>


        <Button className="filters-box_number-passengers" text={`img ${1}`}/> {/*+ img 2шт*/}


        <div className="filters-box_select-div">
            img
            <select className="filters-box_select-directions">
                <option>Экономкласс</option>
                <option>Первый класс</option>
            </select>
        </div>
    </div>;
};