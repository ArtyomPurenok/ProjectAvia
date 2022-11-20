import React, { useState } from "react";
import { useSelector } from "react-redux";
import './SearchBox.scss';

import { InputsBox } from "./InputsBox";
import { FiltersBox } from "./FiltersBox";
import { Button } from "../../../components/Button";
// import { Loader } from "../../../components/Loader/Loader";


export const SearchBox = () => {
    const dataForSearchReducer = useSelector((state: any) => state.dataTicketSearch);

    //show
    const [filter, setFilter] = useState(false);
    const [activeButton, setActiveButton] = useState('--openSearch');

    const openSearch = () => {
        setFilter(false);
        setActiveButton('--openSearch');
    };
    const openFilter = () => {
        setFilter(true);
        setActiveButton('--openFilter');
    };




    return <div className="search-box">
        <div className="search-box_ticket-search">

            <div className="search-box_switching">
                <Button onClick={openSearch} className={`search-box_switching-search search-box_switching-search${activeButton}`} text='QUICK SEARCH'/>
                <Button onClick={openFilter} className={`search-box_switching-filter search-box_switching-filter${activeButton}`} text='FULL SEARCH'/>
            </div>
            
            <div>
                <FiltersBox openFilter={filter === true ? 'active' : ''}/>
                <InputsBox />
            </div>

        </div>
    </div>;
};