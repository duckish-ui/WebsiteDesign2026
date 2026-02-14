import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useUser } from '../context/UserContext';
import './StudySessions.css';

function StudySessions() {
  const { addPoints } = useUser();
  const [filter, setFilter] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const sessions = [
    { 
      id: 1, 
      subject: 'Mathematics', 
      title: 'Calculus Study Group',
      host: 'Alex Johnson', 
      date: 'Feb 15, 2026', 
      time: '2:00 PM - 4:00 PM',
      participants: 8,
      maxParticipants: 12,
      rating: 4.8,
      description: 'Review derivatives and integrals',
      status: 'upcoming'
    },
    { 
      id: 2, 
      subject: 'Chemistry', 
      title: 'Organic Chemistry Lab Prep',
      host: 'Sarah Lee', 
      date: 'Feb 15, 2026', 
      time: '4:30 PM - 6:00 PM',
      participants: 5,
      maxParticipants: 10,
      rating: 4.9,
      description: 'Preparation for upcoming lab experiments',
      status: 'upcoming'
    },
    { 
      id: 3, 
      subject: 'Physics', 
      title: 'Quantum Mechanics Discussion',
      host: 'Mike Chen', 
      date: 'Feb 16, 2026', 
      time: '1:00 PM - 2:30 PM',
      participants: 10,
      maxParticipants: 15,
      rating: 4.7,
      description: 'Deep dive into quantum theory',
      status: 'upcoming'
    },
    { 
      id: 4, 
      subject: 'History', 
      title: 'World War II Review',
      host: 'Emma Davis', 
      date: 'Feb 16, 2026', 
      time: '3:00 PM - 4:30 PM',
      participants: 6,
      maxParticipants: 10,
      rating: 4.6,
      description: 'Comprehensive exam review',
      status: 'upcoming'
    },
    { 
      id: 5, 
      subject: 'English', 
      title: 'Shakespeare Study Circle',
      host: 'James Wilson', 
      date: 'Feb 17, 2026', 
      time: '11:00 AM - 12:30 PM',
      participants: 7,
      maxParticipants: 12,
      rating: 4.8,
      description: 'Analyzing Hamlet Act III',
      status: 'upcoming'
    }
  ];

  const filteredSessions = filter === 'all' 
    ? sessions 
    : sessions.filter(s => s.subject.toLowerCase() === filter.toLowerCase());

  const handleJoinSession = (sessionId) => {
    addPoints(15, 'Joined study session');
    alert('Successfully joined session! +15 points');
  };

  return (
    <>
      <Navbar />
      <div className="sessions-container">
        <header className="sessions-header">
          <div>
            <h1>Study Sessions</h1>
            <p>Join or create collaborative learning sessions</p>
          </div>
          <button className="btn-create-session" onClick={() => setShowCreateModal(true)}>
            + Create Session
          </button>
        </header>

        <div className="sessions-filters">
          <button 
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('all')}
          >
            All Subjects
          </button>
          <button 
            className={filter === 'mathematics' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('mathematics')}
          >
            Mathematics
          </button>
          <button 
            className={filter === 'chemistry' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('chemistry')}
          >
            Chemistry
          </button>
          <button 
            className={filter === 'physics' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('physics')}
          >
            Physics
          </button>
          <button 
            className={filter === 'history' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('history')}
          >
            History
          </button>
          <button 
            className={filter === 'english' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('english')}
          >
            English
          </button>
        </div>

        <div className="sessions-grid">
          {filteredSessions.map(session => (
            <div key={session.id} className="session-card">
              <div className="session-card-header">
                <span className="session-subject-tag">{session.subject}</span>
                <div className="session-rating">
                  <span>⭐ {session.rating}</span>
                </div>
              </div>
              
              <h3>{session.title}</h3>
              <p className="session-description">{session.description}</p>
              
              <div className="session-details">
                <div className="detail-item">
                  <span className="detail-icon">👤</span>
                  <span>Host: {session.host}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <span>{session.date}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🕐</span>
                  <span>{session.time}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">👥</span>
                  <span>{session.participants}/{session.maxParticipants} participants</span>
                </div>
              </div>

              <div className="session-card-footer">
                <div className="participants-bar">
                  <div 
                    className="participants-fill" 
                    style={{ width: `${(session.participants / session.maxParticipants) * 100}%` }}
                  ></div>
                </div>
                <button 
                  className="btn-join-session"
                  onClick={() => handleJoinSession(session.id)}
                >
                  Join Session (+15 pts)
                </button>
              </div>
            </div>
          ))}
        </div>

        {showCreateModal && (
          <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Create New Study Session</h2>
              <form className="create-session-form">
                <input type="text" placeholder="Session Title" />
                <select>
                  <option>Select Subject</option>
                  <option>Mathematics</option>
                  <option>Chemistry</option>
                  <option>Physics</option>
                  <option>History</option>
                  <option>English</option>
                </select>
                <input type="date" />
                <input type="time" placeholder="Start Time" />
                <input type="number" placeholder="Duration (minutes)" />
                <input type="number" placeholder="Max Participants" />
                <textarea placeholder="Description" rows="4"></textarea>
                <div className="modal-buttons">
                  <button type="button" className="btn-cancel" onClick={() => setShowCreateModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-submit">
                    Create (+25 pts)
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default StudySessions;