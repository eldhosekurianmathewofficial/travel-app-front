import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path = "/" element={<><NavBar/><Add/></>} />
        <Route path = "/view" element={<><NavBar/><View/></>} />
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
