import React, { useEffect, useState } from 'react';
//import { useState } from 'react';
import axios from "axios";
import {Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent} from '@syncfusion/ej2-react-schedule';
import {CalendarDiv,TextDiv, ContentDiv, DateDiv, GraphDiv } from './styles';

function CalendarSpace() { 
    //const [date, setDate] = useState(new Date());

    //const onChange = date =>{
        //setDate(date);
    //}    

    const [evento, setEvento] = useState([]);

    useEffect(() => {
        async function getEvento() {
        axios
            .get(`http://localhost:3333/dataSource`)
            .then((resp) => setEvento(resp.data))
        }
        getEvento();        
    }, []);          
        
    const novoJson2 = [];

    evento.map((obj)=>(
        novoJson2.push({"StartTime":new Date(obj.StartTime),"EndTime":new Date(obj.EndTime)})        
    ))      
                    
    return ( 
        <CalendarDiv>
            <TextDiv>Calendário</TextDiv>
            <ContentDiv>
                <DateDiv>
                    <ScheduleComponent height='340px' currentView='Month' selectedDate={new Date()} eventSettings={{ dataSource: novoJson2 } }>
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
                    </ScheduleComponent>
                </DateDiv>
                <GraphDiv>Gráfico</GraphDiv>
            </ContentDiv>
        </CalendarDiv>
    )};

export default CalendarSpace;