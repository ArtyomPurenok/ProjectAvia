import React from "react";
import './SearchBox.scss';

import { InputsBox } from "./InputsBox";
import { FiltersBox } from "./FiltersBox";
import { Button } from "../Button";


export const SearchBox = () => {
    return <div className="search-box">
        <div className="search-box_ticket-search">

            <FiltersBox/>

            <InputsBox/>

            <Button text="Найти билет" className="search-box_button"/>
        </div>
    </div>;
};