import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { addchildren, removechildren } from "../actions/childrenaction";

class Children extends React.Component {
  state = { children: 0, childrenplus: 1, childrenminus: 0 };

  componentDidMount() {
    const { children, childrenplus, childrenminus } = this.props.status;
    this.setState({ children, childrenplus, childrenminus });
  }
  componentDidUpdate(props) {
    if (!_.isEqual(this.props, props)) {
      const { children, childrenplus, childrenminus } = this.props.status;
      this.setState({ children, childrenplus, childrenminus });
    }
  }

  render() {
    return (
      <div className="item" style={{ padding: "15px" }}>
        <div className="right floated content">
          <button
            onClick={() => this.props.removechildren()}
            className="btn"
            disabled={this.state.childrenminus ? null : "disabled"}
          >
            <i className="fas fa-minus-circle"></i>
          </button>

          <button className="btn btn1">{this.state.children}</button>
          <button
            onClick={() => this.props.addchildren()}
            className="btn"
            disabled={this.state.childrenplus ? null : "disabled"}
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
        <div className="content">
          <i className="fas fa-child" style={{ marginRight: "10px" }}></i>
          <span style={{ marginRight: "10px" }}>{" CHILDREN"}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { status: state.status };
};
export default connect(mapStateToProps, { addchildren, removechildren })(
  Children
);
