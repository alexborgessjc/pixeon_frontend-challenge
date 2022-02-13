import './App.css';
import { Routes, Route } from 'react-router-dom';
import Schedule from "./pages/Schedule";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Schedule/>} /> 
      </Routes>
    </>    
  );
}

export default App;
