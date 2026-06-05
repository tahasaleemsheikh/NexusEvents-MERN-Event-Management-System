import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5><span style={{ color: 'var(--accent-color)' }}>Nexus</span>Events</h5>
            <p>Your premier platform for discovering and organizing extraordinary events worldwide.</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" style={{ color: 'var(--text-light-gray)', textDecoration: 'none' }}>Home</a></li>
              <li><a href="/create-event" style={{ color: 'var(--text-light-gray)', textDecoration: 'none' }}>Create Event</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@nexusevents.com<br/>Phone: +1 (555) 123-4567</p>
          </Col>
        </Row>
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <p className="mb-0">&copy; {new Date().getFullYear()} NexusEvents. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
