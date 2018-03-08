import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './register.js';
import FileForm from './upload.js';
import List from './show-files.js';

class App extends Component {
  state = {
    photos:[],
    cont1: 0,
    cont2: 0,
    name1: '',
    name2: '',
    numFotos1:0,
    numFotos2:0,
  }

  componentDidMount() {
    fetch('/users/')
    .then(res => res.json())
    .then(users => this.setState({users}));
  }

  handleName(name1, name2){
    let me =this;
    var contado1 = 0;
    var contado2=0;
    var numFotos1=0;
    var numFotos2=0;

    fetch('/user/'+name1)
    .then(res => res.json())
    .then((object.user.media.nodes) => {nodes.map((n) =>
    contado2+=n.likes.count;
    numFotos1++;
    ));

    fetch('/user/'+name2)
    .then(res => res.json())
    .then((object.user.media.nodes) => {nodes.map((n) =>
    contado1+=n.likes.count;
    numFotos2++;
  }));

    this.setState({
      name1:name1,
      name2:name2,
      cont1: contado1,
      cont2: contado2
    });
  }

  handleClick(user1,user2){

  }

  render() {
    return (
      <div className="App">
        <h1>Enter the name to start the fight!</h1>
        <Fight onClickFight = {this.handleName} />
        <h1>Results</h1>
        <Results name1 = {this.state.name1}
                name2 = {this.state.name2}
                cont1 = {this.state.cont1}
                cont2 = {this.state.cont2}/>
      </div>
    );
  }
}



export default App;
