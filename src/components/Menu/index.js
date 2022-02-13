import React from 'react';
import Logo from '../../assets/image/logo.png';
//import { Link } from 'react-router-dom';
import {IoMdAnalytics} from "react-icons/io";
import {AiOutlineCalendar} from "react-icons/ai";
import { TextTodos, TextAgendamento, TodosDiv, AgendamentoDiv, LogoItem, ListItem, CalendarItem, ActivityItem,MenuDiv} from './styles';

function Menu() { 
  return (                  
        <MenuDiv>
            <LogoItem src={Logo} width="239px" height="86" alt="Logo Solar Energy"/>  
            <ListItem>
              <AgendamentoDiv>                           
                  <TextAgendamento>Agendamento</TextAgendamento>
                  <CalendarItem>
                    <AiOutlineCalendar size= "24.32px"/>
                  </CalendarItem>                                  
              </AgendamentoDiv> 
              <TodosDiv>
                  <TextTodos>Todos os Agendamentos</TextTodos>
                  <ActivityItem>
                    <IoMdAnalytics size= "24.32px"/>
                  </ActivityItem>                  
                </TodosDiv>                                     
            </ListItem>     
        </MenuDiv>       
  );
}

export default Menu;