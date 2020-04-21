import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

const NavBar = styled.nav.attrs({
    className: "mt3 ml4 pa3 pa4-ns avenir"
})``

const NavBtn = styled.p.attrs({
    className: "link dim gray f3-ns dib mr5",
})``

const Nav = () => (
    <NavBar>
        <Link to="/"><NavBtn>Blogs</NavBtn></Link>
        <Link to="/about"><NavBtn>About</NavBtn></Link>
    </NavBar>
)

export default Nav;