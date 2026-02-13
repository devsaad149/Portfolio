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
            title: "Neon Horizon",
            client: "CyberTech",
            type: "Brand Identity",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
            metrics: "40% Brand Awareness Lift"
        },
        {
            id: 2,
            title: "Urban Pulse",
            client: "Metro Lifestyle",
            type: "Social Campaign",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074",
            metrics: "2.5M Reach"
        },
        {
            id: 3,
            title: "EcoFuture",
            client: "Green Earth",
            type: "Video Direction",
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070",
            metrics: "1M+ Views"
        },
        {
            id: 4,
            title: "Velvet Luxe",
            client: "Fashion Co",
            type: "OOH Campaign",
            image: "https://images.unsplash.com/photo-1542206395-9feb1621434d?auto=format&fit=crop&q=80&w=2028",
            metrics: "Top Award Winner"
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
    videoDirection: Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        title: `Video Project ${i + 1}`,
        client: `Studio ${["One", "Two", "Three"][i % 3]}`,
        category: ["Property Showcases", "Brand Stories", "Social Reels", "Commercial Ads"][i % 4],
        thumbnail: `https://images.unsplash.com/photo-${[
            "1492691527719-9d1e07e534b4",
            "1536240478700-b869070f9279",
            "1574717436420-ee9225433d74"
        ][i % 3]}?auto=format&fit=crop&q=80&w=1000`,
        duration: "1:30",
        description: "Conceptualization, storyboard, and on-set direction for high-impact commercial."
    })),
    ooh: [
        {
            id: 1,
            title: "City Center Takeover",
            location: "New York Times Square",
            image: "https://images.unsplash.com/photo-1542206395-9feb1621434d?auto=format&fit=crop&q=80&w=2000",
            specs: "Digital Billboard 40x80ft"
        },
        {
            id: 2,
            title: "Subway Station Domination",
            location: "London Underground",
            image: "https://images.unsplash.com/photo-1563292706-96c813a07727?auto=format&fit=crop&q=80&w=2000",
            specs: "Full Station Wrap"
        },
        {
            id: 3,
            title: "Airport Digital Network",
            location: "Dubai International",
            image: "https://images.unsplash.com/photo-1574268686617-64b1848b788c?auto=format&fit=crop&q=80&w=2000",
            specs: "Network of 50 Screens"
        },
        {
            id: 4,
            title: "Highway Mega Board",
            location: "Los Angeles I-5",
            image: "https://images.unsplash.com/photo-1552596489-32204c321d5c?auto=format&fit=crop&q=80&w=2000",
            specs: "Static Bulletin 14x48"
        },
        {
            id: 5,
            title: "Mall Atrium Event",
            location: "Westfield Sydney",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
            specs: "Interactive Installation"
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
