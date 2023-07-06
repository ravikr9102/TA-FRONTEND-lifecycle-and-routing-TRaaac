import React from "react";
import { withRouter } from "../utils/withRouter";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null,
    };
  }
  componentDidMount() {
    let playerOne = this.props.params.player.split("&&")[0];
    let playerTwo = this.props.params.player.split("&&")[1];
    fetch(`https://api.github.com/users/${playerOne}`)
      .then((res) => res.json())
      .then((playerOne) => this.setState({ playerOne }));
    fetch(`https://api.github.com/users/${playerTwo}`)
      .then((res) => res.json())
      .then((playerTwo) => this.setState({ playerTwo }));
  }
  render() {
    let playerOne = this.state.playerOne;
    console.log(playerOne);
    let playerTwo = this.state.playerTwo;
    console.log(playerTwo);
    let score1 = !playerOne ? 0 : playerOne.followers + playerOne.public_repos;
    let score2 = !playerTwo ? 0 : playerTwo.followers + playerTwo.public_repos;

    if (!this.state.playerOne || !this.state.playerTwo) {
      return <h1 className="text-center">Battling...</h1>;
    }
    return (
      <div className="battling-players">
        <div>
          <h2>{score1 > score2 ? "Winner" : "Loser"}</h2>
          <img src={playerOne.avatar_url} alt="" />
          <h2>Score: {score1}</h2>
          <h3>{playerOne.name}</h3>
        </div>
        <div>
          <h2>{score1 < score2 ? "Winner" : "Loser"}</h2>
          <img src={playerTwo.avatar_url} alt="" />
          <h2>Score: {score2}</h2>
          <h3>{playerTwo.name}</h3>
        </div>
      </div>
    );
  }
}

export default withRouter(Result);