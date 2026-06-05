import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavbarComponent />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
