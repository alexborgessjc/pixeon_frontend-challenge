import React, { useEffect, useState } from 'react';
//import { useState } from 'react';
import axios from "axios";
import {Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent,ResourcesDirective,ResourceDirective} from '@syncfusion/ej2-react-schedule';
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
        
    const novoJson = [];

    evento.map((obj)=>(
        novoJson.push({
            "id":obj.id,
            "StartTime":new Date(obj.StartTime),
            "EndTime":new Date(obj.EndTime),
            "color":obj.color
        })        
    ))        

    console.log(novoJson);
                            
    return ( 
        <CalendarDiv>
            <TextDiv>Calendário</TextDiv>
            <ContentDiv>
                <DateDiv>
                    <ScheduleComponent height='340px' currentView='Month' 
                        eventSettings={{ dataSource: novoJson, resourceColorField: novoJson }} group={{ dataSource: novoJson }}
                        selectedDate={new Date()} eventSettings={{ dataSource: novoJson } 
                    }>
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>   
                        <ResourcesDirective>
                                <ResourceDirective
                                    field='OwnerId' title='Owner' name='Owners'
                                    dataSource={novoJson} colorField='color'>
                                </ResourceDirective>
                            </ResourcesDirective>                     
                    </ScheduleComponent>
                </DateDiv>
                <GraphDiv>Gráfico</GraphDiv>
            </ContentDiv>
        </CalendarDiv>
    )};

export default CalendarSpace;