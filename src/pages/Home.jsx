import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Home.css';

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <section className="hero">
          <h1>Welcome to Educative Excellence</h1>
          <p className="hero-subtitle">Your centralized platform for peer learning, progress tracking, and gamified rewards</p>
          <div className="cta-buttons">
            <Link to="/dashboard" className="btn-primary">Get Started</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Collaborative Learning</h3>
            <p>Join study sessions and learn with peers in real-time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track Progress</h3>
            <p>Monitor your academic growth with visual analytics</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Earn Rewards</h3>
            <p>Get points for engagement and unlock exclusive perks</p>
          </div>
        </section>

        <section className="announcements">
          <h2>📢 Latest Announcements</h2>
          <div className="announcement-list">
            <div className="announcement-item">
              <span className="announcement-date">Feb 14, 2026</span>
              <p>New Math resources added to the library!</p>
            </div>
            <div className="announcement-item">
              <span className="announcement-date">Feb 12, 2026</span>
              <p>Weekend study marathon - Double points for all sessions!</p>
            </div>
            <div className="announcement-item">
              <span className="announcement-date">Feb 10, 2026</span>
              <p>Chemistry tutoring sessions now available on demand</p>
            </div>
          </div>
        </section>

        <section className="quick-stats">
          <div className="stat-box">
            <h3>2,450+</h3>
            <p>Active Students</p>
          </div>
          <div className="stat-box">
            <h3>850+</h3>
            <p>Study Sessions</p>
          </div>
          <div className="stat-box">
            <h3>5,200+</h3>
            <p>Resources Shared</p>
          </div>
          <div className="stat-box">
            <h3>92%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;