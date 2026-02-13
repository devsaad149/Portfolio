import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
    const { socialLinks } = portfolioData;

    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="contact-content text-center"
                >
                    <h2 className="section-title text-gradient">Let's Create Together</h2>
                    <p className="contact-subtitle">
                        Ready to elevate your brand? I'm currently available for freelance projects and full-time opportunities.
                    </p>

                    <div className="contact-actions">
                        <a href="mailto:hello@saadsohail.com" className="btn-primary hover-lift">
                            Start a Conversation <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="/portfolio.pdf" className="btn-secondary hover-lift">
                            Download Portfolio PDF <Download size={18} style={{ marginLeft: '8px' }} />
                        </a>
                    </div>

                    <div className="social-links">
                        <a href={socialLinks.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} />
                        </a>
                        <a href={socialLinks.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                            <Instagram size={24} />
                        </a>
                        <a href={socialLinks.email} className="social-link">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
