import React from 'react';
import { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {CalendarDiv,TextDiv, ContentDiv, DateDiv, GraphDiv } from './styles';

function CalendarSpace() { 
    const [date, setDate] = useState(new Date());

    const onChange = date =>{
        setDate(date);
    }

    console.log(date);

    return ( 
        <CalendarDiv>
            <TextDiv>Calendário</TextDiv>
            <ContentDiv>
                <DateDiv><Calendar defaultView="month" onChange={onChange} value={date}/></DateDiv>
                <GraphDiv>Gráfico</GraphDiv>
            </ContentDiv>
        </CalendarDiv>
    )};

export default CalendarSpace;