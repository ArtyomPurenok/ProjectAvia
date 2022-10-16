import React from "react";
import './HomePage.scss';

import { Header } from "../../components/Header/Header";



export const HomePage = () => {
    fetch('https://autocomplete.travelpayouts.com/places2?locale=en&types[]=airport&types[]=city&term=минск')
        .then((response) => response.json());
        // .then((data) => {console.log(data);});

    return <div>
        
        <Header />
    </div>;
};