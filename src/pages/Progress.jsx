import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useUser } from '../context/UserContext';
import ProgressBar from '../components/ProgressBar';
import './Progress.css';

function Progress() {
  const { user } = useUser();
  const [timeframe, setTimeframe] = useState('month');

  const subjectMastery = [
    { subject: 'Mathematics', percentage: 75, color: '#667eea' },
    { subject: 'Chemistry', percentage: 62, color: '#f093fb' },
    { subject: 'Physics', percentage: 88, color: '#4facfe' },
    { subject: 'History', percentage: 54, color: '#43e97b' },
    { subject: 'English', percentage: 81, color: '#fa709a' }
  ];

  const completedTasks = [
    { id: 1, task: 'Calculus Chapter 5 Quiz', subject: 'Mathematics', date: 'Feb 13, 2026', score: '92%' },
    { id: 2, task: 'Organic Chemistry Lab Report', subject: 'Chemistry', date: 'Feb 12, 2026', score: '88%' },
    { id: 3, task: 'Physics Problem Set 8', subject: 'Physics', date: 'Feb 11, 2026', score: '95%' },
    { id: 4, task: 'World War II Essay', subject: 'History', date: 'Feb 10, 2026', score: '85%' },
    { id: 5, task: 'Shakespeare Analysis', subject: 'English', date: 'Feb 9, 2026', score: '90%' },
    { id: 6, task: 'Trigonometry Test', subject: 'Mathematics', date: 'Feb 8, 2026', score: '87%' }
  ];

  const achievements = [
    { id: 1, title: 'Week Warrior', description: '7-day login streak', icon: '🔥', unlocked: true },
    { id: 2, title: 'Quiz Master', description: 'Complete 10 quizzes', icon: '🎯', unlocked: true },
    { id: 3, title: 'Social Learner', description: 'Join 5 study sessions', icon: '👥', unlocked: true },
    { id: 4, title: 'Resource Guru', description: 'Upload 5 resources', icon: '📚', unlocked: false },
    { id: 5, title: 'Perfect Score', description: 'Get 100% on any quiz', icon: '⭐', unlocked: false },
    { id: 6, title: 'Study Marathon', description: 'Study for 5 hours in one day', icon: '🏃', unlocked: false }
  ];

  const improvementData = {
    Mathematics: [65, 68, 71, 73, 75],
    Chemistry: [55, 57, 59, 61, 62],
    Physics: [80, 82, 85, 86, 88],
    History: [48, 50, 51, 53, 54],
    English: [75, 77, 78, 80, 81]
  };

  return (
    <>
      <Navbar />
      <div className="progress-container">
        <header className="progress-header">
          <h1>Academic Progress</h1>
          <p>Track your learning journey and achievements</p>
        </header>

        <div className="progress-grid">
          {/* Overview Stats */}
          <div className="progress-card stats-overview">
            <h2>📊 Overview</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">{user.completedQuizzes}</div>
                <div className="stat-label">Quizzes Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{user.attendedSessions}</div>
                <div className="stat-label">Sessions Attended</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{user.streak}</div>
                <div className="stat-label">Current Streak</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">72%</div>
                <div className="stat-label">Average Score</div>
              </div>
            </div>
          </div>

          {/* Subject Mastery */}
          <div className="progress-card subject-mastery">
            <h2>📚 Subject Mastery</h2>
            <div className="mastery-list">
              {subjectMastery.map(subject => (
                <ProgressBar 
                  key={subject.subject}
                  subject={subject.subject}
                  percentage={subject.percentage}
                  color={subject.color}
                />
              ))}
            </div>
          </div>

          {/* Streak Counter */}
          <div className="progress-card streak-card">
            <h2>🔥 Streak Counter</h2>
            <div className="streak-display">
              <div className="streak-number">{user.streak}</div>
              <div className="streak-text">Days</div>
            </div>
            <p className="streak-message">Keep it up! You're on fire!</p>
            <div className="streak-calendar">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={i} 
                  className={i < user.streak ? 'day-active' : 'day-inactive'}
                >
                  {i < user.streak ? '✓' : '○'}
                </div>
              ))}
            </div>
          </div>

          {/* Improvement Graph */}
          <div className="progress-card improvement-graph">
            <div className="graph-header">
              <h2>📈 Improvement Trends</h2>
              <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <div className="graph-content">
              {Object.entries(improvementData).map(([subject, scores]) => {
                const improvement = scores[scores.length - 1] - scores[0];
                return (
                  <div key={subject} className="subject-trend">
                    <div className="trend-header">
                      <span className="trend-subject">{subject}</span>
                      <span className={improvement > 0 ? 'trend-up' : 'trend-down'}>
                        {improvement > 0 ? '↗' : '↘'} {Math.abs(improvement)}%
                      </span>
                    </div>
                    <div className="mini-graph">
                      {scores.map((score, i) => (
                        <div 
                          key={i} 
                          className="graph-bar"
                          style={{ height: `${score}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="progress-card completed-tasks">
            <h2>✅ Completed Tasks</h2>
            <div className="tasks-list">
              {completedTasks.map(task => (
                <div key={task.id} className="task-item">
                  <div className="task-info">
                    <h4>{task.task}</h4>
                    <p>{task.subject} • {task.date}</p>
                  </div>
                  <div className="task-score">{task.score}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="progress-card achievements">
            <h2>🏆 Achievements</h2>
            <div className="achievements-grid">
              {achievements.map(achievement => (
                <div 
                  key={achievement.id} 
                  className={achievement.unlocked ? 'achievement-item unlocked' : 'achievement-item locked'}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                  {achievement.unlocked && <span className="unlocked-badge">Unlocked!</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Progress;