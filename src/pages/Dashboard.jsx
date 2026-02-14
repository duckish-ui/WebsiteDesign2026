import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useUser } from '../context/UserContext';
import ProgressBar from '../components/ProgressBar';
import './Dashboard.css';

function Dashboard() {
  const { user } = useUser();
  
  const upcomingSessions = [
    { id: 1, subject: 'Mathematics', time: '2:00 PM', tutor: 'Alex Johnson', date: 'Today' },
    { id: 2, subject: 'Chemistry', time: '4:30 PM', tutor: 'Sarah Lee', date: 'Tomorrow' },
    { id: 3, subject: 'History', time: '11:00 AM', tutor: 'Mike Chen', date: 'Feb 16' }
  ];

  const recentActivity = [
    { id: 1, action: 'Completed Physics Quiz', points: 10, time: '2 hours ago' },
    { id: 2, action: 'Attended Math Study Session', points: 15, time: '1 day ago' },
    { id: 3, action: 'Uploaded Biology Notes', points: 20, time: '2 days ago' },
    { id: 4, action: 'Daily Login Streak', points: 5, time: '3 days ago' }
  ];

  const recommendedResources = [
    { id: 1, title: 'Calculus Practice Problems', type: 'Quiz', subject: 'Math' },
    { id: 2, title: 'Organic Chemistry Notes', type: 'Document', subject: 'Chemistry' },
    { id: 3, title: 'World War II Summary', type: 'Video', subject: 'History' }
  ];

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <div>
            <h1>Welcome back, {user.name}! 👋</h1>
            <p>Here's your learning overview</p>
          </div>
        </header>

        <div className="dashboard-grid">
          {/* Stats Cards */}
          <div className="stats-section">
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-content">
                <h3>{user.points}</h3>
                <p>Total Points</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔥</div>
              <div className="stat-content">
                <h3>{user.streak}</h3>
                <p>Day Streak</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <h3>{user.completedQuizzes}</h3>
                <p>Quizzes Done</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-content">
                <h3>{user.attendedSessions}</h3>
                <p>Sessions Attended</p>
              </div>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="dashboard-card progress-overview">
            <h2>📊 Subject Mastery</h2>
            <ProgressBar subject="Mathematics" percentage={75} color="#667eea" />
            <ProgressBar subject="Chemistry" percentage={62} color="#f093fb" />
            <ProgressBar subject="Physics" percentage={88} color="#4facfe" />
            <ProgressBar subject="History" percentage={54} color="#43e97b" />
            <ProgressBar subject="English" percentage={81} color="#fa709a" />
          </div>

          {/* Upcoming Sessions */}
          <div className="dashboard-card upcoming-sessions">
            <h2>📅 Upcoming Sessions</h2>
            <div className="session-list">
              {upcomingSessions.map(session => (
                <div key={session.id} className="session-item">
                  <div className="session-info">
                    <h4>{session.subject}</h4>
                    <p>with {session.tutor}</p>
                  </div>
                  <div className="session-time">
                    <span className="session-date">{session.date}</span>
                    <span className="session-hour">{session.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="dashboard-card recent-activity">
            <h2>⚡ Recent Activity</h2>
            <div className="activity-list">
              {recentActivity.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-info">
                    <p>{activity.action}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                  <span className="activity-points">+{activity.points} pts</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Resources */}
          <div className="dashboard-card recommended-resources">
            <h2>💡 Recommended for You</h2>
            <div className="resource-list">
              {recommendedResources.map(resource => (
                <div key={resource.id} className="resource-item">
                  <span className="resource-type">{resource.type}</span>
                  <h4>{resource.title}</h4>
                  <p>{resource.subject}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;