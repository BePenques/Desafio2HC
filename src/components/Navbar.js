import React, { useState }from 'react';
import { Link } from "react-router-dom";
import './styles.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand><Link id="link-clients" on to="/" className="link">GamaStore</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link id="link-clients" on to="/clientes" className="link">Clientes</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link id="link-produts" on to="/produtos" className="link">Produtos</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }

export default Header;