import React, {Component} from 'react';

class Results extends Component {


  render() {
    return (
      <div>
        The winner is: <span >{this.props.name1}</span> with {this.props.likesPphoto1} likes per photo!
        <br/>
        The loser is: <span >{this.props.name2}</span> with {this.props.likesPphoto2} likes per photo!
      </div>
    );
  }
}
export default Results;
