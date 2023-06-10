import React, { useState} from 'react';
import axios from 'axios';
import Payment from './Payment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TransactionForm = ({ selectedBus }) => {
  const [noOfPassenger, setNoOfPassenger] = useState(1);
  const [tripDate, setTripDate] = useState('');
  const [email, setEmail] = useState('');
  const [passengerList, setPassengerList] = useState([]);
  const [transactionDetails, setTransactionDetails] = useState(null);
  

  const handleTransaction = async (transactionModel) => {
    try {
      const response = await axios.post('http://localhost:8090/maketransaction', transactionModel);
      console.log('Transaction successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('Transaction failed:', error);
      throw error;
    }
  };

  const handleSubmit = () => {
    const transactionModel = {
      numberPlate: selectedBus.numberPlate,
      source: selectedBus.source,
      destination: selectedBus.destination,
      startingTime: selectedBus.startingTime,
      noOfPassenger,
      transactionId: 0,
      tripDate,
      email,
      passengerList,
    };

    handleTransaction(transactionModel)
      .then((response) => {
        const transactionDetails = response;
        setTransactionDetails(transactionDetails);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.data.message);
        console.error('Transaction failed:', error);
      });
  };

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengerList = [...passengerList];
    if (!updatedPassengerList[index]) {
      updatedPassengerList[index] = {};
    }
    updatedPassengerList[index][field] = value;
    setPassengerList(updatedPassengerList);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="container py-4">
      {transactionDetails ? (
        <Payment transaction={transactionDetails} />
      ) : (
      <div>
      <h2 className="mb-4">Transaction Form</h2>
      <div className="row">
    <div className="col">
      <div className="form-group">
        <label>Number Plate:</label>
        <input
          type="text"
          className="form-control"
          value={selectedBus.numberPlate}
          disabled
        />
      </div>
      <div className="form-group">
        <label>Source:</label>
        <input
          type="text"
          className="form-control"
          value={selectedBus.source}
          disabled
        />
      </div>
      <div className="form-group">
        <label>Destination:</label>
        <input
          type="text"
          className="form-control"
          value={selectedBus.destination}
          disabled
        />
      </div>
      <div className="form-group">
        <label>Starting Time:</label>
        <input
          type="text"
          className="form-control"
          value={selectedBus.startingTime}
          disabled
        />
      </div>
    </div>
    <div className="col">
      <div className="form-group">
        <label>Email:</label>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Trip Date:</label>
        <DatePicker
          selected={tripDate}
          onChange={(date) => setTripDate(date)}
          minDate={today}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>No. of Passengers:</label>
        <input
          type="number"
          className="form-control"
          value={noOfPassenger}
          onChange={(e) => setNoOfPassenger(parseInt(e.target.value))}
        />
      </div>
    </div>
  </div>
      <div className="passenger-list my-4">
        {Array.from({ length: noOfPassenger }).map((_, index) => (
          <div key={index} className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Passenger {index + 1}</h4>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={passengerList[index]?.passengerName || ''}
                      onChange={(e) =>
                        handlePassengerChange(index, 'passengerName', e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Age:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={passengerList[index]?.passengerAge || ''}
                      onChange={(e) =>
                        handlePassengerChange(index, 'passengerAge', parseInt(e.target.value))
                      }
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Gender:</label>
                    <select
                      className="form-control"
                      value={passengerList[index]?.passengerGender || ''}
                      onChange={(e) =>
                        handlePassengerChange(index, 'passengerGender', e.target.value)
                      }
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        style={{
          width: '100%',
          maxWidth: '300px',
          padding: '0.75rem 1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '0.25rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
      </div>
      )}
    </div>
  );
};

export default TransactionForm;
