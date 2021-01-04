import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle

} from 'reactstrap';
import './style.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container">
      <Navbar 
        light expand="md">
        <NavbarBrand href="/" style={{color: 'white', textDecoration: 'none'}} active={{color: 'red', textDecoration: 'none'}}>Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/portfolio/"style={{color: 'white', textDecoration: 'none'}} activestyle={{color: 'red', textDecoration: 'none'}}>Portfolio</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color: 'white', textDecoration: 'none', justifySelf: 'right'}}>
                See More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="https://github.com/lmdodson/" target="_blank">GitHub</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://gitlab.com/lmdodson" target="_blank">GitLab</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://www.linkedin.com/in/leah-dodson-3505b8191/" >LinkedIn</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          {/*
            <NavItem>
              <NavLink href="/resume/" >Resume</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/https://www.linkedin.com/in/leah-dodson-3505b8191/" >LinkedIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://gitlab.com/lmdodson">GitLab</NavLink>
            </NavItem>
            */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;