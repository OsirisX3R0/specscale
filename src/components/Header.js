import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

const Header = () => {    
    return(
        <Navbar color="success" className="mb-4" dark>
            <Container>
                <NavbarBrand href="/">SpecScale</NavbarBrand>
            </Container>
        </Navbar>
    );
}

export default Header;