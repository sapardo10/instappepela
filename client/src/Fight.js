import React, {Component} from 'react';

class Fight extends Component {
  constructor(props){
    super(props);
  }
  state = {
    name1:'',
    name2:''
  }

  handleFight(){
    this.props.onClickFight(this.state.name1,this.state.name2);
  }

  onHandleChange(event){
    this.setState({
      name1: event.target.value,
    });
  }

  onHandleChange2(event){
    this.setState({
      name2: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input type="text"
            value = {this.state.name1}
            onChange={(event)=> this.onHandleChange(event)}
          />
          <h1>vs</h1>
        <input type="text"
            value = {this.state.name2}
            onChange={(event)=> this.onHandleChange2(event)}
            />
        <br/>
        <button onClick = {this.handleFight.bind(this)}> Fight! </button>
      </div>
    );
  }
}
export default Fight;
