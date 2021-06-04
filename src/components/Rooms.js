import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { addrooms, removerooms } from "../actions/roomaction";

class Rooms extends React.Component {
  state = { rooms: 1, roomsplus: 1, roomminus: 0 };

  componentDidMount() {
    const { rooms, roomsplus, roomminus } = this.props.status;
    this.setState({ rooms, roomsplus, roomminus });
  }
  componentDidUpdate(props) {
    if (!_.isEqual(this.props, props)) {
      const { rooms, roomsplus, roomminus } = this.props.status;
      this.setState({ rooms, roomsplus, roomminus });
    }
  }

  render() {
    return (
      <div className="item" style={{ padding: "15px" }}>
        <div className="right floated content">
          <button
            onClick={() => this.props.removerooms()}
            className="btn"
            disabled={this.state.roomminus ? null : "disabled"}
          >
            <i className="fas fa-minus-circle"></i>
          </button>
          <button className="btn btn1">{this.state.rooms}</button>
          <button
            onClick={() => this.props.addrooms()}
            className="btn"
            disabled={this.state.roomsplus ? null : "disabled"}
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
        <div className="content">
          <i className="fas fa-bed" style={{ marginRight: "10px" }}></i>
          <span style={{ marginRight: "10px" }}>{"ROOMS"}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { status: state.status };
};
export default connect(mapStateToProps, { addrooms, removerooms })(Rooms);
