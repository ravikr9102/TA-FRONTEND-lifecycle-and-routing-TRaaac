import React from 'react';
import '../styles/index.css';
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <aside className="sidebar">
          <ul>
            <NavLink activeClassName="active" exact to="/">
              <li>
                <i class="fas fa-envelope-open"></i>
                <span>Home</span>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/Articles">
              <li>
                <i class="fas fa-book"></i>
                <span>Articles</span>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/People">
              <li>
                <i class="fas fa-info"></i>
                <span>People</span>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/Book">
              <li>
                <i class="fas fa-user"></i>
                <span>Books</span>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/Help">
              <li>
                <i class="fas fa-solid fa-envelope"></i>
                <span>Help & Support</span>
              </li>
            </NavLink>
          </ul>
        </aside>
      </>
    );
  }
}

export default Sidebar;
