import React from 'react';
import LanguageBtnHeader from './LanguageBtnHeader';
import Cards from './Cards';

class Popular extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      language: 'All',
    };
  }
  componentDidMount() {
    fetch(
      'https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories'
    )
      .then((res) => res.json())
      .then((responseData) => {
        this.setState({
          data: responseData,
        });
      });
  }

  handleClick = ({ target }) => {
    let value = target.innerText;
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${value}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((responseData) => {
        this.setState({
          data: responseData,
          language: value,
        });
      });
  };

  render() {
    return (
      <>
        <LanguageBtnHeader
          handleClick={this.handleClick}
          value={this.state.language}
        />
        {this.state.data === null || this.state.data === undefined ? (
          <h1 className='text-center fetch'>Fetching Repos...</h1>
        ) : (
          <Cards Data={this.state.data.items} />
        )}
      </>
    );
  }
}

export default Popular;
