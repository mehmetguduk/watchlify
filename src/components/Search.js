import React from "react"
import getSearch from "../utils/getSearch";

export default function Search({ myList, setMyList }) {

    const [searchValue, setSearchValue] = React.useState("");
    const [searchElements, setSearchElements] = React.useState([]);
    const [searchResponse, setSearchResponse] = React.useState([]);

    function handleSearch() {
        getSearch(searchValue).then(response => {
            setSearchResponse(response)
            setSearchElements(response.map(show => {
                return (
                    <li id={show.show.id} key={show.show.id} onClick={handleShowClick}>
                        {show.show.name}
                    </li>
                )
            }))
        })
    }

    function handleShowClick(event) {
        // IN THIS LINE searchResponse RETURNING ME AN EMPTY ARRAY. WHY?
        // I CAN'T GET THE LASTEST UPDATE OF searchResponse IN THIS FUNCTION.
        const element = searchResponse.filter(show => {
            return (show.show.id === Number(event.target.id))
        })[0]
        // OUTPUT : []
        console.log(element)
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
            <button
                onClick={handleSearch}
            >Search</button>

            <ul className="show-results">
                {searchElements}
            </ul>
        </div>
    )
}