import React, {Component} from 'react';

class Results extends Component {


  render() {
    return (
      <div>
        The winner is: {this.props.likesPphoto1} likes per photo!
        <br/>
        The loser is: {this.props.likesPphoto2} likes per photo!
      </div>
    );
  }
}
export default Results;
