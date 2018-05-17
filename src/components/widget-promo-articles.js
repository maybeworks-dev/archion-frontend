import React from "react";
import Link from "gatsby-link";

const WidgetPromoArticles = () => (
    <div className="widget-promo-articles widget">
        <h4 className="widget-title">You May Also Like...</h4>
        <div>
            <ul style={{listStyle: 'none', marginLeft: '10px'}}>
                <li style={{fontSize: '17px'}}>
                    <Link to="/" className="promo-articles-widget-link">
                        <img
                            src="https://d33wubrfki0l68.cloudfront.net/0a3d1649dc7de3d10552c45dad61cbd5ab3ce102/791e4/img/100x75.png"
                            alt="" height="" width="" className="promo-articles-widget__img"/>

                        <p className="promo-articles-widget-title ml10">The #1 Worst Exercise For Aging. You Must
                            Avoid This...</p>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
)

export default WidgetPromoArticles;