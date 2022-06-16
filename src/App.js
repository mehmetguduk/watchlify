import MyShows from "./components/MyShows";
import Search from "./components/Search";
import React from 'react'
import './style.scss'

function App() {
    const [currentTab, setCurrentTab] = React.useState("Search");
    const [myList, setMyList] = React.useState([]);

    const myListElements = myList.map(show => {
        return (<h5>{show.show.name}</h5>)
    })

    return (
        <div className="App">

            <nav>
                <span onClick={() => { setCurrentTab("MyShows") }}>MyShows</span>
                <span onClick={() => { setCurrentTab("Search") }}>Search</span>
            </nav>

            {currentTab === "MyShows" ?
                <MyShows myList={myList} setMyList={setMyList} />
                :
                <Search myList={myList} setMyList={setMyList} />
            }

            {myListElements}
        </div>
    );
}

export default App;
