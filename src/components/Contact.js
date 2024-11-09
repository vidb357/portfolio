import React from 'react';
import './Contact.css';  // Make sure you have custom styles for the Contact section

function Contact() {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>If you'd like to get in touch, feel free to reach out to me through any of the following platforms:</p>

            <div className="contact-links">
                <a href="mailto:vidhibinwal@example.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i> Email
                </a>
                <a href="https://www.linkedin.com/in/vidhi-b-972b93245" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://www.instagram.com/vidb.jpg/" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i> Instagram
                </a>
            </div>
        </section>
    );
}

export default Contact;
