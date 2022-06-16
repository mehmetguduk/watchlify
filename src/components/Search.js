import React from "react"
import getSearch from "../utils/getSearch";

export default function Search({ myList, setMyList }) {


    const [searchValue, setSearchValue] = React.useState("");
    const [searchResponse, setSearchResponse] = React.useState([]);

    function handleSearch() {
        getSearch(searchValue).then(response => {
            setSearchResponse(response)
        })
        // NEXT DAY'S NOTE :
        // CHANGE THIS. DON'T IMEDIATELY SET OBJECT IN STATE
        // CREATE AN ARRAY AND SET IT TO STATE WITH THE DATA VARIABLES YOU CAN USE IN THE PROJECT
        // THEN FIX HANDLESHOWCLICK'S IF STATEMENT
    }

    function handleShowClick(event) {
        const showId = Number(event.target.id);
        const show = searchResponse.find(show => show.show.id === showId);

        setMyList(prevMyList => {
            if (false) {
                return prevMyList.filter(show => show.show.id !== showId)
            }
            else {
                return [...prevMyList, show]
            }
        });
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a show"
                name="show-search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
            />
            <button onClick={handleSearch}>Search</button>

            <ul className="show-results">
                {searchResponse.map(show => {
                    if (myList.includes(show)) {
                        return (
                            <li id={show.show.id} key={show.show.id} onClick={handleShowClick} style={{ color: "#FF4500" }}>
                                {show.show.name}
                            </li>
                        )
                    }
                    else {

                        return (
                            <li id={show.show.id} key={show.show.id} onClick={handleShowClick}>
                                {show.show.name}
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}