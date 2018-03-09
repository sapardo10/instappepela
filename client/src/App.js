import React, { Component } from 'react';
import './App.css';
import Fight from './Fight.js';
import Results from './Results.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleName = this.handleName.bind(this);
  }
  state = {
    photos:[],
    cont1: 0,
    cont2: 0,
    name1: '',
    name2: '',
    numFotos1:0,
    numFotos2:0,
    error:''
  }

  componentDidMount() {
  }

  handleName(name1, name2){
    var contado1 = 0;
    var contado2=0;
    var numFotos1=0;
    var numFotos2=0;

    fetch('/user/'+name1)
    .then(res => res.json())
    .then((data) => {
      if(data.type==='SUCCESS'){
        var photos = data.nodes;
        this.setState({
          error: ''
        });
        photos.map((photo)=>{
        contado1+=photo.likes.count;
        numFotos1++;
      });
      this.setState({
        cont1: contado1,
        numFotos1:numFotos1,
      });
      }
      else{
        this.setState({
          error: data.message
        });
      }

      });

    fetch('/user/'+name2)
    .then(res => res.json())
    .then((data) => {
      if(data.type==='SUCCESS'){
        var photos = data.nodes;
        photos.map((photo)=>{
        contado2+=photo.likes.count;
        numFotos2++;
      });
      this.setState({
        cont2: contado2,
        numFotos2:numFotos2,
      });
      }
      else{
        this.setState({
          error: data.message
        });
      }

      });

    this.setState({
      name1:name1,
      name2:name2,
      cont1: contado1,
      cont2: contado2,
      numFotos1:numFotos1,
      numFotos2:numFotos2
    });
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
                cont2 = {this.state.cont2}
                numFotos1 = {this.state.numFotos1}
                numFotos2 = {this.state.numFotos2}/>
        <h2>{this.state.error}</h2>
      </div>
    );
  }
}



export default App;
