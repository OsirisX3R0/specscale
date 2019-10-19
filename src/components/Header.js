import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

const Header = () => {    
    return(
        <Navbar color="success" className="mb-4" dark>
            <Container>
                <NavbarBrand href="/">SpecScale</NavbarBrand>
                <div className="text-right text-light">Get your styles right!</div>
            </Container>
        </Navbar>
    );
}

export default Header;