import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css';
import Header from "../components/header";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children, data }) => (
    <div className="container-outer" style={{maxWidth: 1080}}>
        <header>
            <Header/>
            <NavBar/>
        </header>
        <div className="wrapper clearfix">
            {children()}
        </div>
        <Footer/>
    </div>
)


export default Layout;