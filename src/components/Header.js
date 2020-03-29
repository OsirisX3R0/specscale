import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobalContext';
import { ThemeIcon, ThemeButton, Heading, Logo } from './Styles';

const Header = () => {
    const { dark, setDark } = useContext(GlobalContext);

    return(
        <>
            <ThemeIcon>
                <ThemeButton onClick={() => setDark(!dark)}>
                    <FontAwesomeIcon icon={dark ? faSun : faMoon} />
                </ThemeButton>
            </ThemeIcon>
            <Logo src="logo192.png" />
            <Heading>SpecScale</Heading>
        </>
        // <Navbar color="success" className="mb-4" dark>
        //     <Container>
        //         <NavbarBrand href="/">SpecScale</NavbarBrand>
        //         <div className="text-right text-light">Get your styles right!</div>
        //     </Container>
        // </Navbar>
    );
}

export default Header;