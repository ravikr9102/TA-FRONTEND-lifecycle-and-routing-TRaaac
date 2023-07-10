import React from 'react';

class Difficulty extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userLevel: "easy"
    }
  }
  handleChange = (event) => {
    this.setState({
      userLevel: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit} className='form'>
          <label>Choose Your Level: </label>
          <select value={this.state.userLevel} className="categories" onChange={this.handleChange}>
        {['easy', 'medium', 'hard'].map((level) => (
          <option key={level}>{level}</option>
        ))}
      </select>
        <input type='sumbit' value='submit' />
        </form>
    );
  }
  
}

export default Difficulty;
