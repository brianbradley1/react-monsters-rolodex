import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

// render order
//---------------
// 1. constructor (initialise state)
// 2. function render to render initial component UI
// 3. useEffect to make API calls and updates state
// 4. Once state updates, render called again
function App() {
  const [monsters, setMonster] = useState([]);
  let [searchField, setSearchField] = useState("");

  useEffect(() => {
    // only want this to be called on initial load
    //if (monsters.length === 0) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
    //}
  }, []);

  //async function updateFilter() {
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });
  //}

  const onSearchChange = (event) => {
    searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className="App">
      <SearchBox
        onChangeHandler={onSearchChange}
        className="search-box"
        placeholder="search monsters"
      />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
}

export default App;
