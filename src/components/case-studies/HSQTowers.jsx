import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Users, MessageCircle, Building, Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CaseStudy.css';

const HSQTowers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="case-study-container">
            {/* Navigation */}
            <nav className="back-nav">
                <Link to="/" className="back-btn">
                    <ArrowLeft size={20} />
                    <span>Back to Portfolio</span>
                </Link>
            </nav>

            {/* Hero Section */}
            <header className="case-study-hero">
                <div className="case-study-hero-bg">
                    {/* Placeholder for hero video/image - using one of the existing files */}
                    <img src="/images/restored/hsq_highway_billboard_1771008038206.png" alt="HSQ Towers Campaign" />
                    <div className="case-study-hero-overlay"></div>
                </div>

                <div className="case-study-hero-content">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="mb-8 flex justify-center"
                    >
                        <img src="/images/social/hsq-logo.jpg" alt="HSQ Towers Logo" className="w-24 h-24 rounded-full border-4 border-yellow-500/30 shadow-2xl" />
                    </motion.div>

                    <motion.span
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="highlight-pill mb-4 inline-block px-4 py-1 rounded-full bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 text-sm font-bold uppercase tracking-wider"
                    >
                        Case Study
                    </motion.span>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="case-study-title text-gradient"
                    >
                        HSQ Towers
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="case-study-subtitle"
                    >
                        Viral Property Launch Campaign Driving 700 Bookings in 3 Months
                    </motion.p>

                    {/* Quick Stats Bar */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="stats-grid mt-12"
                    >
                        <div className="stat-item">
                            <span className="stat-value text-yellow-500">3.78M</span>
                            <span className="stat-label">Impressions</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value text-blue-400">700+</span>
                            <span className="stat-label">Bookings</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value text-green-400">12+</span>
                            <span className="stat-label">Videos Directed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value text-purple-400">Rs 702K</span>
                            <span className="stat-label">Ad Spend</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            <div className="container mx-auto px-4 max-w-5xl">

                {/* SECTION 1: THE CHALLENGE */}
                <section className="case-study-section">
                    <div className="section-grid">
                        <div className="section-content">
                            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                The Challenge
                            </motion.h2>
                            <div className="w-20 h-1 bg-yellow-500 mb-8"></div>
                            <p>
                                In November 2025, Vorniqo Solutions tasked our newly formed marketing team with launching HSQ Towers—a premium residential property in Jhika Gali, Murree—in one of Pakistan's most competitive real estate markets.
                            </p>
                            <h3 className="text-xl font-bold text-white mb-4">The Obstacles</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-400 mb-6">
                                <li>Zero brand awareness in a saturated market</li>
                                <li>Generic property marketing failing to differentiate</li>
                                <li>Luxury mountain properties competing on price, not experience</li>
                                <li>Target audience (affluent buyers) overwhelmed by traditional ads</li>
                                <li>3-month window to establish brand and drive bookings</li>
                            </ul>
                        </div>
                        <div className="section-image rounded-xl overflow-hidden shadow-2xl border border-white/10">
                            <img src="/images/restored/hsq_billboard_mockup_1771008174452.png" alt="HSQ Towers Challenge" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>

                {/* SECTION 2: STRATEGIC APPROACH */}
                <section className="case-study-section">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2>The Strategy</h2>
                        <p className="text-xl text-gray-400">Positioning as a Lifestyle Brand, Not Just Real Estate</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-colors">
                            <div className="bg-yellow-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <MessageCircle className="text-yellow-500" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Emotional Storytelling</h3>
                            <p className="text-gray-400">
                                Moved beyond "3BR apartment" to "Your cozy retreat." Focused on snow, warm luxury, and family moments.
                            </p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
                            <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <Play className="text-blue-500" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Video-First Approach</h3>
                            <p className="text-gray-400">
                                Scripted and directed 12+ cinematic video campaigns. Emotional narratives performed 3-5x better than static ads.
                            </p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-colors">
                            <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <TrendingUp className="text-green-500" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Data-Driven Optimization</h3>
                            <p className="text-gray-400">
                                Daily budget reallocation. Killed underperforming creatives within 48 hours to maximize ROAS.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: EXECUTION */}
                <section className="case-study-section">
                    <div className="section-grid">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute -inset-4 bg-yellow-500/20 blur-3xl opacity-30 rounded-full"></div>
                            {/* UPDATED: Consistently use the HSQ proof image for analytics dashboard */}
                            <img src="/images/analytics/hsq-proof.jpg" alt="Analytics Dashboard" className="relative z-10 rounded-xl shadow-2xl border border-white/10" />
                        </div>
                        <div className="section-content order-1 md:order-2">
                            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                Execution: 76 Days, 32 Campaigns
                            </motion.h2>
                            <div className="w-20 h-1 bg-blue-500 mb-8"></div>

                            <h3 className="text-xl font-bold text-white mb-4">Content Production</h3>
                            <p className="mb-6">
                                As Campaign Director, I led a 5-person team to produce over 30 unique assets. We focused on "Snow outside, Warm luxury inside" as our core visual hook, which went viral with 862K impressions.
                            </p>

                            <h3 className="text-xl font-bold text-white mb-4">Meta Advertising Strategy</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-sm font-bold mt-1">Targeting</span>
                                    <span className="text-gray-400">Ages 30-55, Expats, Investors. Interest-based + Lookalike audiences.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm font-bold mt-1">Structure</span>
                                    <span className="text-gray-400">Messaging Conversions (Leads), Traffic (Awareness), Engagement (Social Proof).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: RESULTS */}
                <section className="case-study-section bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10 my-16">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
                            Viral Success + Business Impact
                        </h2>
                        <p className="text-xl text-gray-400">RS 702K Spends • 3.78M Impressions • 600+ Bookings</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">3.78M</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest">Total Impressions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">1.37M</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest">Total Reach</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">6,368</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest">Conversations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">Rs 110</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest">Cost Per Convo</div>
                        </div>
                    </div>

                    <div className="bg-black/40 rounded-xl p-8 border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <TrendingUp className="text-green-500" /> Top Performing Campaigns
                        </h3>
                        <div className="space-y-6">
                            <div className="border-b border-white/10 pb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-lg text-white">"Snow outside. Warm luxury inside"</span>
                                    <span className="text-green-400 font-mono">VIRAL CHAMPION</span>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-sm text-gray-400">
                                    <div>Imp: 862,266</div>
                                    <div>Reach: 372,652</div>
                                    <div>Convos: 2,432</div>
                                </div>
                            </div>
                            <div className="border-b border-white/10 pb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-lg text-white">"Half Price Luxury Offer"</span>
                                    <span className="text-yellow-400 font-mono">CONVERSION DRIVER</span>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-sm text-gray-400">
                                    <div>Imp: 297,429</div>
                                    <div>Reach: 130,411</div>
                                    <div>Convos: 1,361</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: ASSETS */}
                <section className="case-study-section">
                    <h2 className="text-center mb-12">Campaign Assets</h2>
                    <div className="gallery-grid">
                        <div className="gallery-item group">
                            <video src="/videos/hsq-cta.mp4" controls className="w-full h-full object-cover" poster="/images/restored/hsq_billboard_mockup_1771007886208.png"></video>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold text-sm">Action-Driven CTA Reel</p>
                            </div>
                        </div>
                        <div className="gallery-item group">
                            <video src="/videos/hsq-reach.mp4" controls className="w-full h-full object-cover" poster="/images/restored/hsq_highway_billboard_1771008038206.png"></video>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold text-sm">Broad Reach Campaign</p>
                            </div>
                        </div>
                        <div className="gallery-item group">
                            <video src="/videos/lifestyle-showcase.mp4" controls className="w-full h-full object-cover"></video>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold text-sm">Lifestyle & Amenities Showcase</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: CONCLUSION */}
                <section className="case-study-section text-center max-w-3xl mx-auto">
                    <h2 className="mb-8">Campaign Impact</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        The HSQ Towers campaign proved that real estate marketing doesn't have to be boring. By leading with emotion, optimizing relentlessly, and creating video content that actually resonated, we took a brand from zero to market leader in 76 days.
                    </p>
                    <div className="p-6 border border-yellow-500/30 rounded-xl bg-yellow-500/5 inline-block">
                        <p className="font-bold text-yellow-500 uppercase tracking-widest text-sm mb-2">Key Achievement</p>
                        <p className="text-2xl text-white font-bold">600-700 Bookings Worth Millions in Revenue</p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default HSQTowers;
