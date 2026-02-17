import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const { user } = useUser();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">📚</span>
          Educative Excellence
        </Link>
        
        <ul className="nav-menu">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link></li>
          <li><Link to="/sessions" className={isActive('/sessions')}>Study Sessions</Link></li>
          <li><Link to="/resources" className={isActive('/resources')}>Resources</Link></li>
          <li><Link to="/progress" className={isActive('/progress')}>Progress</Link></li>
          <li><Link to="/rewards" className={isActive('/rewards')}>Rewards</Link></li>
          <li><Link to="/community" className={isActive('/community')}>Community</Link></li>
          <li><Link to="/about" className={isActive('/about')}>About</Link></li>
        </ul>

        <div className="nav-points">
          <span className="points-badge">🏆 {user.points} pts</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;