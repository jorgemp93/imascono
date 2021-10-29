import React, { useState } from "react";
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
  NavbarText,
} from "reactstrap";

const NavbarNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="sm">
        <NavbarBrand href="/" className="me-auto">
          Imascono
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="ms-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               Empleado
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Jorge Moscoso Pérez</DropdownItem>
                <DropdownItem>Elegir</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               Fecha
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Octubre-Enero</DropdownItem>
                <DropdownItem>Elegir</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
          </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://www.google.com">Borrar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.google.com">Compartir</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.google.com">Volver</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarNav;