import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, ArrowRight, Download, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const getAssetPath = (path) => {
    if (!path) return path;
    if (path.startsWith('http')) return path;
    const isProduction = import.meta.env.PROD;
    const base = isProduction ? '/Portfolio' : '';
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${normalizedPath}`;
};

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
                        <a href={socialLinks.email} className="btn-primary hover-lift">
                            Start a Conversation <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href={getAssetPath(socialLinks.portfolioPdf)} className="btn-secondary hover-lift" target="_blank" rel="noopener noreferrer">
                            Download Portfolio PDF <Download size={18} style={{ marginLeft: '8px' }} />
                        </a>
                    </div>

                    <div className="social-links-container">
                        <div className="social-links">
                            <a href={socialLinks.linkedin} className="social-link linkedin" target="_blank" rel="noopener noreferrer" title="Connect on LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href={socialLinks.instagram} className="social-link instagram" target="_blank" rel="noopener noreferrer" title="View on Instagram">
                                <Instagram size={24} />
                            </a>
                            <a href={socialLinks.email} className="social-link email" title="Send an Email">
                                <Mail size={24} />
                            </a>
                            <a href={socialLinks.whatsapp} className="social-link whatsapp" target="_blank" rel="noopener noreferrer" title="Message on WhatsApp">
                                <MessageCircle size={24} />
                            </a>
                        </div>

                        <div className="contact-footer mt-8 text-gray-400 text-sm">
                            <p>Saad Sohail | Rawalpindi, Pakistan</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
