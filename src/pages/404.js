import React from 'react'
import Link from 'gatsby-link'

import WidgetPromo from "../components/widget-promo"
import WidgetSearch from "../components/widget-search"
import WidgetPromoArticles from "../components/widget-promo-articles"

const NotFoundPage = () => (
    <div>
        <div className="wrapper clearfix">
            <main className="main-content content">
                <div className="warning">
                    <h1>404. Page not found</h1>
                    <p>The page you were looking for appears to have been moved, deleted or does
                        not exist. Please, use search or go to <Link to="/">main page</Link>.</p>
                </div>
            </main>
            <aside className="sidebar">
                <WidgetPromo/>

                <WidgetSearch/>

                <WidgetPromoArticles/>
            </aside>
        </div>
    </div>
)

export default NotFoundPage
