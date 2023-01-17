import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PhotoDetail from './pages/gallery/photoDetail';
import HomePage from './pages/homePage';
import Index from './pages/gallery';
import List from './pages/gallery/list';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' index element={<HomePage/>}/>
          <Route path="/gallery" element={<Index />} />
          <Route path="/gallery/albums" element={<List/>} />
          <Route path="/gallery/albums/:title" element={<PhotoDetail/>} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
