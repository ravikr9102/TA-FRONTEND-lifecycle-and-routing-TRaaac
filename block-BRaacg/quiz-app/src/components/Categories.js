import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import Loader from "./Loader";
import { withRouter } from "../utils/withRouter";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      quiz: "",
      difficulty: "",
      category: "",
    };
  }

  componentDidMount() {
    fetch(`https://opentdb.com/api_category.php`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  handleCategory = (event) => {
    this.setState({
      category: event.target.value,
    });
  };

  handleDifficulty = (e) => {
    this.setState({
      difficulty: e.target.value,
    });
  };

  render() {
    if (!this.state.data) {
      return (
        <Loader />
      )
    }
    return (
          <section>
          <div className="text-center quiz">
            <h1 className="mt-4 fs-40  fw-bolder">Quiz App</h1>
            <div className="p-3">
              <label className="d-block fs-30 fw-bolder" htmlFor="category">
                Choose Your Category :
              </label>
              <select 
                className="p-1 border border-info"
                onChange={this.handleCategory}
                name="category"
                id="category"
              >
                {this.state.data.trivia_categories.map((category, i) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label className="d-block fw-bolder" htmlFor="difficulty">Choose Your Difficulty Level:</label>
              <select
                className="border border-info"
                onChange={this.handleDifficulty}
                name="difficulty"
                id="difficulty"
              >
              {['easy','medium','hard'].map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
              </select>
            </div>
            <div className="m-3">
              <Link
                className="border border-primary border-2 p-2 text-decoration-none rounded"
                to={`/quiz?difficulty=${this.state.difficulty}&category=${this.state.category}`}
              >
               Let's Play!
              </Link>
            </div>
            </div>
          </section>
    );
  }
}

export default withRouter(Categories);