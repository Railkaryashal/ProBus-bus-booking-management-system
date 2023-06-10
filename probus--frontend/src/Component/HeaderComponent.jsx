import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
  render() {
    const headerStyle = {
      backgroundColor: '#343a40',
    };

    const logoStyle = {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#fff',
      textDecoration: 'none',
    };

    return (
      <header style={headerStyle}>
        <nav className="navbar navbar-expand-md navbar-dark justify-content-center">
          <div className="navbar-brand">
            <Link to="/" style={logoStyle}>
              Pro Bus
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
