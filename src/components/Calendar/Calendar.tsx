import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { calendarStart, calendarFinish } from '../../redux/reducer/dataSearchAviaTicketReducer';
import { StyleDatePicker } from './Calendar.style';
type CalendarProp = {
  range: boolean;
}
export const Calendar = ({ range }: CalendarProp) => {

  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChangeRange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    dispatch(calendarStart(startDate.getDate() + '%2F' + (startDate.getMonth() + 1) + '%2F' + startDate.getFullYear()));
    dispatch(calendarFinish(end.getDate() + '%2F' + (end.getMonth() + 1) + '%2F' + end.getFullYear()));
  };
  const onChangeOne = (date: any) => {
    setStartDate(date);
    dispatch(calendarStart(date.getDate() + '%2F' + (date.getMonth() + 1) + '%2F' + date.getFullYear()));
  };
  return (<StyleDatePicker>
    {!range ?
      <DatePicker
        selected={startDate}
        onChange={onChangeOne}
        startDate={startDate}
        minDate={new Date()}
        dateFormat="dd.MM.yyyy"
        placeholderText="Choose data"
      /> :
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={onChangeRange}
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        selectsRange
        isClearable={true}
        placeholderText="Choose data range"
      />}
  </StyleDatePicker>);

};

