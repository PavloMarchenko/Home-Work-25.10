import React, {Component} from 'react';
import './App.css';
import ShowTextInput from "./ShowTextInput";
import B from './B'


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      number: 0
    }
  }

  onChangeInput = (event) => {
    this.setState({value: event.target.value});
  }

  showRandomNumber = (randomNumber) => {
    this.setState({number: randomNumber * 1000});
  }

  render () {
    return (
      <div>
        <input value={this.state.value} onChange={this.onChangeInput}/>
        <ShowTextInput value={this.state.value}/>

        <div style={{marginTop: '20px'}}>
          <B showRandomNumber={this.showRandomNumber}/>
          <h2>{this.state.number}</h2>
        </div>
        
      </div>
    )
  }
}

export default App;
