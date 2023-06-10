import React, { useState } from 'react';
import axios from 'axios';

const SearchWithNumberPlate = () => {
  const [numberPlate, setNumberPlate] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [searchClick, setSearchClicked] = useState(false);
  const [error, setError] = useState('');
  const [buses, setBuses] = useState([]); // Initialize buses as an empty array

  const handleSearch = () => {
    setError('');
    setSearchResults(null);

    axios
      .get(`http://localhost:8090/getBusByNumberPlate/${numberPlate}`)
      .then((response) => {
        if (response.status === 402) {
          throw new Error('');
        }
        return response.data;
      })
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      });

    setSearchClicked(true);
  };

  const deleteBus = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8090/${id}`);
      console.log(response.data); // Log the response from the server
      setBuses(buses.filter((bus) => bus.numberPlate !== id)); // Update the buses state after deleting
      setSearchResults(null); // Clear search results after deleting
      alert('Bus deleted successfully! Please refresh to check.');
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  };
  return (
    <div className="container">
      <h1>Search Bus with Number Plate</h1>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Number Plate"
          value={numberPlate}
          onChange={(e) => setNumberPlate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
      {searchClick && (
        <div>
          <h2>Search Results</h2>
          {searchResults === null ? (
            <p className="error">{error}</p>
          ) : (
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{searchResults.numberPlate}</td>
                  <td>{searchResults.busName}</td>
                  <td>{searchResults.capacity}</td>
                  <td>{searchResults.seatPrice}</td>
                  <td>{searchResults.startingTime}</td>
                  <td>{searchResults.arrivalTime}</td>
                  <td>{searchResults.duration}</td>
                  <td>
                  <button onClick={() => deleteBus(searchResults.numberPlate)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchWithNumberPlate;
