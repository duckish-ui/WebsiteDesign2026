import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useUser } from '../context/UserContext';
import './Resources.css';

function Resources() {
  const { addPoints } = useUser();
  const [filterSubject, setFilterSubject] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    { id: 1, title: 'Calculus Derivative Rules', type: 'notes', subject: 'Mathematics', difficulty: 'Medium', downloads: 245, uploader: 'Alex Johnson' },
    { id: 2, title: 'Organic Chemistry Basics', type: 'video', subject: 'Chemistry', difficulty: 'Easy', downloads: 189, uploader: 'Sarah Lee' },
    { id: 3, title: 'Physics Practice Problems', type: 'quiz', subject: 'Physics', difficulty: 'Hard', downloads: 312, uploader: 'Mike Chen' },
    { id: 4, title: 'World War II Timeline', type: 'notes', subject: 'History', difficulty: 'Easy', downloads: 156, uploader: 'Emma Davis' },
    { id: 5, title: 'Shakespeare Analysis Guide', type: 'notes', subject: 'English', difficulty: 'Medium', downloads: 203, uploader: 'James Wilson' },
    { id: 6, title: 'Trigonometry Flashcards', type: 'flashcards', subject: 'Mathematics', difficulty: 'Medium', downloads: 278, uploader: 'Lisa Brown' },
    { id: 7, title: 'Chemical Bonding Video', type: 'video', subject: 'Chemistry', difficulty: 'Medium', downloads: 167, uploader: 'Sarah Lee' },
    { id: 8, title: 'Electricity Quiz', type: 'quiz', subject: 'Physics', difficulty: 'Hard', downloads: 198, uploader: 'Mike Chen' },
    { id: 9, title: 'Civil War Practice Test', type: 'test', subject: 'History', difficulty: 'Hard', downloads: 134, uploader: 'Emma Davis' },
    { id: 10, title: 'Grammar Rules Cheat Sheet', type: 'notes', subject: 'English', difficulty: 'Easy', downloads: 289, uploader: 'James Wilson' },
    { id: 11, title: 'Algebra Problem Sets', type: 'test', subject: 'Mathematics', difficulty: 'Medium', downloads: 221, uploader: 'Alex Johnson' },
    { id: 12, title: 'Periodic Table Quiz', type: 'quiz', subject: 'Chemistry', difficulty: 'Easy', downloads: 305, uploader: 'Sarah Lee' }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSubject = filterSubject === 'all' || resource.subject.toLowerCase() === filterSubject.toLowerCase();
    const matchesType = filterType === 'all' || resource.type === filterType;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesType && matchesSearch;
  });

  const handleDownload = (resourceId, resourceTitle) => {
    addPoints(5, `Downloaded ${resourceTitle}`);
    alert('Resource downloaded! +5 points');
  };

  const getTypeIcon = (type) => {
    const icons = {
      notes: '📝',
      video: '🎥',
      quiz: '❓',
      flashcards: '🃏',
      test: '📋'
    };
    return icons[type] || '📄';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: '#43e97b',
      Medium: '#f093fb',
      Hard: '#fa709a'
    };
    return colors[difficulty];
  };

  return (
    <>
      <Navbar />
      <div className="resources-container">
        <header className="resources-header">
          <div>
            <h1>Learning Resources</h1>
            <p>Explore study materials shared by the community</p>
          </div>
          <button className="btn-upload-resource">
            + Upload Resource (+20 pts)
          </button>
        </header>

        <div className="resources-controls">
          <input 
            type="text" 
            className="search-bar"
            placeholder="🔍 Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="filter-section">
            <div className="filter-group">
              <label>Subject:</label>
              <select value={filterSubject} onChange={(e) => setFilterSubject(e.target.value)}>
                <option value="all">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="chemistry">Chemistry</option>
                <option value="physics">Physics</option>
                <option value="history">History</option>
                <option value="english">English</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Type:</label>
              <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                <option value="all">All Types</option>
                <option value="notes">Notes</option>
                <option value="video">Videos</option>
                <option value="quiz">Quizzes</option>
                <option value="flashcards">Flashcards</option>
                <option value="test">Practice Tests</option>
              </select>
            </div>
          </div>
        </div>

        <div className="resources-stats">
          <span>Showing {filteredResources.length} resources</span>
        </div>

        <div className="resources-grid">
          {filteredResources.map(resource => (
            <div key={resource.id} className="resource-card">
              <div className="resource-card-header">
                <span className="resource-type-icon">{getTypeIcon(resource.type)}</span>
                <span 
                  className="resource-difficulty"
                  style={{ backgroundColor: getDifficultyColor(resource.difficulty) }}
                >
                  {resource.difficulty}
                </span>
              </div>

              <h3>{resource.title}</h3>
              
              <div className="resource-meta">
                <span className="resource-subject">{resource.subject}</span>
                <span className="resource-type">{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
              </div>

              <div className="resource-info">
                <div className="info-item">
                  <span>👤 {resource.uploader}</span>
                </div>
                <div className="info-item">
                  <span>⬇️ {resource.downloads} downloads</span>
                </div>
              </div>

              <button 
                className="btn-download"
                onClick={() => handleDownload(resource.id, resource.title)}
              >
                Download
              </button>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="no-results">
            <p>No resources found matching your criteria</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Resources;