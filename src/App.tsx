import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import MainPage from './components/MainPage';
import NavbarNews from './components/NavbarNews';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavbarNews/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        {/* <Route path='/:id' element={}/> */}
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
