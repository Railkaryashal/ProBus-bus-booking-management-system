import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusListComponent from './Component/BusListComponent';
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import SearchBus from './Component/SearchBus';
import SearchBusWithName from './Component/SearchBusWithName';
import SearchWithNumberPlate from './Component/SerachWithNumberPlate';
import { Home } from './Component/Home';
import BusFormComponent from './Component/BusFormComponent';
import Payment from './Component/Payment';
import { UserComponent } from './Component/UserComponent';
import { AdminComponent } from './Component/AdminComponent';
import BusSearchWithCapacity from './Component/BusSearchWithCapacity';

function App() {
  return (
    <Router>
    <div className="app-container">
      <HeaderComponent />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getAllBuses" element={<BusListComponent />} />
          <Route path="/searchBus" element={<SearchBus />} />
          <Route path="/searchBusWithName" element={<SearchBusWithName />} />
          <Route path="/bus-search-with-capacity" element={<BusSearchWithCapacity />}/>
          <Route path="/addbus" element={<BusFormComponent />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/user" element={<UserComponent />} />
          <Route path="/admin" element={<AdminComponent />} />
          <Route path="/numberplate" element={<SearchWithNumberPlate />} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  </Router>
  );
          }
export default App;