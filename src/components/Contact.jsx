import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { LinkedInIcon, WhatsAppIcon } from './SocialIcons';
import './Contact.css';

const Contact = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

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

                <form className={`contact__form revealSlide ${isVisible ? 'active' : ''}`} style={{ transitionDelay: '200ms' }}>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Subject (Optional)" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn--primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
