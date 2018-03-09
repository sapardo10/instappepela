import React, {Component} from 'react';

class Results extends Component {
constructor(props){
  super(props);
}

    saveGame(){
      alert('entro');
        fetch('/game', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name1: this.props.name1,
            name2: this.props.name2,
          })
        });
    }

  render() {
    return (
      <div>
        The winner is: <span onChange = {this.saveGame.bind(this)}>{this.props.name1}</span> with {this.props.likesPphoto1} likes per photo!
        <br/>
        The loser is: <span onChange = {this.saveGame.bind(this)}>{this.props.name2}</span> with {this.props.likesPphoto2} likes per photo!
      </div>
    );
  }
}
export default Results;
