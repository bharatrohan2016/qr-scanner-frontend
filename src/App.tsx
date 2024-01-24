import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
