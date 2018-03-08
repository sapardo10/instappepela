import React, {Component} from 'react';

class Results extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        The winner is: {this.props.name1} with {this.props.cont1} likes in the pictures!
        <br/>
        The loser is: {this.props.name2} with {this.props.cont2} likes in the pictures!
      </div>
    );
  }
}
export default Results;
