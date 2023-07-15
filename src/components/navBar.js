import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="NavBar">
        <h1 className="navTitle">Books store</h1>
        <ul className="navItems">
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
