import React from 'react';
import {UpComingDiv, ExamesDiv, TitleDiv, VisualizarDiv} from './styles';

function UpComingSchedule() { 
    return ( 
        <UpComingDiv>            
            <TitleDiv>Lista de Agendamentos</TitleDiv>
            <VisualizarDiv>Visualizar Todos &gt;</VisualizarDiv>            
            <ExamesDiv>
                Exames
            </ExamesDiv>
        </UpComingDiv>
    )};

export default UpComingSchedule;