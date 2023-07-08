import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }
  
  componentDidMount() {
    fetch('https://github.com/HackerNews/API')
      .then((res) => res.json())
      .then((responseData) => {
        this.setState({
          data: responseData,
        });
      });
  }
  render() {
    return <h1>Hello React!</h1>;
  }
}

export default App;
