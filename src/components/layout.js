import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import tachyons from "tachyons";

const Layout = ({ children }) => (
    <>
        <Nav/>
        <main>{ children }</main>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;