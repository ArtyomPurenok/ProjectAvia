import React, { useState } from "react";
import { useSelector } from "react-redux";
import './SearchBox.scss';

import { InputsBox } from "./InputsBox";
import { FiltersBox } from "./FiltersBox";
import { Button } from "../../../components/Button";
// import { Loader } from "../../../components/Loader/Loader";


export const SearchBox = ({ renderTicket }: any) => {
    const dataForSearchReducer = useSelector((state: any) => state.dataTicketSearch);
    const [loaderActive, setloaderActive] = useState(false);


    // async function getTicket() {

    //     try {
    //         setloaderActive(true);

    //         const url = `https://api.tequila.kiwi.com/v2/search?fly_from=${dataForSearchReducer.inputFromIATA}&fly_to=${dataForSearchReducer.inputToIATA}&dateFrom=${dataForSearchReducer.calendarStart}&date_to=${dataForSearchReducer.calendarFinish}&adults=${dataForSearchReducer.adults}&children=${dataForSearchReducer.children}&infants=${dataForSearchReducer.infants}&selected_cabins=${dataForSearchReducer.flightClass}&flight_type=oneway&limit=10`;
    //         const options = {
    //             headers: {
    //                 'accept': 'application/json',
    //                 'apikey': 'ftlmCHIrWRvayIj867aXpbi5q6D5q5hR',
    //             },
    //         };
    //         const response = await fetch(url, options);
    //         const responseFormat = await (response).json();
    //         console.log(await responseFormat);



    //         if (response.ok) {
    //             renderTicket(responseFormat, true);
    //             setloaderActive(false);
    //         }
    //     } catch (error) {
    //         return console.log(error);
    //     }
    // };

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

            {/* <Button text='Поиск билета' className="search-box_button" onClick={getTicket} /> */}
        </div>
    </div>;
};