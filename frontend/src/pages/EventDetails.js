import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert, Card, Badge } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaCalendarAlt, FaMapMarkerAlt, FaUserTie, FaMoneyBillWave } from 'react-icons/fa';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/events/${id}`);
        setEvent(res.data.data);
        setLoading(false);
      } catch (err) {
        setError('Event not found or failed to load.');
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5 my-5">
        <Spinner animation="border" style={{ color: 'var(--accent-color)' }} />
      </div>
    );
  }

  if (error || !event) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
        <Link to="/" className="btn btn-outline-light mt-3">Back to Home</Link>
      </Container>
    );
  }

  return (
    <div>
      {/* Banner */}
      <div style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(17, 17, 17, 1)), url("${event.imageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '2rem'
      }}>
        <Container>
          <Badge className="price-badge mb-3 fs-6 px-3 py-2">
            {event.price === 0 ? 'Free Event' : `$${event.price}`}
          </Badge>
          <h1 className="display-4 fw-bold text-white mb-2">{event.title}</h1>
        </Container>
      </div>

      <Container className="my-5">
        <Row>
          <Col lg={8} className="mb-4">
            <Card style={{ backgroundColor: 'var(--secondary-black)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Card.Body className="p-4">
                <h3 className="text-white mb-3">About this Event</h3>
                <p style={{ color: 'var(--text-light-gray)', lineHeight: '1.8' }}>
                  {event.description}
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card style={{ backgroundColor: 'var(--secondary-black)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Card.Body className="p-4">
                <h4 className="text-white mb-4">Event Details</h4>
                
                <div className="d-flex align-items-start mb-4">
                  <FaCalendarAlt className="fs-4 me-3 mt-1" style={{ color: 'var(--accent-color)' }} />
                  <div>
                    <h6 className="text-white mb-1">Date and Time</h6>
                    <span style={{ color: 'var(--text-light-gray)' }}>
                      {new Date(event.date).toLocaleDateString()}<br/>
                      {event.time}
                    </span>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <FaMapMarkerAlt className="fs-4 me-3 mt-1" style={{ color: 'var(--accent-color)' }} />
                  <div>
                    <h6 className="text-white mb-1">Location</h6>
                    <span style={{ color: 'var(--text-light-gray)' }}>
                      {event.location}
                    </span>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <FaUserTie className="fs-4 me-3 mt-1" style={{ color: 'var(--accent-color)' }} />
                  <div>
                    <h6 className="text-white mb-1">Organizer</h6>
                    <span style={{ color: 'var(--text-light-gray)' }}>
                      {event.organizer}
                    </span>
                  </div>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventDetails;
