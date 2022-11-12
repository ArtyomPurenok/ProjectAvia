import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './ModalTicket.scss';

import { Button } from '../Button';
import { Input } from '../Input';
import { RecommendedCountries } from "../../Pages/HomePage/SearchBox/InputsBox/RecommendedCountries";
import { inputRandomWaysIATA, inputRandomWaysLocation } from "../../redux/reducer/dataSearchAviaTicketReducer";
import { Calendar } from '../Calendar/Calendar';
import { QuickTicket } from '../QuickTicket/QuickTicket';
import { Wrapper, Container, Border, ContainerTicket } from './ModalTicket.styled';




export const ModalTicket = ({ active, setActive }: any) => {

    const dataForSeach = useSelector((state: any) => state.dataTicketSearch);

    const [ticket, setTicket]: any = useState();

    const getTicket = async () => {
        // console.log(calendarStart + '----->' + calendarFinish);
        
        const url = `https://api.tequila.kiwi.com/v2/search?fly_from=${dataForSeach.inputRandomWaysIATA}&&dateFrom=${dataForSeach.calendarStart}&dateTo=${dataForSeach.calendarStart}`;
        const options = {
            headers: {
                'accept': 'application/json',
                'apikey': 'ftlmCHIrWRvayIj867aXpbi5q6D5q5hR',
            },
        };
        const response = await fetch(url, options);
        const responseFormat = await (response).json();
        setTicket(responseFormat);
        // ticket.data.map((oneTicket: any, index: any) => { return console.log(oneTicket); });
    };


    //Input
    const inputReducer = useSelector((state: any) => state.dataTicketSearch);
    const refInput = useRef(null);
    const [input, setInput] = useState(false);
    const [textForSeach, setTextForSeach] = useState('');

    const objValueInput = {
        reducerInputIATA: inputRandomWaysIATA,
        reducerInputLocation: inputRandomWaysLocation,
    };

    const findCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length >= 1) {
            setInput(true);
            setTextForSeach(event.target.value);
        } else { setInput(false); }
    };

    const setValueInputFrom = (el: any) => {
        el.current.value = inputReducer.inputRandomWaysLocation;
    };

    const closeInput = () => {
        setInput(false);
        setValueInputFrom(refInput);
    };

    useEffect(() => {
        setValueInputFrom(refInput);
    }, [inputReducer.inputRandomWaysLocation]);

    

    return (
        <Wrapper onClick={() => setActive(!active)}>
            <Container onClick={e => e.stopPropagation()}>
                <Border>
                    <Input className='modal-ticket_input' refInput={refInput} onChange={findCountry} defaultValue={null}  placeholder='Введите страну'/>
                    {input && <RecommendedCountries reducersObject={objValueInput} text={textForSeach} onClick={closeInput}/>}
                    {/* {<InputIATA placeholder='Enter country' onChange={getData} value={valueInputIATA} />} */}
                    <Calendar range={false} />
                    <Button onClick={getTicket} className='buttonWontToGo' text='Хочу улететь' />
                </Border>
                <ContainerTicket >
                    {ticket && ticket?.data.map((ticket: any, index: any) => (<QuickTicket key={index} ticket={ticket} />))}
                </ContainerTicket>
            </Container>

        </Wrapper >
    );
};
