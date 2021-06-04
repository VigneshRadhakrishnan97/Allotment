import React from 'react' 
import Rooms from './Rooms'
import Adult from './Adult'
import Children from "./Children";
import "../style.css";

class App extends React.Component{

    render(){
        return (
          <div className="ui grid">
            <div className="four wide column"></div>

            <div className=" eight wide column ">
              <i className="fas fa-users"></i> Choose number of <b>people</b>
              <div className="ui segment">
                <div className="ui middle aligned divided list">
                  <Rooms />
                  <Adult />
                  <Children />
                </div>
              </div>
              <div style={{ float: "right" }}>
                <i>by Vignesh</i>
              </div>
            </div>
            <div className="four wide column"></div>
          </div>
        );
    }
}
 export default App;