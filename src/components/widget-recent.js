import React from "react"
import Link from "gatsby-link"

const WidgetRecent = () => (
    <div className="widget-recent widget">
        <h4 className="widget-title">Recommended Articles</h4>
        <div className="widget-content">
            <ul style={{listStyle: 'none'}}>
                <li className="widget-item"><a className="widget-link" href="/">
                    5 Ways to Naturally Control Your High Blood Pressure</a></li>
                <li className="widget-item"><a className="widget-link" href="/">Advertising Disclosure</a>
                </li>
                <li className="widget-item"><a className="widget-link" href="/">Contact Us</a></li>
            </ul>
        </div>
    </div>
)

export default WidgetRecent;