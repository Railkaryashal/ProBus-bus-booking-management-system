import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function UserComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
    localStorage.setItem('userName', 'user');
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
    localStorage.removeItem('userName');
    
    window.location = '/';
  };

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    if (localStorage.getItem('userName')!==null) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      {!isLoggedIn ? (
        <div className="login-form">
          <h2 className="mb-3">User Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="user-welcome">
          <div className="welcome-message mb-3">
            <h2>Welcome, User!</h2>
          </div>
          <div className="search-buttons">
            <div className="mb-3">
              <Link to="/searchBus" className="btn btn-primary">
                Search Bus
              </Link>
            </div>
            <div className="mb-3">
              <Link to="/searchBusWithName" className="btn btn-primary">
                Search Bus with Name
              </Link>
            </div>
            <div className="mb-3">
              <Link to="/bus-search-with-capacity" className="btn btn-primary">
                Search Bus with Capacity
              </Link>
            </div>
          </div>
          <div className="logout-button mt-5">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
