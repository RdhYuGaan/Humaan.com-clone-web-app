import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const tags = [
    { label: "Featured", active: true },
    { label: "Commercial" },
    { label: "Not for Profit" },
    { label: "Education" },
    { label: "Community & Purpose" },
    { label: "Innovation" },
    { label: "UI & UX" },
];

const Work = () => {
    const navigate = useNavigate();

    const handleRoute = (tagLabel) => {
        const route = `/work/${tagLabel.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`;
        navigate(route);
    };

    return (
        <div>
            <Header />
            <section className="bg-[#f3f3ea] min-h-screen flex flex-col items-start justify-start px-6 py-12">
                <div className="mt-20 px-12">
                    <h1 className="text-5xl md:text-8xl font-semibold leading-tight text-[#0d1b06]">
                        World-class digital <br /> products, idea to execution.
                    </h1>

                    <div className="flex flex-wrap gap-2 mt-20">
                        {tags.map((tag, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleRoute(tag.label)}
                                className={`px-4 py-1.5 rounded-full text-sm cursor-pointer font-medium ${tag.active
                                    ? "bg-[#0d1b06] text-[#24ef0e]"
                                    : "bg-white text-[#0d1b06]"
                                    }`}
                            >
                                {tag.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Work;
