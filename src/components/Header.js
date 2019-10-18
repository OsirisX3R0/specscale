import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {    
    return(
        <Navbar color="success" dark>
            <NavbarBrand href="/">SpecScale</NavbarBrand>
        </Navbar>
    );
}

export default Header;