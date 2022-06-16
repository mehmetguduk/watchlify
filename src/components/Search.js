import React from "react"
import getSearch from "../utils/getSearch";

export default function Search({ myList, setMyList }) {


    const [searchValue, setSearchValue] = React.useState("");
    const [searchResponse, setSearchResponse] = React.useState([]);

    function handleSearch() {
        getSearch(searchValue).then(response => {
            setSearchResponse(response)
        })
    }

    function handleShowClick(event) {
        const showId = Number(event.target.id);
        const show = searchResponse.find(show => show.show.id === showId);
        setMyList(prevMyList => {

            console.log(prevMyList) // [{show: {id: 1, name: "test"}, ...}]
            console.log(show) // {show: {id: 1, name: "test"}}
            console.log(prevMyList.includes(show)) // false

            if (prevMyList.includes(show)) {
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