import React from 'react';
import {OnGoindDiv, TitleDiv, ConcluidoDiv, EmAndamentoDiv} from './styles';

function OnGoingClass() { 
    return ( 
        <OnGoindDiv>
            <TitleDiv>Exames Concluídos/Andamento</TitleDiv>
            <ConcluidoDiv>
                Concluido
            </ConcluidoDiv>
            <EmAndamentoDiv>
                Em andamento
            </EmAndamentoDiv>
        </OnGoindDiv>
    )};

export default OnGoingClass;