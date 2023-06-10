import React, { useState } from 'react';
import axios from 'axios';
import TransactionForm from './TransactionForm';

const BusSearchResults = ({ searchResults, handleBooking }) => {
    return (
      <div className="container non-scrollable">
        <h2>Search results</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Number Plate</th>
              <th>Bus Name</th>
              <th>Capacity</th>
              <th>Seat Price</th>
              <th>Starting Time</th>
              <th>Arrival Time</th>
              <th>Duration</th>
              <th>Booking</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((bus) => (
              <tr key={bus.numberPlate}>
                <td>{bus.numberPlate}</td>
                <td>{bus.busName}</td>
                <td>{bus.capacity}</td>
                <td>{bus.seatPrice}</td>
                <td>{bus.startingTime}</td>
                <td>{bus.arrivalTime}</td>
                <td>{bus.duration}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleBooking(bus)}
                  >
                    Book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

const BusSearchWithCapacity = () => {
  const [capacity, setCapacity] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [searchClick, setSearchClicked] = useState(false);
  const [showResultsTable, setShowResultsTable] = useState(true);

  const handleSearch = () => {
    setError('');
    setSearchResults([]);

    axios
      .get(`http://localhost:8090/source/destination/getAllBusCapacityMoreThanRequired`, {
        params: {
          capacity: capacity,
          source: source,
          destination: destination
        }
      })
      .then((response) => {
        setSearchResults(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      });

      setSearchClicked(true);
  };

  const handleBooking = (bus) => {
    setSelectedBus(bus);
    setRedirect(true);
    setShowResultsTable(false);
  };

  return (
    <div className="container">
      <h1>Search Bus with Capacity</h1>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder='Source'
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder='Destination'
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder='Capacity'
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleSearch}>
        Search
      </button>
      {searchClick && (
        <div>
          {searchResults.length === 0 ? (
         (
              <p className="error">
                {error}
              </p>
            )
          ) : (
            showResultsTable && (
              <BusSearchResults
                searchResults={searchResults}
                handleBooking={handleBooking}
              />
            )
          )}
        </div>
      )}
      {redirect && selectedBus && (
        <TransactionForm selectedBus={selectedBus} />
      )}
    </div>
  );
};

export default BusSearchWithCapacity;
