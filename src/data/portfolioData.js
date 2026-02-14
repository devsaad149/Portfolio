import { Palette, Globe, Video, Layout, TrendingUp, Users, Layers, Zap, Award, Briefcase, Mail, Target, Film, BarChart3, Smartphone } from 'lucide-react';

const getAssetPath = (path) => {
    if (!path || typeof path !== 'string') return path;
    if (!path.startsWith('/')) return path; // Ignore external links (http) or relative
    const isProduction = import.meta.env.PROD;
    const base = isProduction ? '/Portfolio' : '';
    return `${base}${path}`;
};

const rawPortfolioData = {
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
            image: "/images/brand/vorniqo-logo.jpg",
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
            image: "/images/social/cafe-logo.jpg",
            brief: "Developed comprehensive brand systems and growth campaigns for diverse small businesses (Cafe De Crave, Petal Perfection, MG Studios, AL Hikmah). Delivered measurable ROI on limited budgets.",
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
            image: "/images/social/hsq-logo.jpg",
            proof: "/images/analytics/hsq-proof.jpg",
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
            title: "AL Hikmah Academy",
            client: "AL Hikmah Academy",
            category: "Education",
            platform: "Meta Ads",
            duration: "2024-2025",
            image: "/images/social/al-hikam-logo.jpg",
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
            image: "/images/social/petal-logo.jpg",
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
            title: "Cafe De Crave",
            client: "Cafe De Crave",
            category: "F&B",
            platform: "Meta Ads",
            duration: "Grand Opening",
            image: "/images/social/cafe-logo.jpg",
            proof: "/images/analytics/cafe-proof.jpg",
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
            image: "/images/ooh/cafe-signage.png",
            specs: "Grand opening social media campaign with bold visual impact suitable for both digital feeds and potential physical signage."
        },
        {
            id: 2,
            title: "HSQ Towers Social Campaign - Lifestyle Series",
            location: "Islamabad Expressway",
            image: "/images/ooh/hsq-billboard.png",
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
            image: "/images/ooh/vorniqo-banner.png",
            specs: "B2B thought leadership content establishing software expertise through bold visual statements."
        }
    ],
    brandGuidelines: [
        {
            id: 1,
            name: "HSQ Towers",
            industry: "Premium Real Estate",
            industry_loc: "Industry: Premium Real Estate | Location: Jhika Gali, Murree",
            positioning: "Luxury mountain living with regal sophistication",
            logo: "/images/social/hsq-logo.jpg",
            colors: [
                { hex: "#D4AF37", name: "Royal Gold" },
                { hex: "#1A1A1A", name: "Deep Black" }
            ],
            typography: {
                headline: "Trajan Pro",
                body: "Helvetica",
                sample: "Luxury Living Defined"
            },
            attributes: ["Aspirational", "Sophisticated", "Warm", "Confident"],
            applications: ["Social Media", "Property Marketing", "Digital Ads", "Signage", "Sales Collateral", "Website"],
            achievement: "Viral campaign: 999K views & 700+ bookings",
            pdf: "/pdfs/HSQ_Towers_Brand_Guidelines.pdf"
        },
        {
            id: 2,
            name: "Vorniqo Solutions",
            industry: "Technology & Real Estate",
            industry_loc: "Industry: Technology & Real Estate Solutions",
            positioning: "Innovation-driven real estate management",
            logo: "/images/brand/vorniqo-logo.jpg",
            colors: [
                { hex: "#1A4D2E", name: "Forest Green" },
                { hex: "#00CED1", name: "Tech Turquoise" },
                { hex: "#FFFFFF", name: "Pure White" }
            ],
            typography: {
                headline: "Montserrat",
                body: "Open Sans",
                sample: "Innovation in Connectivity"
            },
            attributes: ["Innovative", "Professional", "Clear", "Confident"],
            applications: ["Corporate Comms", "Multi-brand Portfolio", "Presentations", "Digital Platforms", "Marketing Collateral"],
            achievement: "Unified parent identity for 5+ property sub-brands",
            pdf: "/pdfs/Vorniqo_Solutions_Brand_Guidelines.pdf"
        },
        {
            id: 3,
            name: "Fiorire",
            industry: "Lifestyle Retail",
            industry_loc: "Industry: Lifestyle Retail | Location: Islamabad",
            positioning: "Italian elegance meets botanical artistry",
            logo: "/images/brand/fiorire-logo.jpg",
            colors: [
                { hex: "#1A1A1A", name: "Classic Black" },
                { hex: "#F5F5F0", name: "Cream White" },
                { hex: "#F8C8DC", name: "Soft Blush" },
                { hex: "#9CAF88", name: "Sage Green" }
            ],
            typography: {
                headline: "Playfair Display",
                body: "Lato",
                sample: "Botanical Artistry"
            },
            attributes: ["Elegant", "Warm", "Artisanal", "Romantic"],
            applications: ["Packaging", "Social Media", "Stationery", "Website", "Event Materials", "Product Tags"],
            achievement: "Balancing luxury sophistication with approachable warmth",
            pdf: "/pdfs/Fiorire_Brand_Guidelines.pdf"
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
    coreCompetencies: [
        {
            id: 1,
            icon: Target,
            name: "Campaign Strategy",
            description: "End-to-end campaign planning from concept to execution, with focus on audience targeting and multi-channel integration"
        },
        {
            id: 2,
            icon: Film,
            name: "Video Direction",
            description: "Scripting and directing video campaigns - conceptualize vision, direct editorial teams, ensure quality standards and brand alignment"
        },
        {
            id: 3,
            icon: BarChart3,
            name: "Meta Advertising",
            description: "Paid social expertise managing six-figure budgets, audience segmentation, campaign optimization, and ROI-focused performance marketing"
        },
        {
            id: 4,
            icon: Smartphone,
            name: "Social Media",
            description: "Content strategy, platform management, organic growth tactics, and community engagement across Instagram and Facebook"
        },
        {
            id: 5,
            icon: Palette,
            name: "Brand Development",
            description: "Complete brand identity systems including logos, color palettes, typography, guidelines, and brand voice across industries"
        },
        {
            id: 6,
            icon: Users,
            name: "Team Leadership",
            description: "Building and managing cross-functional teams (designers, editors, marketers), delegating workflows, and mentoring team members"
        },
        {
            id: 7,
            icon: TrendingUp,
            name: "Performance Analytics",
            description: "Data-driven optimization, tracking KPIs, A/B testing, conversion analysis, and continuous campaign improvement"
        },
        {
            id: 8,
            icon: Layers,
            name: "Multi-Brand Management",
            description: "Strategic oversight of multiple brands simultaneously while maintaining individual identities and coordinated marketing efforts"
        }
    ],
    experience: [
        {
            id: 1,
            role: "Marketing Manager",
            subtitle: "",
            company: "Vorniqo Solutions",
            location: "Islamabad, Pakistan",
            duration: "November 2024 - Present",
            durationDisplay: "3+ months",
            status: "Current Role",
            overview: "Hired to establish complete marketing operations for real estate solutions company managing multi-brand portfolio. Built team from ground up and executed high-performance campaigns achieving exceptional business results.",
            responsibilities: [
                "Built and led marketing team of 5 (2 graphic designers, 2 video editors, 1 intern)",
                "Developed integrated marketing strategies across 5 real estate brands",
                "Directed 20+ video campaigns - wrote scripts and provided creative direction",
                "Managed Meta advertising with six-figure budgets and ROI accountability",
                "Created content calendars and executed social media strategies",
                "Coordinated with sales teams to align marketing with conversion goals",
                "Delivered weekly performance reports and strategic recommendations"
            ],
            portfolio: [
                "HSQ Towers (premium residential)",
                "Address Fountain (luxury apartments)",
                "Al Zafar Builders (developer brand)",
                "Nouman Builder (investment properties)",
                "Vorniqo Solutions (corporate brand)"
            ],
            achievement: "HSQ Towers viral campaign: 3.78M impressions, 1.37M reach, 6,368 conversations, contributing to 600-700 property bookings in 3 months",
            skills: ["Multi-Brand Strategy", "Team Leadership", "Video Direction", "Meta Advertising", "Real Estate Marketing", "Performance Analytics", "Content Strategy"]
        },
        {
            id: 2,
            role: "Marketing Specialist",
            subtitle: "Project & Client Leadership Roles",
            company: "Evertise Digital",
            location: "Remote / Islamabad",
            duration: "April 2021 - October 2024",
            durationDisplay: "3.5 years",
            status: "",
            overview: "Led marketing operations for digital agency serving 8+ international clients across e-commerce, hospitality, retail, and nonprofit sectors. Managed full client lifecycle while leading cross-functional team and pursuing Bachelor's degree simultaneously.",
            responsibilities: [
                "Business Development: Managed Upwork presence, conducted client meetings, closed contracts",
                "Team Leadership: Led team of 4 (graphic designer, web developer, video editor, email marketer)",
                "Client Management: Maintained relationships across US, UK, and Pakistan markets",
                "Campaign Execution: Delivered email marketing, Meta advertising, and social media campaigns",
                "Project Management: Delegated workflows, ensured quality delivery, maintained client satisfaction",
                "Mentorship: Trained junior team members and supported strategic discussions"
            ],
            portfolio: [
                "Khubaib Foundation - Humanitarian relief campaigns",
                "J&J Global - Meta awareness campaigns",
                "Yoya Toys - Email marketing",
                "CGK Linens - E-commerce strategy",
                "Dineoutwithus - Restaurant marketing",
                "Hidden Hideouts - Resort marketing",
                "ProjectUSA - Lead generation",
                "Summon Electronics - Comprehensive strategy"
            ],
            achievement: "Successfully managed diverse international portfolio while maintaining 95%+ client retention and completing Bachelor's degree",
            skills: ["Business Development", "Int'l Client Management", "Email Marketing", "Meta Advertising", "Team Leadership", "Multi-Industry Marketing", "Strategic Planning"]
        },
        {
            id: 3,
            role: "Independent Marketing Consultant",
            subtitle: "Personal Portfolio Projects",
            company: "Self-Employed",
            location: "Islamabad",
            duration: "October 2024 - November 2025",
            durationDisplay: "Gap year - Freelance projects",
            status: "",
            overview: "During transition year between agency and current role, developed portfolio of 4 small business brands from concept to market presence, demonstrating ability to build complete brand systems and execute growth marketing with limited budgets.",
            responsibilities: [
                "Cave de Crave: Grand opening campaign (30K+ local reach, 270 conversations)",
                "Petal Perfection: Seasonal campaigns (40% engagement increase, <Rs50 cost per convo)",
                "MG Studios: Wedding portfolio showcase (50+ booking inquiries)",
                "Al Hikam Academy: Enrollment campaign (448K reach, 100+ parent inquiries)"
            ],
            portfolio: [],
            achievement: "Demonstrated versatility across F&B, lifestyle, creative services, and education sectors. All campaigns achieved positive ROI on self-funded budgets.",
            skills: ["Brand Identity", "Budget Optimization", "Small Business Growth", "Meta Advertising", "Entrepreneurial Marketing", "Multi-Industry Adaptability"]
        }
    ],
    socialLinks: {
        linkedin: "#",
        instagram: "#",
        email: "mailto:hello@saadsohail.com"
    }
};

export const portfolioData = (() => {
    const d = { ...rawPortfolioData };

    // Transform Featured Work
    if (d.featuredWork) {
        d.featuredWork = d.featuredWork.map(i => ({ ...i, image: getAssetPath(i.image) }));
    }

    // Transform Video Direction
    if (d.videoDirection) {
        d.videoDirection = d.videoDirection.map(i => ({
            ...i,
            thumbnail: getAssetPath(i.thumbnail),
            videoUrl: getAssetPath(i.videoUrl)
        }));
    }

    // Transform Social Campaigns
    if (d.socialCampaigns) {
        d.socialCampaigns = d.socialCampaigns.map(i => ({
            ...i,
            image: getAssetPath(i.image),
            proof: Array.isArray(i.proof) ? i.proof.map(getAssetPath) : getAssetPath(i.proof)
        }));
    }

    // Transform OOH
    if (d.ooh) {
        d.ooh = d.ooh.map(i => ({ ...i, image: getAssetPath(i.image) }));
    }

    // Transform Brand Guidelines
    if (d.brandGuidelines) {
        d.brandGuidelines = d.brandGuidelines.map(i => ({
            ...i,
            logo: getAssetPath(i.logo),
            pdf: getAssetPath(i.pdf)
        }));
    }

    return d;
})();
