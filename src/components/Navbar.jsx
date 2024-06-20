import { useState, useEffect } from 'react';
import logo from "../assets/gsl-1.png";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`bg-white py-3 px-6 border-b sticky top-0 ${isScrolled ? 'bg-opacity-75 shadow-b-xl backdrop-blur-lg' : ''}`}>
            <div className="flex justify-between items-center">
                <div className="flex gap-24 items-center">
                    {/* logo */}
                    <img src={logo} alt="logo" className="h-12" />
                    <div>
                        <ul className="flex gap-12 font-semibold text-lg">
                            <li><a href="#home" className="cursor-pointer">Home</a></li>
                            <li><a href="#services" className="cursor-pointer">Services</a></li>
                            <li><a href="#pricing" className="cursor-pointer">Pricing</a></li>
                            <li><a href="#api" className="cursor-pointer">API</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-6 items-center">
                    <button className="border border-brand-400 border-gray-400 px-8 py-2 rounded-lg">Sign Up</button>
                    <button className="bg-brand-400 text-white px-8 py-2 font-semibold rounded-lg transition ease-in-out duration-400 delay-150 hover:bg-brand-500">Sign in</button>
                </div>
            </div>
        </div>
    );
}
