import React from "react";
import './SearchBox.scss';

import { InputsBox } from "./components/InputsBox";
import { FiltersBox } from "./components/FiltersBox";
import { Button } from "../Button";


export const SearchBox = () => {
    return <div className="search-box">
        <div className="search-box_ticket-search">

            <FiltersBox/>     {/* <div className="search-box_setting-filters">setting filters</div> */}

            <InputsBox/>

            <Button text="Найти билет" className="search-box_button"/>
        </div>
    </div>;
};