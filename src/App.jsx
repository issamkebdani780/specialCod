import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componenets/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen transition-colors duration-500">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;