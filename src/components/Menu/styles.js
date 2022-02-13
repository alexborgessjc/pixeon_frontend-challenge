import styled from 'styled-components';
import '../../assets/css/fonts.css';

export const MenuDiv = styled.div`
position: absolute;
    width: 380px;
    height: 1080px;
    left: 0px;
    top: 0px;
    background: #FFFFFF; 
`;

/* Activity */
export const ActivityItem = styled.div`
    /* Activity */
    position: static;
    width: 32px;
    height: 32px;
    left: 24px;
    top: 27px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 24px;
    svg{
        color: #A098AE;
    }
`;

/* Activity */
export const CalendarItem = styled.div`
    /* calendar */
    position: static;
    width: 32px;
    height: 32px;
    left: 24px;
    top: 16px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 24px;
    svg{
        color: white;        
    }
`;

/* Text */
export const TextTodos = styled.div`   
    /* text */
    position: static;
    width: 152px;
    height: 54px;
    left: calc(50% - 152px/2 + 30px);
    top: 16px;
    /* Text/Text Medium 1 */
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* Color/Gray 1 */
    color: #A098AE;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 24px;
`;

export const TextAgendamento = styled.div`   
    position: static;
    width: 132px;
    height: 27px;
    left: calc(50% - 132px/2 + 20px);
    top: 18.5px;
    /* Text/Text Medium 1 */
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    /* Color/White */
    color: #FFFFFF;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 24px;
`;

/* List */
export const ListItem = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 252px;
    height: 158px;
    left: 46px;
    top: 178px;
`;

/* logo */
export const LogoItem = styled.img`    
    position: absolute;
    left: 2.4%;
    right: 85.16%;
    top: 1.48%;
    bottom: 90.56%;
`;

export const AgendamentoDiv = styled.div`      
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 24px;
    position: static;
    width: 252px;
    height: 56px;
    left: 0px;
    top: 0px;
    /* Color/Green */
    background: #4CBC9A;
    /* Shadow */
    box-shadow: 0px 20px 50px rgba(55, 69, 87, 0.1);
    border-radius: 20px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
`;

export const TodosDiv = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 24px;
    position: static;
    width: 252px;
    height: 86px;
    left: 0px;
    top: 72px;
    border-radius: 20px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px 0px; 
`;