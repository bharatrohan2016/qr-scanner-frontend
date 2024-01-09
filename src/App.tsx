import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import FarmerProfile from "./components/FarmerProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmerprofile" element={<FarmerProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
