import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useUser } from '../context/UserContext';
import './Community.css';

function Community() {
  const { addPoints } = useUser();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const discussions = [
    { 
      id: 1, 
      title: 'Best way to study for Calculus finals?', 
      author: 'Alex Johnson', 
      category: 'Mathematics',
      replies: 12, 
      likes: 34,
      timestamp: '2 hours ago',
      preview: 'I have my finals coming up and I\'m struggling with derivatives...'
    },
    { 
      id: 2, 
      title: 'Organic Chemistry resources needed', 
      author: 'Sarah Lee', 
      category: 'Chemistry',
      replies: 8, 
      likes: 21,
      timestamp: '5 hours ago',
      preview: 'Can anyone recommend good resources for understanding reaction mechanisms?'
    },
    { 
      id: 3, 
      title: 'Study group for Physics this weekend?', 
      author: 'Mike Chen', 
      category: 'Physics',
      replies: 15, 
      likes: 42,
      timestamp: '1 day ago',
      preview: 'Looking to form a study group for quantum mechanics...'
    },
    { 
      id: 4, 
      title: 'Tips for writing history essays', 
      author: 'Emma Davis', 
      category: 'History',
      replies: 6, 
      likes: 18,
      timestamp: '1 day ago',
      preview: 'Any advice on structuring essays for history exams?'
    },
    { 
      id: 5, 
      title: 'Shakespeare interpretation help', 
      author: 'James Wilson', 
      category: 'English',
      replies: 10, 
      likes: 28,
      timestamp: '2 days ago',
      preview: 'Having trouble analyzing the themes in Hamlet Act III...'
    }
  ];

  const qaBoard = [
    { 
      id: 1, 
      question: 'What is the derivative of sin(x)?', 
      answer: 'cos(x)', 
      answerer: 'Math Expert',
      category: 'Mathematics',
      votes: 45,
      solved: true
    },
    { 
      id: 2, 
      question: 'How do covalent bonds work?', 
      answer: 'Covalent bonds form when atoms share electron pairs...', 
      answerer: 'Chemistry Pro',
      category: 'Chemistry',
      votes: 38,
      solved: true
    },
    { 
      id: 3, 
      question: 'Explain Newton\'s Third Law', 
      answer: 'For every action, there is an equal and opposite reaction...', 
      answerer: 'Physics Guru',
      category: 'Physics',
      votes: 52,
      solved: true
    },
    { 
      id: 4, 
      question: 'What caused World War I?', 
      answer: 'Multiple factors including alliances, imperialism...', 
      answerer: 'History Buff',
      category: 'History',
      votes: 29,
      solved: true
    }
  ];

  const studyTips = [
    { id: 1, tip: 'Use the Pomodoro Technique: 25 min study, 5 min break', author: 'Lisa Brown', likes: 67 },
    { id: 2, tip: 'Teach someone else to solidify your understanding', author: 'Tom Green', likes: 89 },
    { id: 3, tip: 'Review notes within 24 hours of learning', author: 'Nina Patel', likes: 54 },
    { id: 4, tip: 'Create mind maps for complex topics', author: 'Chris Lee', likes: 71 }
  ];

  const filteredDiscussions = selectedCategory === 'all' 
    ? discussions 
    : discussions.filter(d => d.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleAnswer = () => {
    addPoints(8, 'Answered community question');
    alert('Question answered! +8 points');
  };

  return (
    <>
      <Navbar />
      <div className="community-container">
        <header className="community-header">
          <h1>Community</h1>
          <p>Connect, collaborate, and learn together</p>
        </header>

        <div className="community-grid">
          {/* Discussion Forums */}
          <div className="community-card forums">
            <div className="card-header">
              <h2>💬 Discussion Forums</h2>
              <button className="btn-new-post">+ New Post</button>
            </div>

            <div className="category-filters">
              <button 
                className={selectedCategory === 'all' ? 'category-btn active' : 'category-btn'}
                onClick={() => setSelectedCategory('all')}
              >
                All
              </button>
              <button 
                className={selectedCategory === 'mathematics' ? 'category-btn active' : 'category-btn'}
                onClick={() => setSelectedCategory('mathematics')}
              >
                Math
              </button>
              <button 
                className={selectedCategory === 'chemistry' ? 'category-btn active' : 'category-btn'}
                onClick={() => setSelectedCategory('chemistry')}
              >
                Chemistry
              </button>
              <button 
                className={selectedCategory === 'physics' ? 'category-btn active' : 'category-btn'}
                onClick={() => setSelectedCategory('physics')}
              >
                Physics
              </button>
              <button 
                className={selectedCategory === 'history' ? 'category-btn active' : 'category-btn'}
                onClick={() => setSelectedCategory('history')}
              >
                History
              </button>
              <button 
                className={selectedCategory === 'english' ? 'category-btn active' : 'category-btn'}
                onClick={() => setSelectedCategory('english')}
              >
                English
              </button>
            </div>

            <div className="discussions-list">
              {filteredDiscussions.map(discussion => (
                <div key={discussion.id} className="discussion-item">
                  <div className="discussion-content">
                    <h4>{discussion.title}</h4>
                    <p className="discussion-preview">{discussion.preview}</p>
                    <div className="discussion-meta">
                      <span className="category-tag">{discussion.category}</span>
                      <span>by {discussion.author}</span>
                      <span>• {discussion.timestamp}</span>
                    </div>
                  </div>
                  <div className="discussion-stats">
                    <span>💬 {discussion.replies}</span>
                    <span>❤️ {discussion.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Q&A Board */}
          <div className="community-card qa-board">
            <div className="card-header">
              <h2>❓ Q&A Board</h2>
              <button className="btn-ask" onClick={handleAnswer}>Ask Question (+8 pts)</button>
            </div>

            <div className="qa-list">
              {qaBoard.map(qa => (
                <div key={qa.id} className="qa-item">
                  <div className="qa-votes">
                    <span className="vote-count">▲ {qa.votes}</span>
                  </div>
                  <div className="qa-content">
                    <h4>{qa.question}</h4>
                    {qa.solved && (
                      <div className="qa-answer">
                        <span className="solved-badge">✓ Solved</span>
                        <p>{qa.answer}</p>
                        <span className="answerer">— {qa.answerer}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Tips */}
          <div className="community-card study-tips">
            <h2>💡 Peer Study Tips</h2>
            <div className="tips-list">
              {studyTips.map(tip => (
                <div key={tip.id} className="tip-item">
                  <p>{tip.tip}</p>
                  <div className="tip-footer">
                    <span>— {tip.author}</span>
                    <span className="tip-likes">❤️ {tip.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Group Finder */}
          <div className="community-card group-finder">
            <h2>👥 Find Study Groups</h2>
            <div className="groups-list">
              <div className="group-item">
                <div className="group-info">
                  <h4>Calculus Study Crew</h4>
                  <p>15 members • Meets Tuesdays & Thursdays</p>
                </div>
                <button className="btn-join-group">Join</button>
              </div>
              <div className="group-item">
                <div className="group-info">
                  <h4>Chemistry Lab Partners</h4>
                  <p>12 members • Meets Wednesdays</p>
                </div>
                <button className="btn-join-group">Join</button>
              </div>
              <div className="group-item">
                <div className="group-info">
                  <h4>Physics Problem Solvers</h4>
                  <p>18 members • Meets Fridays</p>
                </div>
                <button className="btn-join-group">Join</button>
              </div>
              <div className="group-item">
                <div className="group-info">
                  <h4>History Essay Workshop</h4>
                  <p>10 members • Meets Mondays</p>
                </div>
                <button className="btn-join-group">Join</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;