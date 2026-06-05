import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    organizer: '',
    price: 0,
    imageUrl: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Common high-quality Unsplash image URLs for default selection
  const defaultImages = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop', // Concert
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop', // Tech Conference
    'https://images.unsplash.com/photo-1511578314322-379fdf8e6322?q=80&w=2000&auto=format&fit=crop', // Dinner Party
    'https://images.unsplash.com/photo-1523580494112-071d16940a04?q=80&w=2000&auto=format&fit=crop', // Workshop
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // If no image provided, assign a random one from defaults
    const dataToSubmit = { ...formData };
    if (!dataToSubmit.imageUrl) {
      dataToSubmit.imageUrl = defaultImages[Math.floor(Math.random() * defaultImages.length)];
    }

    try {
      await axios.post('http://localhost:5000/api/events', dataToSubmit);
      setLoading(false);
      navigate('/');
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.error || 'Something went wrong');
      console.error(err);
    }
  };

  return (
    <Container className="my-5 py-3">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="text-center mb-5">
            <h2 className="text-white fw-bold">Create New Event</h2>
            <p style={{ color: 'var(--text-light-gray)' }}>Fill in the details below to publish your event to the world.</p>
          </div>

          {error && <Alert variant="danger">{Array.isArray(error) ? error.join(', ') : error}</Alert>}

          <Card style={{ backgroundColor: 'var(--secondary-black)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Card.Body className="p-4 p-md-5">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>Event Title</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="custom-form-control" 
                    placeholder="Enter event name" 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Description</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="custom-form-control" 
                    placeholder="Describe what your event is about" 
                    required 
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Date</Form.Label>
                      <Form.Control 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="custom-form-control" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Time</Form.Label>
                      <Form.Control 
                        type="time" 
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="custom-form-control" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Location</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="custom-form-control" 
                    placeholder="Venue name or address" 
                    required 
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Organizer</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="organizer"
                        value={formData.organizer}
                        onChange={handleChange}
                        className="custom-form-control" 
                        placeholder="Organizer name" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Ticket Price ($)</Form.Label>
                      <Form.Control 
                        type="number" 
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="custom-form-control" 
                        placeholder="0 for free" 
                        min="0"
                        step="0.01"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-5">
                  <Form.Label>Cover Image URL (Optional)</Form.Label>
                  <Form.Control 
                    type="url" 
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="custom-form-control" 
                    placeholder="https://example.com/image.jpg" 
                  />
                  <Form.Text style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Leave blank to use a high-quality default image.
                  </Form.Text>
                </Form.Group>

                <div className="d-grid">
                  <Button type="submit" className="btn-primary-custom btn-lg" disabled={loading}>
                    {loading ? 'Creating...' : 'Publish Event'}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateEvent;
