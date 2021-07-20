import React, { useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export default function Header() {
  const Context = useContext(UserContext);
  return (
    <Navbar className="head  text-uppercase " expand="md">
      <NavbarBrand href="/" className="text-white">
        Covid 19 tracker Dashboard
      </NavbarBrand>

      <NavbarText className="text-white">
        {Context.user?.email ? Context.user.email : ""}
      </NavbarText>

      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-1 ">
          {Context.user ? (
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                onClick={() => {
                  Context.setUser(null);
                }}
                className="text-white"
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white">
                  Signin
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}
