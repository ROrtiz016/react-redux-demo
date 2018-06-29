import React from "react";
import { connect } from "react-redux";
import { addToList } from "../../ducks/reducer";
import "./childComponent.css";

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }
  handleKeypress = event => {
    if (event.key === "Enter" && this.state.userInput) {
      this.props.addToList(this.state.userInput);
    }
  };
  render() {
    return (
      <div className="child-component">
        child component props: <code> {JSON.stringify(this.props)}</code>
        <br />
        <input
          type="text"
          placeholder="add to list"
          onKeyUp={this.handleKeypress}
          value={this.state.userInput}
          onChange={event => this.setState({ userInput: event.target.value })}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { item, list } = state;
  let newObj = {
    item: item,
    list: list
  };
  return newObj;
}

export default connect(
  mapStateToProps,
  { addToList }
)(ChildComponent);
