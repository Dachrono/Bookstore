import { Link } from 'react-router-dom';
import { IconUser } from '../style/icon';
import '../style/navBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="menu">
        <h1 className="navTitle">Books store</h1>
        <ul className="navItems">
          <li><Link id="link1" to="/">Books</Link></li>
          <li><Link id="link2" to="/categories">Categories</Link></li>
        </ul>
      </div>
      <div className="Oval"><IconUser /></div>
    </div>
  );
}

export default NavBar;
