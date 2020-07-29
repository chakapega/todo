import React from "react";
import ReactDom from "react-dom";

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build awesome app</li>
    </ul>
  );
};
const AppHeader = () => <h1>Hello world</h1>;
const SearchPanel = () => <input placeholder="search"></input>;
const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
