import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import Home from './components/Home';
import About from './components/About';

function App() {
    return (<div>
        <HelloWorld />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            </Router>
    </div>);
}

export default App;
