import React from 'react';
import {Container,From,To,Data,Cost,Wrapper,WrapperCity} from './QuickTicket.styled';
export const QuickTicket = (ticket) => {
    const {cityFrom,cityTo,price,local_arrival}= ticket.ticket;
  return (
  <Container>
    <WrapperCity>
      <From>{cityFrom}</From>
      <To>{cityTo}</To>
    </WrapperCity>
    <Wrapper>
      <Data> {local_arrival.substring(0, 10)}</Data>
      <Cost>{price}$</Cost>
    </Wrapper>
   </Container>
  );
};
