import React, { useState } from 'react';
import axios from 'axios';

const BusFormComponent = () => {
  const [busData, setBusData] = useState({
    numberPlate: '',
    busName: '',
    source: '',
    destination: '',
    capacity: 0,
    seatPrice: 0,
    startingTime: '',
    arrivalTime: '',
  });

  const handleInputChange = (event) => {
    setBusData({
      ...busData,
      [event.target.name]: event.target.value,
    });
  };

  const saveBusData = async () => {
    try {
      const response = await axios.post('http://localhost:8090/addbus', busData);
      console.log('Bus data saved:', response.data);
      alert("Bus added successfully!");
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  };
  

  return (
    <div>
        <div className="contanier">
            <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
            <h2 className='text-center'>Register Bus</h2>
            <div className='card-body'>
            <form>
            <div className='form-group'>
                <label>Number Plate:</label>
                <input
                type="text"
                name="numberPlate"
                className='form-control'
                value={busData.numberPlate}
                onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <label>Bus Name:</label>
                <input
                type="text"
                name="busName"
                className='form-control'
                value={busData.busName}
                onChange={handleInputChange}
                />
                </div>
            <div className='form-group'>
                <label>Source:</label>
                <input
                type="text"
                name="source"
                className='form-control'
                value={busData.source}
                onChange={handleInputChange}
                />
                </div>
            <div className='form-group'>
                <label>Destination:</label>
                <input
                type="text"
                name="destination"
                className='form-control'
                value={busData.destination}
                onChange={handleInputChange}
                />
                </div>
                <div className='form-group'>  
                <label>Capacity:</label>
                <input
                type="number"
                name="capacity"
                value={busData.capacity}
                className='form-control'
                onChange={handleInputChange}
                />
                </div>
                <div className='form-group'> 
                <label>Seat Price:</label>
                <input
                type="number"
                name="seatPrice"
                className='form-control'
                value={busData.seatPrice}
                onChange={handleInputChange}
                />
                </div>
                <div className='form-group'> 
                <label>Starting Time:</label>
                <input
                type="text"
                name="startingTime"
                className='form-control'
                value={busData.startingTime}
                onChange={handleInputChange}
                /></div>
                <div className='form-group'> 
                <label>Arrival Time:</label>
                <input
                type="text"
                name="arrivalTime"
                className='form-control'
                value={busData.arrivalTime}
                onChange={handleInputChange}
                />
                </div>
        <button className='btn btn-success mt-3' onClick={saveBusData}>
          Save
        </button>
      </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default BusFormComponent;
