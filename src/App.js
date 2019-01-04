import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOuput';


class App extends Component {
  state = {
    username: 'Rishabh'
  }

  changedUserNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  clickedUserNameHandler = () => {
    this.setState({
      username: "Anish"
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      width: '40%',
      margin: '10px auto',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    }
    return (
      <div className="App" style={style}>
        <UserInput onchanged={this.changedUserNameHandler}  username={this.state.username}/>
        <UserOutput onchanged={this.changedUserNameHandler}  username={this.state.username}/>
        <UserOutput onclick={this.clickedUserNameHandler.bind(this)} username={this.state.username} />

      </div>
    );
  }
}

export default App;
