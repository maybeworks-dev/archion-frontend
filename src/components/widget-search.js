import React from "react";

const WidgetSearch = () => (
    <div className="widget-search widget">
        <form className="widget-search-form">
            <label>
                <span className="screen-reader-text">Search for:</span>
                <input className="widget-search-field" placeholder="SEARCH"/>
            </label>
        </form>
    </div>
)

export default WidgetSearch;