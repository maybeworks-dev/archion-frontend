import React from "react";
import Link from "gatsby-link";

import './style.css';

const Footer = () => (
    <footer className="footer">
        <div className="container container-inner">
            <div className="footer-flex">
                <div className="footer__flex__item">
                    <p className="footer__copyright">© 2018 SimpleHealthyNews</p>
                </div>
                <div className="footer__flex__item">
                    <p className="footer__copyright-credits">
                        <a href="/" rel="nofollow noopener" target="_blank">Privacy</a> |
                        <a href="/" rel="nofollow noopener" target="_blank">Terms</a> |
                        <a href="/" rel="nofollow noopener" target="_blank">Advertising</a> |
                        <a href="/" rel="nofollow noopener" target="_blank">Contact</a> |
                        <a href="/" rel="nofollow noopener" target="_blank">What We Believe</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;