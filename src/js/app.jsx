import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  // A constructor method to initialize the state of the app
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,               
      result: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    console.log('handleChange()');
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    // this.handleClick();
  }

  handleClick() {
    console.log('handleClick()');

    const principal = this.state.balance;
    const n = this.state.term * 12;
    const r = this.state.rate / 1200;
    const m = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    this.setState({ result: m });
  }

  render() {
    return (
      <div className='container'>
        {/* your JSX goes here */}
        <h1>Mortgage Calculator</h1>
        <input name='balance' type='number' onChange={ this.handleChange } />
        <input name='rate' type='number' step='0.01' onChange={ this.handleChange } />
        <select name='term' onChange={ this.handleChange }>
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <button name='submit' onClick={ this.handleClick }>Calculate</button>
        <div id='output'>Your monthly payment is {new Intl.NumberFormat('dollars', { style: 'currency', currency: 'USD' }).format(this.state.result)}</div>
      </div>
    );
  }
}
