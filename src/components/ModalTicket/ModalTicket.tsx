import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../Button';
import { Calendar } from '../Calendar/Calendar';
import { QuickTicket } from '../QuickTicket/QuickTicket';
import { Wrapper, Container, Border, ContainerTicket } from './ModalTicket.styled';
export const ModalTicket = ({ acvive, setActive }: any) => {

    const { calendarStart, calendarFinish } = useSelector((state: any) => state.dataTicketSearch);

    const [ticket, setTicket]: any = useState();

    const getTicket = async () => {
        const url = `https://api.tequila.kiwi.com/v2/search?fly_from=MIL&&dateFrom=${calendarStart}&dateTo=${calendarFinish}`;
        const options = {
            headers: {
                'accept': 'application/json',
                'apikey': 'ftlmCHIrWRvayIj867aXpbi5q6D5q5hR',
            },
        };
        const response = await fetch(url, options);
        const responseFormat = await (response).json();
        setTicket(responseFormat);
        ticket.data.map((oneTicket: any, index: any) => { return console.log(oneTicket); });
    };


    if (!acvive) return null;

    return (
        <Wrapper onClick={() => setActive(!acvive)}>
            <Container onClick={e => e.stopPropagation()}>
                <Border>
                    {/*                     
Вот тут нужно вставить твой компонет у меня не получается!!!!!!!!
                    <InputIATA placeholder='Enter country' onChange={getData} value={valueInputIATA} />
                     */}
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
