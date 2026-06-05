import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EventCard = ({ event }) => {
  return (
    <Link to={`/events/${event._id}`} style={{ textDecoration: 'none' }}>
      <Card className="event-card h-100">
        <Card.Img variant="top" src={event.imageUrl} alt={event.title} />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="text-white text-truncate" style={{ maxWidth: '75%' }}>
              {event.title}
            </Card.Title>
            <Badge className="price-badge">
              {event.price === 0 ? 'Free' : `$${event.price}`}
            </Badge>
          </div>
          <Card.Text className="text-truncate">
            {event.description}
          </Card.Text>
          <div className="mt-auto">
            <div className="d-flex align-items-center mb-1 text-light-gray" style={{ fontSize: '0.85rem', color: 'var(--text-light-gray)' }}>
              <FaCalendarAlt className="me-2 text-accent" style={{ color: 'var(--accent-color)' }} />
              {new Date(event.date).toLocaleDateString()} at {event.time}
            </div>
            <div className="d-flex align-items-center text-light-gray" style={{ fontSize: '0.85rem', color: 'var(--text-light-gray)' }}>
              <FaMapMarkerAlt className="me-2 text-accent" style={{ color: 'var(--accent-color)' }} />
              {event.location}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default EventCard;
