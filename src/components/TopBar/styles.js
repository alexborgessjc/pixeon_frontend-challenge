import styled from 'styled-components';
import '../../assets/css/fonts.css';

export const TopBarDiv = styled.div`
    position: absolute;
    width: 1575px;
    height: 120px;
    left: 345px;
    top: 0px;
    background-color: white;
`;

export const AgendamentoDiv = styled.div`
    position: absolute;
    width: 269px;
    height: 54px;
    left: 100px;
    top: 33px;
    /* Heading/Heading 1 */
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    /* identical to box height */
    /* Color/Black */
    color: #374557;
`;

export const SearchBar = styled.div`    
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 32px 2px 24px;
    position: absolute;
    width: 513px;
    height: 60px;
    left: 500px;
    top: 30px;    
    background: #FAFAFA;
    border-radius: 16px;    
`;

export const WriteDiv = styled.div`
    /* Digite para pesquisar... */
    position: static;
    left: 12.48%;
    right: 47.56%;
    top: 27.5%;
    bottom: 27.5%;    
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;    
    color: #A098AE;    
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;        
`;

export const ZoomDiv = styled.div`    
    position: static;
    width: 32px;
    height: 32px;
    left: 24px;
    top: 14px;    
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px;
    svg{
        position: absolute;
        left: 8.5%;
        right: 12.5%;
        top: 30.5%;
        bottom: 12.5%;        
        color: #4CBC9A;
    }
`;

export const MenuDiv = styled.div`
    position: absolute;
    width: 280px;
    height: 60px;
    left: 600px;
    top: 0px;    
`; 

export const ChatDiv = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 0px;
    top: 20px;
`;

export const BellDiv = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 60px;
    top: 20px;    
`;

export const SettingsDiv = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 120px;
    top: 20px;
`;

export const PlaceholderDiv = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 180px;
    top: 0px;
    background: #DBDBDB;
    border-radius: 16px;
`;
