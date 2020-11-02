import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./components/MainPage/Main.page";

function App() {
  return (
    <main className="App">
      <header>Noteful</header>
      <Route exact path="/" component={MainPage} />
    </main>
  );
}

export default App;
