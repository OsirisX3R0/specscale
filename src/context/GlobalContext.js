import React, { createContext, useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';

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
    const [savedTheme, setSavedTheme] = useLocalStorage('theme');

    useEffect(() => {
        setDark(savedTheme === 'dark')
    }, [savedTheme])

    return (
        <GlobalContext.Provider value={{
            dark,
            setDark,
            savedTheme, 
            setSavedTheme
        }}>
            <GlobalStyle dark={dark}/>
            {children}
        </GlobalContext.Provider>
    )
}