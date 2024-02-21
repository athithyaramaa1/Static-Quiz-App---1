import { Component } from "react";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import './App.css';
import Result from "./Components/Result";

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Quiz />
        <Result />
      </div>
    );
  };
}
