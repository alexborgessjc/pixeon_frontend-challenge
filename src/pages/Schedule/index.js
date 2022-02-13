import React from 'react';
import Menu from '../../components/Menu';
import {TelaDiv,AgendamentoDiv} from './styles';
import TopBar from '../../components/TopBar';
import OnGoingClass from '../../components/OnGoingClass';
import CalendarSpace from '../../components/Calendar';
import UpComingSchedule from '../../components/UpComingSchedule';

function Schedule(){
    return(
        <TelaDiv>            
            <Menu></Menu>                      
            <AgendamentoDiv>                
                <TopBar>
                </TopBar>   
                <OnGoingClass>
                </OnGoingClass> 
                <CalendarSpace>
                </CalendarSpace>    
                <UpComingSchedule>
                </UpComingSchedule>                        
            </AgendamentoDiv>              
        </TelaDiv>
    );
}

export default Schedule;