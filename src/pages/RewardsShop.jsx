import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useUser } from '../context/UserContext';
import './RewardsShop.css';

function RewardsShop() {
  const { user, addPoints } = useUser();
  const [selectedTab, setSelectedTab] = useState('digital');

  const digitalRewards = [
    { id: 1, name: 'Ocean Blue Theme', cost: 50, icon: '🌊', type: 'theme', owned: false },
    { id: 2, name: 'Sunset Orange Theme', cost: 50, icon: '🌅', type: 'theme', owned: false },
    { id: 3, name: 'Forest Green Theme', cost: 50, icon: '🌲', type: 'theme', owned: true },
    { id: 4, name: 'Custom Avatar Frame', cost: 80, icon: '🖼️', type: 'avatar', owned: false },
    { id: 5, name: 'Golden Star Badge', cost: 100, icon: '⭐', type: 'badge', owned: false },
    { id: 6, name: 'Premium Profile Border', cost: 120, icon: '✨', type: 'border', owned: false }
  ];

  const schoolPerks = [
    { id: 7, name: 'Homework Pass', cost: 300, icon: '📝', description: 'Skip one homework assignment', owned: false },
    { id: 8, name: 'Extra Credit Coupon', cost: 250, icon: '💯', description: '+5% on any assignment', owned: false },
    { id: 9, name: 'Priority Tutoring Slot', cost: 150, icon: '⏰', description: 'Book sessions first', owned: false },
    { id: 10, name: 'Study Room Reservation', cost: 200, icon: '🚪', description: 'Reserve quiet study space', owned: false },
    { id: 11, name: 'Extended Library Access', cost: 180, icon: '📚', description: '24/7 library privileges', owned: false },
    { id: 12, name: 'Quiz Retake Token', cost: 220, icon: '🔄', description: 'Retake any quiz once', owned: false }
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Chen', points: 2840, avatar: '👩‍🎓' },
    { rank: 2, name: 'Mike Johnson', points: 2750, avatar: '👨‍🎓' },
    { rank: 3, name: 'Emma Davis', points: 2680, avatar: '👩‍💼' },
    { rank: 4, name: 'Alex Kim', points: 2520, avatar: '👨‍💻' },
    { rank: 5, name: 'Lisa Wang', points: 2340, avatar: '👩‍🔬' },
    { rank: 6, name: 'You', points: user.points, avatar: '😊', isCurrentUser: true },
    { rank: 7, name: 'Tom Brown', points: 2100, avatar: '👨‍🏫' },
    { rank: 8, name: 'Nina Patel', points: 2050, avatar: '👩‍🎨' },
    { rank: 9, name: 'Chris Lee', points: 1980, avatar: '👨‍🔧' },
    { rank: 10, name: 'Amy Taylor', points: 1920, avatar: '👩‍⚕️' }
  ];

  const handlePurchase = (reward) => {
    if (user.points >= reward.cost) {
      addPoints(-reward.cost, `Purchased ${reward.name}`);
      alert(`Successfully purchased ${reward.name}!`);
    } else {
      alert(`Not enough points! You need ${reward.cost - user.points} more points.`);
    }
  };

  const currentRewards = selectedTab === 'digital' ? digitalRewards : schoolPerks;

  return (
    <>
      <Navbar />
      <div className="rewards-container">
        <header className="rewards-header">
          <div>
            <h1>Rewards Shop</h1>
            <p>Spend your hard-earned points on awesome rewards</p>
          </div>
          <div className="points-display">
            <span className="points-label">Your Points:</span>
            <span className="points-value">🏆 {user.points}</span>
          </div>
        </header>

        <div className="rewards-tabs">
          <button 
            className={selectedTab === 'digital' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setSelectedTab('digital')}
          >
            🎨 Digital Rewards
          </button>
          <button 
            className={selectedTab === 'perks' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setSelectedTab('perks')}
          >
            🎁 School Perks
          </button>
          <button 
            className={selectedTab === 'leaderboard' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setSelectedTab('leaderboard')}
          >
            🏆 Leaderboard
          </button>
        </div>

        {selectedTab !== 'leaderboard' ? (
          <div className="rewards-grid">
            {currentRewards.map(reward => (
              <div key={reward.id} className={reward.owned ? 'reward-card owned' : 'reward-card'}>
                <div className="reward-icon">{reward.icon}</div>
                <h3>{reward.name}</h3>
                {reward.description && <p className="reward-description">{reward.description}</p>}
                <div className="reward-footer">
                  <span className="reward-cost">{reward.cost} pts</span>
                  {reward.owned ? (
                    <button className="btn-owned" disabled>Owned ✓</button>
                  ) : (
                    <button 
                      className="btn-purchase"
                      onClick={() => handlePurchase(reward)}
                      disabled={user.points < reward.cost}
                    >
                      {user.points >= reward.cost ? 'Purchase' : 'Not Enough Points'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="leaderboard-section">
            <div className="leaderboard-podium">
              <div className="podium-place second">
                <div className="podium-avatar">{leaderboard[1].avatar}</div>
                <div className="podium-name">{leaderboard[1].name}</div>
                <div className="podium-points">{leaderboard[1].points} pts</div>
                <div className="podium-rank">🥈 2nd</div>
              </div>
              <div className="podium-place first">
                <div className="podium-avatar">{leaderboard[0].avatar}</div>
                <div className="podium-name">{leaderboard[0].name}</div>
                <div className="podium-points">{leaderboard[0].points} pts</div>
                <div className="podium-rank">🥇 1st</div>
              </div>
              <div className="podium-place third">
                <div className="podium-avatar">{leaderboard[2].avatar}</div>
                <div className="podium-name">{leaderboard[2].name}</div>
                <div className="podium-points">{leaderboard[2].points} pts</div>
                <div className="podium-rank">🥉 3rd</div>
              </div>
            </div>

            <div className="leaderboard-list">
              {leaderboard.map(entry => (
                <div 
                  key={entry.rank} 
                  className={entry.isCurrentUser ? 'leaderboard-entry current-user' : 'leaderboard-entry'}
                >
                  <span className="entry-rank">#{entry.rank}</span>
                  <span className="entry-avatar">{entry.avatar}</span>
                  <span className="entry-name">{entry.name}</span>
                  <span className="entry-points">{entry.points} pts</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default RewardsShop;