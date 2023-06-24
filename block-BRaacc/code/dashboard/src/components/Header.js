import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <nav class="navbar bg-primary flex">
      <Link className="navbar-brand flex" to="/">
        <span className="nav-icon">
          <i class="fas fa-bars"></i>
        </span>
        <h1>Dashboard</h1>
      </Link>
      <input
        className="input"
        type="search"
        placeholder="Search Documentation... "
      />
    </nav>
  );
}

export default Header;
