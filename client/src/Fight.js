import React, {Component} from 'react';

class Fight extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text"/>
          <h1>vs</h1>
        <input type="text"/>
        <br/>
        <button> Fight! </button>
      </div>
    );
  }
}
export default Fight;
