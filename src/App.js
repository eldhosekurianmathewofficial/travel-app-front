import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path = "/" element={<><NavBar/><Add/></>} />
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
