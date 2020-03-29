import React, { createContext, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`    
    body {
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.dark ? '#bbb' : '#999'};
        background-color: ${props => props.dark ? '#333' : '#f5f5f5'};
    }

    button, input {
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.dark ? '#bbb' : '#999'};        
    }
`;

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
    return (
        <GlobalContext.Provider value={{
            dark,
            setDark
        }}>
            <GlobalStyle dark={dark}/>
            {children}
        </GlobalContext.Provider>
    )
}