import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For routing
import { Header } from './components/Header';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/accounts" element={<Accounts />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;