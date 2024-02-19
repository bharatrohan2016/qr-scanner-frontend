import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Farmers from "./components/Farmers";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer" element={<Farmers />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
