import React, {Component} from 'react';

class Fight extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    name1:'',
    name2:''
  }



  handleChange(){
    this.props.onClickFight(this.state.name1,this.state.name2);
  }

  render() {
    return (
      <div>
        <input type="text"
            value1 = {this.state.name1}
            onChange = {this.handleChange}
          />
          <h1>vs</h1>
        <input type="text"
            value2 = {this.state.name2}
            onChange = {this.handleChange}
            />
        <br/>
        <button > Fight! </button>
      </div>
    );
  }
}
export default Fight;
