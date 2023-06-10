import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BusListComponent = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    try {
      const response = await axios.get('http://localhost:8090/getallbuses');
      setBuses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBus = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8090/${id}`);
      console.log(response.data); // Log the response from the server
      setBuses(buses.filter((bus) => bus.id !== id)); // Remove the deleted bus from the state
      alert('Bus deleted successfully! Please refresh to check.');
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">Bus List</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Number Plate</th>
              <th>Bus Name</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Capacity</th>
              <th>Seat Price</th>
              <th>Starting Time</th>
              <th>Arrival Time</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id}>
                <td>{bus.numberPlate}</td>
                <td>{bus.busName}</td>
                <td>{bus.source}</td>
                <td>{bus.destination}</td>
                <td>{bus.capacity}</td>
                <td>{bus.seatPrice}</td>
                <td>{bus.startingTime}</td>
                <td>{bus.arrivalTime}</td>
                <td>{bus.duration}</td>
                <td>
                  <button onClick={() => deleteBus(bus.numberPlate)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusListComponent;
