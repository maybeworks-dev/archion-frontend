import React, { Component } from 'react'
import Link from 'gatsby-link'

import './style.css';

class NavBar extends Component {

    constructor(props) {
        super(props)
    }


    checkSlug (nav) {
        let slug = document.URL.split('/')[3]
        return slug === nav && document.URL.split('/').length === 4
    }


     toogleNav (event) {
       let elems = document.getElementsByClassName('menu');
       for (let i = 0; i < elems.length; i++) {
           if (elems[i].classList.contains('menu-closed') || !elems[i].classList.contains('menu-open')) {
               elems[i].classList.remove("menu-closed")
               elems[i].classList.add("menu-open")
           } else {
               elems[i].classList.add("menu-closed")
               elems[i].classList.remove("menu-open")
           }
       }
         event.preventDefault();
    }

    render() {
        return (
            <div>
                <a href="#" className="menu-toggle" aria-hidden="true" onClick={(e) => this.toogleNav(e)} style={{textDecoration: 'none'}}>Menu</a>

                <nav className="menu" style={{}}>

                    <ul style={{
                        margin: '0',
                        padding: '0',
                        width: '100%',
                        display: 'inline-block',
                        listStyle: 'none',
                        height: '38px'
                    }}>
                        <li className="menu-item">
                            <Link to="/" className="menu-link">ARTHRITIS</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link">BACK PAIN</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link">DIABETES</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/gut-health" className={(this.checkSlug('gut-health')) ? 'menu-link nav-active' : 'menu-link'}>GUT HEALTH</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/high-blood-pressure" className={(this.checkSlug('high-blood-pressure')) ? 'menu-link nav-active' : 'menu-link'}>HIGH BLOOD PRESSURE</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link">OBESITY</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link">TOOLS</Link>
                        </li>
                    </ul>

                </nav>

            </div>
        )
    }


}

export default NavBar;