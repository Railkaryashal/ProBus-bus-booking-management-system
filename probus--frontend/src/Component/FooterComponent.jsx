import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    const footerStyle = {
      backgroundColor: '#343a40',
      color: '#fff',
    };

    const containerStyle = {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
    };

    const textMutedStyle = {
      fontSize: '0.9rem',
    };

    return (
      <footer style={footerStyle}>
        <div className="container py-3" style={containerStyle}>
          <span className="text-muted" style={textMutedStyle}>
            All rights reserved 2023 @YashalRailkar
          </span>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
