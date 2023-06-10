import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function AdminComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(localStorage.getItem('userName') || '');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here with username and password
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      localStorage.setItem('userName', 'admin');
    }
    else{
      alert('Admin password or username is incorrect');
    }
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
    localStorage.removeItem('userName');
    setUsername('');
    window.location = '/';
  };

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    if (localStorage.getItem('userName') === 'admin') {
      setIsLoggedIn(true);
    }
  }, []);

  // Render the admin welcome section when isLoggedIn is true
  if (isLoggedIn) {
    return (
      <div className="container d-flex flex-column align-items-center mt-5">
        <div className="admin-welcome">
          <div className="welcome-message mb-3">
            <h2>Welcome, Admin!</h2>
          </div>
          <div className="search-buttons">
            <div className="mb-3">
              <Link to="/addbus" className="btn btn-primary">
                Register Bus
              </Link>
            </div>
            <div className="mb-3">
              <Link to="/getAllBuses" className="btn btn-primary">
                View All Buses
              </Link>
            </div>
            <div className="mb-3">
              <Link to="/numberplate" className="btn btn-primary">
                Search by Number Plate
              </Link>
            </div>
          </div>
          <div className="logout-button mt-5">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    // Render the login form when isLoggedIn is false
    return (
      <div className="container d-flex flex-column align-items-center mt-5">
        <div className="login-form">
          <h2 className="mb-3">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
      </div>
    );
  }
}
