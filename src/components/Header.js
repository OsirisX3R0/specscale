import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobalContext';
import { ThemeIcon, ThemeButton, Heading, Logo } from './Styles';
const logo = require('../assets/logo192.png');

const Header = () => {
    const { dark, setDark, setSavedTheme } = useContext(GlobalContext);

    const updateTheme = () => {
        setSavedTheme(!dark ? 'dark' : 'light');
        setDark(!dark);
    }

    return(
        <>
            <ThemeIcon>
                <ThemeButton onClick={() => updateTheme()}>
                    <FontAwesomeIcon icon={dark ? faSun : faMoon} size="lg" />
                </ThemeButton>
            </ThemeIcon>
            <Logo src={logo} />
            <Heading>SpecScale</Heading>
        </>
    );
}

export default Header;