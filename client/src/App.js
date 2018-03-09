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
    likesPphoto1: 0,
    likesPphoto2: 0,
    name1: '',
    name2: '',
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
        likesPphoto1: contado1/numFotos1,
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
        likesPphoto2: contado2/numFotos2,
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
                likesPphoto1 = {this.state.likesPphoto1}
                likesPphoto2 = {this.state.likesPphoto2}/>
        <h2>{this.state.error}</h2>
      </div>
    );
  }
}



export default App;
