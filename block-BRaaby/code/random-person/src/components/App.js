import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      title: 'My name is',
      value: ''
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) =>  this.setState({data: data,
        value: data.results[0].name.first + " " + data.results[0].name.last,
      }));
  }

  getRandomProfile =() => {
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        data: data,
        value: data.results[0].name.first + " " + data.results[0].name.last,
      });
    });
  }

  render() {
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }
    let data = this.state.data.results[0];
    return(
        <>
        <div>
            <ul>
              <li>
                <img src={data.picture.large} alt='' />
                <h4>{this.state.title}</h4>
                <h2>{this.state.value}</h2>
                <div>
                  <button onMouseMove={() => {
                    this.setState({
                      title: "my email is ",
                      value: data.email,
                    });
                  }}>
                 <i class="fas fa-user"></i>
                  </button>
                  <button
                  onMouseMove={() => {
                    this.setState({
                      title: "my age is ",
                      value: data.dob.age,
                    });
                  }}
                >
           <i class="fas fa-phone"></i>
                </button>
                </div>
                <div>
                <button onClick={this.getRandomProfile}>{!this.state.data ? "Loading.." : "Random User"}</button>
                </div>
              </li>
            </ul>
        </div>

    </>
    )
  }
}

export default App;

