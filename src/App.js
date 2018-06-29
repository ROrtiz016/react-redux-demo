import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addToList } from "./ducks/reducer";
import ChildComponent from "./components/childComponent/ChildComponent";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./components/button/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
  }
  handleKeypress = event => {
    if (event.key === "Enter" && this.state.userInput) {
      // submit userinput to redux
      // clear user input
      this.props.addToList(this.state.userInput);
      this.setState({ userInput: "" });
    }
  };
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/users"> Users </Link>
          <div className="button-container">
            <Button name="Go back" method={this.props.history.goBack} />
            <Button name="Go forward" method={this.props.history.goForward} />
          </div>
        </nav>
        {routes()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default withRouter(
  connect(
    mapStateToProps,
    { addToList }
  )(App)
);
