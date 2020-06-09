import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddTodo from "./pages/AddTodo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/add-todo" component={AddTodo} />
      </Switch>
    </div>
  );
}

export default App;
