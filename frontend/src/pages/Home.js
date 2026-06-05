import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import EventCard from '../components/EventCard';

const Home = () => {
  const [eventsList, setEventsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/events');
        setEventsList(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching events", err);
        setError('Failed to fetch events. Make sure the backend is running.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.8), rgba(0, 0, 0, 0.9)), url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Container>
          <h1 className="display-4 text-white fw-bold mb-3">Discover Extraordinary Events</h1>
          <p className="lead text-light mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Join the best conferences, meetups, and concerts happening around you.
          </p>
        </Container>
      </div>

      <Container className="my-5">
        <h2 className="mb-4 text-white">Upcoming Events</h2>
        
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" style={{ color: 'var(--accent-color)' }} />
          </div>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : eventsList.length === 0 ? (
          <p className="text-center py-5">No events found. Be the first to create one!</p>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {eventsList.map((event) => (
              <Col key={event._id}>
                <EventCard event={event} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;
