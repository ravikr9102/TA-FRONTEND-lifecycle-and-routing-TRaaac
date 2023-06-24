import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <main className="wrapper-main">
          <h1> 🚀 Welcome to Homepage!</h1>
          <div>
            <ul className="flex">
              <Link to="/Articles">
                <li>Articles Page</li>
              </Link>
              <Link to="/Book">
                <li>Books Page</li>
              </Link>
              <Link to="/People">
                <li>People Page</li>
              </Link>
            </ul>
          </div>
        </main>
      </>
    );
  }
}
export default Home;
