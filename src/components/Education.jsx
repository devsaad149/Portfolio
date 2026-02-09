import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Business Administration (BBA)",
            institution: "Arid University",
            year: "2021 - 2025"
        },
        {
            degree: "F.Sc (Intermediate)",
            institution: "APS, PMA Kakul",
            year: "2019 - 2021"
        }
    ];

    return (
        <section id="education" className="education py-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h5 className="section-subtitle">Learning</h5>
                    <h2 className="section-title">Education</h2>
                </motion.div>

                <div className="education__grid mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="education-card p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all group"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform">
                                    <GraduationCap size={28} />
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-indigo-500 uppercase tracking-wider">{edu.year}</span>
                                    <h3 className="text-xl font-bold text-white mt-1 mb-2 font-display">{edu.degree}</h3>
                                    <p className="text-zinc-400 font-medium">{edu.institution}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
