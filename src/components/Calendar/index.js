import React, { useEffect, useState } from 'react';
//import { useState } from 'react';
import axios from "axios";
import {Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent, ResourcesDirective, ResourceDirective} from '@syncfusion/ej2-react-schedule';
import {CalendarDiv,TextDiv, ContentDiv, DateDiv, GraphDiv } from './styles';

function CalendarSpace() { 
    const [date, setDate] = useState(new Date());

    function addItem(data) {
        console.log("teste");
    }

    //const onChange = date =>{
        //setDate(date);
   // }    

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
            "title": obj.title,
            "field": obj.field,
            "idField": obj.idField,
            "name": obj.name,
            "textField": obj.textField,  
            "StartTime":new Date(obj.StartTime),
            "EndTime":new Date(obj.EndTime),
            "color":obj.color
        })        
    ))          
        
    return ( 
        <CalendarDiv>
            <TextDiv>Calendário</TextDiv>
            <ContentDiv>
                <DateDiv>
                    <ScheduleComponent height='340px' currentView='Month' 
                        eventSettings={{ dataSource: novoJson}} 
                        selectedDate={new Date()}
                    >                        
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>   
                        <ResourcesDirective>
                                <ResourceDirective
                                    field='4'  name='name' allowMultiple={true}
                                   dataSource={novoJson}  colorField='color' textField='textField'
                                >
                                </ResourceDirective>                                
                            </ResourcesDirective>                     
                    </ScheduleComponent>
                </DateDiv>
                <GraphDiv>Gráfico</GraphDiv>
            </ContentDiv>
        </CalendarDiv>
    )};

export default CalendarSpace;