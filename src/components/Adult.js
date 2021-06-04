import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { addadults, removeadults } from "../actions/adultaction";

class Adult extends React.Component {
  state = { adults: 1, adultplus: 1, adultminus: 0 };

  componentDidMount() {
    const { adults, adultplus, adultminus } = this.props.status;
    this.setState({ adults, adultplus, adultminus });
  }
  componentDidUpdate(props) {
    if (!_.isEqual(this.props, props)) {
      const { adults, adultplus, adultminus } = this.props.status;
      this.setState({ adults, adultplus, adultminus });
    }
  }

  render() {
    return (
      <div className="item" style={{ padding: "15px" }}>
        <div className="right floated content">
          <button
            onClick={() => this.props.removeadults()}
            className="btn"
            disabled={this.state.adultminus ? null : "disabled"}
          >
            <i className="fas fa-minus-circle"></i>
          </button>
          <button className="btn btn1">{this.state.adults}</button>
          <button
            onClick={() => this.props.addadults()}
            className="btn"
            disabled={this.state.adultplus ? null : "disabled"}
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
        <div className="content">
          <i className="fas fa-user" style={{ marginRight: "10px" }}></i>
          <span style={{ marginRight: "10px" }}>{" ADULTS"}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { status: state.status };
};
export default connect(mapStateToProps, { addadults, removeadults })(Adult);
