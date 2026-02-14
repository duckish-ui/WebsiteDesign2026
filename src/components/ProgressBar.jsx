import './ProgressBar.css';

function ProgressBar({ subject, percentage, color = '#667eea' }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-header">
        <span className="progress-subject">{subject}</span>
        <span className="progress-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar-track">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;