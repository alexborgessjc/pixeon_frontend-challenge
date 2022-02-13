import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import {BsFillChatLeftTextFill} from "react-icons/bs";
import {IoMdNotifications, IoMdSettings} from "react-icons/io";

import { PlaceholderDiv,SettingsDiv, BellDiv, ChatDiv,MenuDiv, TopBarDiv, AgendamentoDiv, SearchBar, WriteDiv, ZoomDiv} from './styles';

function TopBar() { 
    return ( 
        <TopBarDiv>
            <AgendamentoDiv>Agendamento</AgendamentoDiv>
            <SearchBar>
                <ZoomDiv><AiOutlineSearch size= "24"/></ZoomDiv>  
                <WriteDiv>Digite para Pesquisar</WriteDiv>   
                <MenuDiv>
                    <ChatDiv>
                        <BsFillChatLeftTextFill size="32px"/>
                    </ChatDiv>
                    <BellDiv>
                        <IoMdNotifications size="32px"/>
                    </BellDiv>
                    <SettingsDiv>
                        <IoMdSettings size="32px"/>
                    </SettingsDiv>
                    <PlaceholderDiv>
                    </PlaceholderDiv>
                </MenuDiv>                              
            </SearchBar>
        </TopBarDiv>        
    )};

export default TopBar;