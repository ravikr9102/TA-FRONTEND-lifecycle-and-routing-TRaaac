import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from '../utils/withRouter';
import Loader from './Loader';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      index: 0,
      score: 0,
      showscore: false,
      isAnswered: false,
      correctAnswer: 0,
      incorrectAnswer: 0,
      random_number: Math.floor(Math.random() * 4),
    };
  }
  componentDidMount() {
    var currentQuestionIndex;
    this.setState({ index: currentQuestionIndex || 0 });

    if (currentQuestionIndex !== 0) {
      var score;
      this.setState({ ...score });
    }
    let search = this.props.router.location.search;
    fetch(`https://opentdb.com/api.php?amount=10&${search}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  handleNext = () => {
    let data = this.state.data;
    this.setState({
      isAnswered: false,
    });
    if (this.state.index < data.results.length - 1) {
      this.setState({
        index: this.state.index + 1,
        random_number: Math.floor(Math.random() * 4),
      });
    }
  };

  handleClick = (result) => {
    this.setState({ isAnswered: true });
    let data = this.state.data;
    let correct = data.results[this.state.index];
    if (result === correct.correct_answer && this.state.index <= 9) {
      this.setState({
        score: this.state.score + 1,
        correctAnswer: this.state.correctAnswer + 1,
      });
    } else {
      this.setState({
        incorrectAnswer: this.state.incorrectAnswer + 1,
      });
    }
  };

  render() {
    let data = this.state.data;
    if (!this.state.data) {
      return <Loader />;
    }
    if (this.state.showscore) {
      return (
        <>
          <div className="text-center quiz">
              <h3>Your Score is: {this.state.score}</h3>
              <div className='d-flex justify-content-center align-items-center'>
              <h3 className='m-3 text-success'>Correct Answer: {this.state.correctAnswer}</h3>
              <h3 className='m-3 text-danger'>Incorrect Answer: {this.state.incorrectAnswer}</h3>
            </div>
          </div>
          <div className="text-center">
            <button className='border border-primary border-2 p-2 rounded'>
              <Link className='text-decoration-none' to="/">Start Again</Link>
            </button>
          </div>
        </>
      );
    }

    var incorrect_answers = data.results[this.state.index].incorrect_answers;
    var random_number = this.state.random_number;

    return (
      <div>
        <div>
          <div>
            <h2 className="m-5 font-monospace">Score:{this.state.score}</h2>
            <h2 className="text-center p-4 fw-bolder">
              Question:{this.state.index + 1}/10
            </h2>
          </div>
          <div className="text-center">
            <h3 className="text-wrap">
              {data.results[this.state.index].question}
            </h3>
            <ul className="d-flex justify-content-center align-items-center m-2">
              {incorrect_answers
                .slice(0, random_number)
                .concat(data.results[this.state.index].correct_answer)
                .concat(incorrect_answers.slice(random_number))
                .map((result, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => this.handleClick(result)}
                      className={`${
                        this.state.isAnswered ? 'disable' : ''
                      } result m-3 `}
                    >
                      {result}
                    </li>
                  );
                })}
            </ul>
            {this.state.index <= data.results.length - 2 ? (
              <Link
                className="text-decoration-none next"
                to=""
                onClick={this.handleNext}
              >
                Next Question
              </Link>
            ) : (
              <button
                className="border border-success border-2 p-2 text-decoration-none rounded"
                onClick={() => {
                  this.setState({
                    showscore: true,
                  });
                }}
              >
                See Results
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Quiz);
