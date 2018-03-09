import React, {Component} from 'react';

class Games extends Component {

  render(){
    return(
      <div>
      <ul>
        {(this.props.games).map((g)=>
        <li key={g._id}>{g.name1} vs {g.name2}</li>) }
      </ul>
      </div>
    );
  }

};

export default Games;
