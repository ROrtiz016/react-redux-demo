import React from "react";
import { connect } from "react-redux";
import "./users.css";
import { addToProps } from "../../ducks/reducer";

class Users extends React.Component {
  render() {
    return (
      <div className="users-component">
        <h2> users component</h2>
        <code>{JSON.stringify(this.props)} </code>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  {}
)(Users);
