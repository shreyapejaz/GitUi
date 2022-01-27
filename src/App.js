import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";
import Board from "./Board";
import { useState } from "react";
import Followers from "./Followers";
import Repos from "./Repos";
import CardDetail from "./CardDetail";


function App() {
  const [inputVal, setInput] = useState("");
  const getInput = (data) => {
    setInput(data);
  };
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Search inputVal={getInput} />} />
          <Route path="/results" element={<Board data={inputVal} />} />
          <Route
            path="/results/repo/:userName/:repoId"
            element={<CardDetail />}
          />
          <Route
            path="/results/followers/:urlFollowers"
            element={<Followers />}
          />
          <Route path="follower/:userName/repos" element={<Repos />} />
          <Route path="*" element={<Search inputVal={getInput} />} />
        </Routes>
      </div>
  );
}

export default App;
