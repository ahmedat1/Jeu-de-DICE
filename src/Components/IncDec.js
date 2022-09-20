import React from "react";
class IncDec extends React.Component {
    constructor() {
      super();
      this.state = {number : 0};
    }
    handelInc  =()=> {
      return(
        this.setState({number : this.state.number+ 1})
      )
    }
    handelDec  =()=> {
      return(
        this.setState({number : this.state.number- 1})
      )
    }
    render() {
      return (
        <div>
            <h1>Number : {this.state.number}</h1>
            <button onClick={this.handelInc}>Increment</button>
            <button onClick={this.handelDec}>Decrement</button>
        </div>
      )
    }
  }
  export default IncDec