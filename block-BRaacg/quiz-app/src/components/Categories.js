import React from 'react';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      selected: 'General Knowledge',
    };
  }
  componentDidMount() {
    fetch('https://opentdb.com/api_category.php')
      .then((res) => res.json())
      .then((responseData) => {
        this.setState({
          categories: responseData,
        });
      });
  }
  handleChange = (event) => {
    this.setState({
      selected: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    if (!this.state.categories) {
      return <h1>Loading...</h1>;
    }
    let categories = this.state.categories.trivia_categories;
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <label>Choose Your Categories: </label>
        <select value={this.state.selected} className="categories" onChange={this.handleChange}>
        {categories.map((category) => (
          <option key={category.id}>
            {/* <Link to={`/category=${category.id}`}>{category.name}</Link> */}
            {category.name}
          </option>
        ))}
      </select>
      <input type='sumbit' value='submit' />
      </form>
    );
  }
}

export default Categories;
