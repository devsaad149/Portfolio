import { Palette, Globe, Video, Layout, TrendingUp, Users, Layers, Zap, Award, Briefcase, Mail } from 'lucide-react';

export const portfolioData = {
    hero: {
        name: "Saad Sohail",
        title: "Art Director & Brand Strategist",
        subtitle: "Building brands from concept to campaign across digital, outdoor, and video",
        cta: "Explore My Work"
    },
    featuredWork: [
        {
            id: 1,
            title: "Evertise Digital",
            subtitle: "Global Agency Leadership",
            role: "Marketing Manager",
            duration: "Apr 2021 - Oct 2024",
            type: "Digital Agency",
            image: "/images/projects/evertise-logo.jpg",
            brief: "Led marketing operations for digital agency serving 8+ international clients. Managed global portfolios, directed cross-functional teams, and drove business development while pursuing full-time education.",
            metrics: ["95% Retention", "8+ Int'l Clients", "Multi-Industry"],
            tags: ["Business Dev", "Team Leadership", "Global Strategy"],
            isLogo: true
        },
        {
            id: 2,
            title: "Vorniqo Solutions",
            subtitle: "Real Estate Ecosystem",
            role: "Marketing Manager",
            duration: "Nov 2025 - Present",
            type: "Real Estate Developer",
            image: "/images/projects/vorniqo-logo.jpg",
            brief: "Established complete marketing infrastructure for 5+ property brands. Built team of 5, directed 20+ video campaigns, and executed performance marketing driving 600+ bookings in 3 months.",
            metrics: ["999K+ Views", "600+ Bookings", "5 Brands"],
            tags: ["Video Direction", "Rapid Scale-Up", "ROI Marketing"],
            isLogo: true
        },
        {
            id: 3,
            title: "Small Business Growth",
            subtitle: "Independent Brand Portfolio",
            role: "Marketing Consultant",
            duration: "Oct 2024 - Nov 2025",
            type: "Multi-Industry",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000",
            brief: "Developed comprehensive brand systems and growth campaigns for diverse small businesses (Cafe de Crave, Petal Perfection, MG Studios, Al Hikam). Delivered measurable ROI on limited budgets.",
            metrics: ["4+ Brands Built", "30K+ Local Reach", "50+ Bookings"],
            tags: ["Brand Identity", "Entrepreneurial Marketing", "Budget Optimization"]
        }
    ],
    socialMedia: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        title: `Campaign ${i + 1}`,
        client: `Client ${["Alpha", "Beta", "Gamma", "Delta"][i % 4]}`,
        category: ["Real Estate", "F&B", "NGO", "Lifestyle"][i % 4],
        image: `https://images.unsplash.com/photo-${[
            "1611162617474-5b21e879e113",
            "1611162616475-46b635cb6868",
            "1611162618071-b39a2ec055fb",
            "1611162616305-435421039f54"
        ][i % 4]}?auto=format&fit=crop&q=80&w=1000`,
        objective: "Drive engagement and innovative brand awareness.",
        metrics: { reach: "1.2M", engagement: "8.5%", conversion: "3.2%" }
    })),
    videoDirection: [
        {
            id: 1,
            title: "Address Fountain - Luxury Living",
            client: "Al Zafar Builders",
            category: "Property Showcases",
            thumbnail: "https://images.unsplash.com/photo-1600596542815-2a429fe536e9?auto=format&fit=crop&q=80&w=1000",
            duration: "1:30",
            brief: "Showcase Address Fountain luxury apartments to high-end buyers, highlighting premium amenities and location advantages.",
            approach: "Cinematic property walkthrough focusing on lifestyle aspirations, combined with testimonial-style messaging to build trust and desire.",
            results: "High engagement on social media, generated qualified leads for premium units.",
            videoUrl: "/videos/address-fountain-luxury.mp4"
        },
        {
            id: 2,
            title: "Address Fountain - Investment",
            client: "Nouman Builder",
            category: "Property Showcases",
            thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
            duration: "1:45",
            brief: "Position Address Fountain as prime investment opportunity, emphasizing ROI potential and payment flexibility.",
            approach: "Investment-focused narrative highlighting location appreciation, payment plans, and future value proposition.",
            results: "Attracted investor inquiries and booking consultations.",
            videoUrl: "/videos/address-fountain-investment.mp4"
        },
        {
            id: 3,
            title: "Al Zafar Brand Story",
            client: "Al Zafar Builders",
            category: "Brand Stories",
            thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000",
            duration: "2:10",
            brief: "Establish Al Zafar Builders as trusted real estate developer with proven track record.",
            approach: "Brand credibility video showcasing completed projects, construction quality, and customer satisfaction.",
            results: "Enhanced brand perception and trust among potential buyers.",
            videoUrl: "/videos/al-zafar-brand-story.mp4"
        },
        {
            id: 4,
            title: "Destination Discovery",
            client: "Hidden Hideouts",
            category: "Social Reels",
            thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
            duration: "0:45",
            brief: "Showcase unique travel destination to inspire bookings and build brand awareness.",
            approach: "Immersive visual storytelling highlighting location beauty, experiences, and peaceful escape from city life.",
            results: "Increased profile engagement and booking inquiries.",
            videoUrl: "/videos/destination-discovery.mp4"
        },
        {
            id: 5,
            title: "Experience the Journey",
            client: "Hidden Hideouts",
            category: "Social Reels",
            thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000",
            duration: "0:50",
            brief: "Create emotional connection with travelers seeking unique experiences.",
            approach: "Cinematic travel content emphasizing adventure, relaxation, and memorable moments.",
            results: "Strong social media engagement and brand following growth.",
            videoUrl: "/videos/experience-the-journey.mp4"
        },
        {
            id: 6,
            title: "HSQ Towers Call to Action",
            client: "HSQ Towers",
            category: "Commercial Ads",
            thumbnail: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1000",
            duration: "0:30",
            brief: "Drive immediate action for property bookings with limited-time offer.",
            approach: "High-energy reel with strong CTA, urgency messaging, and clear booking instructions.",
            results: "Generated 50+ direct inquiries within first week of campaign.",
            videoUrl: "/videos/hsq-cta.mp4"
        },
        {
            id: 7,
            title: "HSQ Towers Reach Campaign",
            client: "HSQ Towers",
            category: "Commercial Ads",
            thumbnail: "https://images.unsplash.com/photo-1431576979088-e820c74fb78a?auto=format&fit=crop&q=80&w=1000",
            duration: "1:00",
            brief: "Maximize reach and brand visibility in target market.",
            approach: "Broad-appeal content highlighting lifestyle benefits, modern design, and convenient location.",
            results: "Achieved 100K+ reach, highest-performing video in campaign.",
            videoUrl: "/videos/hsq-reach.mp4"
        },
        {
            id: 8,
            title: "Lifestyle Showcase",
            client: "HSQ Towers",
            category: "Social Reels",
            thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
            duration: "0:55",
            brief: "Convert awareness into qualified leads through aspirational lifestyle content.",
            approach: "Premium lifestyle positioning with focus on modern amenities, community features, and investment value.",
            results: "150K+ reach, 5K+ engagements, 80+ qualified leads.",
            videoUrl: "/videos/lifestyle-showcase.mp4"
        },
        {
            id: 9,
            title: "Wedding Videography Portfolio",
            client: "MG Studios",
            category: "Brand Stories",
            thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
            duration: "2:30",
            brief: "Showcase videography quality to attract wedding bookings.",
            approach: "Emotional storytelling highlighting cinematic wedding moments and production quality.",
            results: "Increased inquiries during peak wedding season.",
            videoUrl: "/videos/wedding-portfolio.mp4"
        },
        {
            id: 10,
            title: "Vorniqo Company Overview",
            client: "Vorniqo Solutions",
            category: "Brand Stories",
            thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
            duration: "1:15",
            brief: "Position Vorniqo as innovative, tech-forward real estate solutions provider.",
            approach: "Showcased AI-generated property visualizations and modern marketing approach to differentiate from traditional developers.",
            results: "Enhanced brand positioning as industry innovator.",
            videoUrl: "/videos/vorniqo-ai.mp4"
        },
        {
            id: 11,
            title: "Vorniqo Solutions",
            client: "Vorniqo Solutions",
            category: "Brand Stories",
            thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
            duration: "3:00",
            brief: "Communicate Vorniqo's multi-brand portfolio and comprehensive real estate solutions.",
            approach: "Corporate storytelling showcasing breadth of services, completed projects, and client success stories.",
            results: "Established credibility with B2B clients and property investors.",
            videoUrl: "/videos/vorniqo-company.mp4"
        }
    ],
    socialCampaigns: [
        {
            id: 1,
            title: "HSQ Towers",
            client: "Vorniqo Solutions",
            category: "Real Estate",
            platform: "Instagram, Facebook",
            duration: "2.5 months",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
            proof: "https://placehold.co/600x400?text=HSQ+Analytics+Proof",
            objective: "Launch premium residential property in Murree/Jhika Gali market. Drive brand awareness and bookings.",
            strategy: "Lifestyle-first positioning selling dreams, not square footage. Multi-format viral content strategy.",
            stats: {
                spend: "Rs 702K+",
                reach: "1.37M+",
                impressions: "3.78M+",
                results: "600+ Bookings"
            },
            role: "Campaign Director & Strategist",
            color: "blue"
        },
        {
            id: 2,
            title: "Al Hikam Academy",
            client: "Al Hikam Academy",
            category: "Education",
            platform: "Meta Ads",
            duration: "2024-2025",
            image: "https://images.unsplash.com/photo-1577896334614-501f22497645?auto=format&fit=crop&q=80&w=1000",
            proof: ["/images/analytics/al-hikam-proof-1.jpg", "/images/analytics/al-hikam-proof-2.jpg"],
            objective: "Drive enrollment inquiries for Quran education by targeting local parents with value-focused messaging.",
            strategy: "Pain-point targeting focusing on quality education and qualified teachers. Geo-fenced local delivery.",
            stats: {
                spend: "Rs 146K",
                reach: "448K+",
                impressions: "689K+",
                results: "100+ Leads"
            },
            role: "Campaign Strategist",
            color: "green"
        },
        {
            id: 3,
            title: "Petal Perfection",
            client: "Petal Perfection",
            category: "Lifestyle",
            platform: "Instagram",
            duration: "Valentine's Season",
            image: "https://images.unsplash.com/photo-1563241527-30058e1c3e30?auto=format&fit=crop&q=80&w=1000",
            proof: ["/images/analytics/petal-proof-1.jpg", "/images/analytics/petal-proof-2.jpg"],
            objective: "Drive sales during peak season and maintain consistent profile traffic/growth.",
            strategy: "Visual-first seasonal content with emotional storytelling and urgency-driven offers.",
            stats: {
                spend: "Rs 2K+",
                reach: "5K+",
                impressions: "6.7K",
                results: "40% Lift"
            },
            role: "Creative Strategist",
            color: "purple"
        },
        {
            id: 4,
            title: "Cave de Crave",
            client: "Cave de Crave",
            category: "F&B",
            platform: "Meta Ads",
            duration: "Grand Opening",
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1000",
            proof: "https://placehold.co/600x400?text=Cafe+Analytics+Proof",
            objective: "Drive foot traffic and initial customer acquisition for grand opening via 'Hot Meals Deal'.",
            strategy: "High-impact food photography with bold value proposition and direct messaging CTA.",
            stats: {
                spend: "Rs 10K",
                reach: "42K+",
                impressions: "84K+",
                results: "270 Convos"
            },
            role: "Campaign Manager",
            color: "orange"
        }
    ],
    ooh: [
        {
            id: 1,
            title: "Cafe de Crave Promotional Campaign",
            location: "Capital Plaza, G-11 Markaz",
            image: "/images/ooh/cafe-signage.jpg",
            specs: "Grand opening social media campaign with bold visual impact suitable for both digital feeds and potential physical signage."
        },
        {
            id: 2,
            title: "HSQ Towers Social Campaign - Lifestyle Series",
            location: "Islamabad Expressway",
            image: "/images/ooh/hsq-billboard.jpg",
            specs: "Instagram/Facebook campaign showcasing premium lifestyle positioning. Design demonstrates scalability from digital to physical applications."
        },
        {
            id: 3,
            title: "Khubaib Foundation Event Campaign",
            location: "Charity Gala",
            image: "/images/ooh/khubaib-standee.png",
            specs: "Syria earthquake relief social media campaign supporting live fundraising event. Design translated to physical standee at venue."
        },
        {
            id: 4,
            title: "Khubaib Foundation Advocacy Campaign",
            location: "Multiple Venues",
            image: "/images/ooh/khubaib-banner.png",
            specs: "Ongoing social campaign for orphan support programs with emotional storytelling and clear CTAs."
        },
        {
            id: 5,
            title: "Vorniqo Solutions Brand Positioning",
            location: "Blue Area, Islamabad",
            image: "/images/ooh/vorniqo-banner.jpg",
            specs: "B2B thought leadership content establishing software expertise through bold visual statements."
        }
    ],
    brandGuidelines: [
        {
            id: 1,
            name: "Apex Financial",
            colors: ["#003366", "#FFD700", "#F0F0F0"],
            logo: "AF",
            typography: "Helvetica Now"
        },
        {
            id: 2,
            name: "Bloom Organics",
            colors: ["#4CAF50", "#8BC34A", "#FFF9C4"],
            logo: "BO",
            typography: "Brandon Grotesque"
        },
        {
            id: 3,
            name: "Nexus Tech",
            colors: ["#6200EA", "#00B0FF", "#111111"],
            logo: "NX",
            typography: "Inter"
        },
        {
            id: 4,
            name: "Solstice Energy",
            colors: ["#FF5722", "#FFC107", "#212121"],
            logo: "SE",
            typography: "Roboto Mono"
        },
        {
            id: 5,
            name: "Velvet Cafe",
            colors: ["#795548", "#D7CCC8", "#3E2723"],
            logo: "VC",
            typography: "Playfair Display"
        }
    ],
    caseStudies: [
        {
            id: 1,
            title: "Rebranding a National Icon",
            client: "Legacy Corp",
            challenge: "Modernize a 50-year-old brand without alienating loyal customers.",
            strategy: "Evolutionary design approach retaining core equities while refreshing the visual system.",
            results: "15% increase in youth segment engagement."
        },
        {
            id: 2,
            title: "Launch Campaign for SaaS",
            client: "CloudFlow",
            challenge: "Cut through noise in a crowded market with limited budget.",
            strategy: "Hyper-targeted digital campaign focused on pain points.",
            results: "300% ROI in first quarter."
        },
        {
            id: 3,
            title: "Luxury Real Estate Experience",
            client: "The Heights",
            challenge: "Sell off-plan luxury apartments at premium price points.",
            strategy: "Immersive VR experience and high-touch event marketing.",
            results: "Sold out 80% of units in pre-launch."
        }
    ],
    expertise: [
        { icon: Palette, name: "Art Direction", level: 95 },
        { icon: Layout, name: "Brand Strategy", level: 90 },
        { icon: Video, name: "Video Direction", level: 85 },
        { icon: Layers, name: "UI/UX Design", level: 88 },
        { icon: Globe, name: "Digital Campaign", level: 92 },
        { icon: Users, name: "Team Leadership", level: 85 },
        { icon: TrendingUp, name: "Growth Marketing", level: 80 },
        { icon: Zap, name: "Motion Graphics", level: 75 }
    ],
    experience: [
        {
            id: 1,
            role: "Senior Art Director",
            company: "Creative Agency X",
            period: "2023 - Present",
            achievements: [
                "Lead a team of 10 designers and editors.",
                "Spearheaded campaigns for Fortune 500 clients.",
                "Increased department efficiency by 20%."
            ]
        },
        {
            id: 2,
            role: "Art Director",
            company: "Brand Studio Y",
            period: "2020 - 2023",
            achievements: [
                "Developed award-winning OOH campaigns.",
                "Managed brand identity projects for startups.",
                "Directed commercial video shoots."
            ]
        },
        {
            id: 3,
            role: "Senior Visual Designer",
            company: "Tech Giant Z",
            period: "2018 - 2020",
            achievements: [
                "Designed UI systems for global products.",
                "Created marketing collateral for product launches.",
                "Mentored junior designers."
            ]
        }
    ],
    socialLinks: {
        linkedin: "#",
        instagram: "#",
        email: "mailto:hello@saadsohail.com"
    }
};
