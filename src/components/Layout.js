import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import tachyons from "tachyons";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => (
    <>
        <Helmet>
            <meta className="application"/>
            <title>Braddy's Blog</title>
        </Helmet>
        <Nav/>
        <main>{ children }</main>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;