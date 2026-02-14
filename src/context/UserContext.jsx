import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Student',
    points: 150,
    streak: 5,
    completedQuizzes: 12,
    attendedSessions: 8
  });

  const addPoints = (amount, reason) => {
    setUser(prev => ({
      ...prev,
      points: prev.points + amount
    }));
    
    // Log the transaction for debugging
    console.log(`Points ${amount > 0 ? 'added' : 'spent'}: ${amount} (${reason})`);
  };

  const updateUser = (updates) => {
    setUser(prev => ({
      ...prev,
      ...updates
    }));
  };

  return (
    <UserContext.Provider value={{ user, addPoints, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}