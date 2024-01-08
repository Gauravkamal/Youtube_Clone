import React from "react";
import './SearchList.css'
import { FaSearch } from "react-icons/fa";

export function SearchList({ searchItems, setQuery, setview }) {


    return (
        <>
            <div className="container-searchlist">
                {searchItems.map((m) => {
                    return (
                        <p className="item-searchlist" onClick={(e => { setQuery(m); setview(null); })} >
                            {/* key={m} */}

                            <FaSearch className="magnify-icon" />
                            <div className="font-items">
                                {m}
                            </div>
                        </p>)
                })}
            </div>
        </>
    )
}