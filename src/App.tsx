import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from 'react';
import WatchVideo from './pages/WatchVideo';

function App() {
  const [bigSideMenu, setBigSideMenu] = useState(true);

  return (
    <BrowserRouter>
      <Navbar bigSideMenu={bigSideMenu} setBigSideMenu={setBigSideMenu}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<WatchVideo />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
