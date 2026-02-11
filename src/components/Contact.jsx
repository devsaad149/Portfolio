import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
        <section id="contact" className="contact section-fullscreen">
            <div className="container contact__grid">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="contact__info"
                >
                    <h5 className="section-subtitle">Get in Touch</h5>
                    <h2 className="section-title">Let's Build Your Next Successful Campaign</h2>
                    <p className="contact__text">
                        Ready to scale? Whether you have a project in mind or just want to
                        chat about strategy, I'm here to help. I usually respond within 24 hours.
                    </p>

                    <div className="contact__details">
                        <div className="contact__item">
                            <div className="contact__icon-wrapper"><MapPin size={20} /></div>
                            <span>Rawalpindi, Pakistan</span>
                        </div>
                        <div className="contact__item">
                            <div className="contact__icon-wrapper"><Phone size={20} /></div>
                            <span>+92-318-0820643</span>
                        </div>
                        <div className="contact__item">
                            <div className="contact__icon-wrapper"><Mail size={20} /></div>
                            <span>sasaad149@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <a href="https://linkedin.com/in/saad-sohail-2b40a5250" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://wa.me/923180820643" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                            <MessageSquare size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    action="https://formspree.io/f/xjgevgwv"
                    method="POST"
                    className="contact__form"
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
                    <div className="contact__buttons">
                        <button type="submit" className="btn btn--primary">Start a Project</button>
                        <button type="button" onClick={handleWhatsApp} className="btn btn--outline">
                            <MessageSquare size={18} style={{ marginRight: '8px' }} /> Chat on WhatsApp
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
