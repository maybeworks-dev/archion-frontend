import React from "react";
import Link from "gatsby-link"

import './style.css';

const WidgetDrip = () => (
    <div className="widget widget-drip">
        <form>
            <h3 data-drip-attribute="headline">Here's To Your Health</h3>
            <div data-drip-attribute="description" className="description">We're reporting in on the latest in medical
                research, insurance coverage, plus managing your health and the health of the people you love. Coming to
                your inbox once a week!
            </div>
            <div>
                <input type="email" id="drip-email" name="fields[email]" value="" placeholder="What's your email?"/>
                <input type="submit" name="submit" value="SUBSCRIBE" data-drip-attribute="sign-up-button"/>
            </div>
            <p>By subscribing, you agree to <a href="/">SHN's terms of use</a> and <a href="/">privacy policy</a>.</p>
        </form>
    </div>
)

export default WidgetDrip;