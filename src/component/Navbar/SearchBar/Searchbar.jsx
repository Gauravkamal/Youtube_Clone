import React, { useState } from "react";
import './SearchBar.css'
import { FaSearch } from "react-icons/fa";
import { AiFillAudio } from "react-icons/ai";
import { SearchList } from "./SearchList";
export function Searchbar() {
    const [searchQuery, setQuery] = useState("");
    const [view, setview] = useState("view")

    // const searchvalue = ""
    const searchItems = ["raju ", "arijit", "songs", "Gta video", "movies Trailer", "sonu Vlog"].filter(q => q.toUpperCase().includes(searchQuery.toUpperCase()));


    return (
        <>
            <div className="SearchBar-Container">
                <div className="SearchBar-Container2">
                    <div className="search-bar2">
                        <div className="Search-div">
                            <input type="text" onChange={(e) => { setQuery(e.target.value); setview(e.target.value) }} className="iBox-SearchBar" defaultValue={"Search"} value={searchQuery} />
                            <FaSearch className="searchIcon-SearchBar" />
                            {(searchQuery && view) ? <SearchList searchItems={searchItems} setQuery={setQuery} setview={setview} /> : <></>}
                            <AiFillAudio className="micIcon-searchbar" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}