import React, { Component } from 'react';
import './App.css';
import UserInput from './userInput/userInput';
import UserOutput from './userOutput/userOutput';

class App extends Component {
  state = {
    userName: "praneeth thota"
  }
  changeNameHandler = (event) => {
   this.setState({
     userName: event.target.value
   })
  }
  render() {
    return (
      <div className="App">
        <UserInput changed= {this.changeNameHandler} userName = {this.state.userName}/>
        <UserOutput userName = {this.state.userName} />
      </div>
    );
  }
}

export default App;
