import React, { useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { LinkedInIcon, WhatsAppIcon } from './SocialIcons';
import './Contact.css';

const Contact = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const text = `Hello Saad, I am ${formData.name}. %0A%0ASubject: ${formData.subject || 'Portfolio Query'}%0A%0AMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/923180820643?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="contact section-fullscreen" ref={ref}>
            <div className="container contact__grid">
                <div className={`contact__info reveal ${isVisible ? 'active' : ''}`}>
                    <h5 className="section-subtitle">Get in Touch</h5>
                    <h3>Let's work together</h3>
                    <p className="contact__text">
                        Ready to scale your business? Whether you have a project in mind or just want to
                        chat about digital marketing strategies, I'm here to help.
                    </p>

                    <div className="contact__details">
                        <div className="contact__item">
                            <div className="contact__icon-wrapper">📍</div> Rawalpindi, Pakistan
                        </div>
                        <div className="contact__item">
                            <div className="contact__icon-wrapper">📞</div> +92-318-0820643
                        </div>
                        <div className="contact__item">
                            <div className="contact__icon-wrapper">📧</div> sasaad149@gmail.com
                        </div>
                    </div>

                    <div className="contact__socials">
                        <a href="https://linkedin.com/in/saad-sohail-2b40a5250" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <LinkedInIcon size={20} />
                        </a>
                        <a href="https://wa.me/923180820643" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                            <WhatsAppIcon size={20} />
                        </a>
                    </div>
                </div>

                <form
                    action="https://formspree.io/f/mwszeonl"
                    method="POST"
                    className={`contact__form revealSlide ${isVisible ? 'active' : ''}`}
                    style={{ transitionDelay: '200ms' }}
                >
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" placeholder="Subject (Optional)" value={formData.subject} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <div className="contact__buttons" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button type="submit" className="btn btn--primary">Send via Email</button>
                        <button type="button" onClick={handleWhatsApp} className="btn btn--outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <WhatsAppIcon size={18} /> Chat on WhatsApp
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
