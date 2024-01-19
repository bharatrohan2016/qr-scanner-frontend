import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import FarmerProfile from "./components/FarmerProfile";
import Login from "./components/Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/farmerprofile/:paramsone" element={<ProtectedRoute><FarmerProfile /></ProtectedRoute>} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
