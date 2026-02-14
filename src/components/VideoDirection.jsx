import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film, Clock, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './VideoDirection.css';

const VideoDirection = () => {
    const { videoDirection } = portfolioData;
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Property Showcases', 'Brand Stories', 'Social Reels', 'Commercial Ads'];

    const filteredItems = filter === 'All'
        ? videoDirection
        : videoDirection.filter(item => item.category === filter);

    return (
        <section className="video-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-gradient">Video Direction</h2>
                    <p className="section-subtitle">Visual storytelling from script to screen.</p>
                </div>

                <div className="filter-container">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="video-grid grid grid-cols-1 md:grid-cols-3">
                    <AnimatePresence>
                        {filteredItems.map((item, index) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="video-card"
                                onClick={() => setSelectedVideo(item)}
                            >
                                <div
                                    className="video-thumbnail-wrapper"
                                    onMouseEnter={(e) => e.currentTarget.querySelector('video').play()}
                                    onMouseLeave={(e) => {
                                        const v = e.currentTarget.querySelector('video');
                                        v.pause();
                                        v.currentTime = 0;
                                    }}
                                >
                                    {item.videoUrl ? (
                                        <video
                                            src={item.videoUrl}
                                            className="video-thumbnail"
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                            poster={item.thumbnail}
                                        />
                                    ) : (
                                        <img src={item.thumbnail} alt={item.title} className="video-thumbnail" />
                                    )}
                                    <div className="play-overlay">
                                        <div className="play-btn-circle">
                                            <Play fill="white" size={24} />
                                        </div>
                                    </div>
                                    <span className="video-duration">{item.duration}</span>
                                </div>
                                <div className="video-info">
                                    <span className="video-cat">{item.category}</span>
                                    <h3 className="video-title">{item.title}</h3>
                                    <span className="video-client">{item.client}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-backdrop"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="modal-content glass-panel video-modal"
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={() => setSelectedVideo(null)}>
                                <X size={24} />
                            </button>

                            <div className="video-modal-grid">
                                <div className="video-player-col">
                                    {selectedVideo.videoUrl ? (
                                        <div className="video-wrapper">
                                            <video
                                                controls
                                                autoPlay
                                                src={selectedVideo.videoUrl}
                                                poster={selectedVideo.thumbnail}
                                                className="modal-video"
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    ) : (
                                        <div className="video-player-placeholder">
                                            <Play size={48} className="text-secondary" />
                                            <p>Video Coming Soon</p>
                                        </div>
                                    )}
                                </div>

                                <div className="video-details-col">
                                    <span className="modal-cat">{selectedVideo.category}</span>
                                    <h2 className="modal-title">{selectedVideo.title}</h2>

                                    <div className="video-meta">
                                        <div className="meta-item">
                                            <User size={16} />
                                            <span>{selectedVideo.client}</span>
                                        </div>
                                        <div className="meta-item">
                                            <Clock size={16} />
                                            <span>{selectedVideo.duration}</span>
                                        </div>
                                    </div>

                                    <div className="director-notes">
                                        <div className="director-notes">
                                            <h3><Film size={18} /> Director's Notes</h3>

                                            <div className="note-section">
                                                <h4 className="text-accent">The Brief</h4>
                                                <p>{selectedVideo.brief}</p>
                                            </div>

                                            <div className="note-section">
                                                <h4 className="text-accent">Creative Approach</h4>
                                                <p>{selectedVideo.approach}</p>
                                            </div>

                                            <div className="note-section">
                                                <h4 className="text-accent">Key Results</h4>
                                                <p>{selectedVideo.results}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default VideoDirection;
