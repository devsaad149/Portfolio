import React from 'react';
import { LinkedInIcon, WhatsAppIcon } from './SocialIcons';

const Footer = () => {
    const year = new Date().getFullYear();

    const styles = {
        footer: {
            padding: '2rem 0',
            background: 'var(--bg-nav)', /* Midnight Blue */
            borderTop: 'none',
            textAlign: 'center',
            color: 'var(--text-secondary)', /* Grey for secondary text */
            fontSize: '0.9rem',
        },
        socials: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '1.5rem',
        },
        iconLink: {
            color: 'var(--accent-secondary)', /* Golden Yellow */
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
        },
        badge: {
            marginTop: '1rem',
            fontSize: '0.8rem',
            opacity: 0.6,
            color: 'var(--text-light)'
        }
    };

    return (
        <footer style={styles.footer}>
            <div className="container">
                <div style={styles.socials}>
                    <a href="https://www.linkedin.com/in/saad-sohail-2b40a5250" target="_blank" rel="noopener noreferrer" style={styles.iconLink} aria-label="LinkedIn">
                        <LinkedInIcon size={24} />
                    </a>
                    <a href="https://wa.me/923180820643" target="_blank" rel="noopener noreferrer" style={styles.iconLink} aria-label="WhatsApp">
                        <WhatsAppIcon size={24} />
                    </a>
                </div>
                <p>&copy; {year} Saad Sohail. All Rights Reserved.</p>
                <div style={styles.badge}>Built with Antigravity</div>
            </div>
        </footer>
    );
};

export default Footer;
