import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

const NavBar = styled.nav.attrs({
    className: "mt3 pa3 pa4-ns avenir"
})``

const NavBtn = styled.a.attrs({
    className: "link dim gray f3 dib mr4",
})``

const Nav = () => (
    <NavBar>
        <Link activeStyle={{ borderBottom: "2px solid #878787" }} to="/"><NavBtn>Home</NavBtn></Link>
        <Link activeStyle={{ borderBottom: "2px solid #878787" }} to="/about"><NavBtn>About</NavBtn></Link>
        <Link activeStyle={{ borderBottom: "2px solid #878787" }} to="/blog"><NavBtn>Blogs</NavBtn></Link>
    </NavBar>
)

export default Nav;