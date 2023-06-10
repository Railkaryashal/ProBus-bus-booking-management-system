import { Link } from 'react-router-dom';
import busImage from './bus.jpg';

export function Home() {
  const containerStyle = {
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
  };

  const buttonsStyle = {
    marginBottom: '2rem',
  };

  const adminButtonStyle = {
    marginRight: '1rem',
  };

  const busImageStyle = {
    width: '50%',
    maxWidth: '500px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
  };

  const creditStyle = {
    fontSize: '0.8rem',
    marginTop: '1rem',
    color: 'gray',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle} className="title mt-5">
        Welcome to Bus Booking Website
      </h2>
      <p style={descriptionStyle} className="description">
        Enjoy hassle-free bus booking and search for buses!
      </p>
      <p style={descriptionStyle} className="description">
        Additionally, easily manage bus details with just a few clicks.
      </p>
      <div style={buttonsStyle} className="buttons">
        <Link to="/admin" style={adminButtonStyle} className="btn btn-primary adminButton">
          Login as Admin
        </Link>
        <Link to="/user" className="btn btn-primary userButton">
          Login as User
        </Link>
      </div>
      <img src={busImage} alt="Bus" style={busImageStyle} className="busImage img-fluid mt-5" />
      <p style={creditStyle} className="credit">
        Image by John Doe from Unsplash
      </p>
    </div>
  );
}
