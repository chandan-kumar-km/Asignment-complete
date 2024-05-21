import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex flex-col w-full font-semibold bg-white max-md:max-w-full">
            <div className="flex flex-col justify-center px-16 py-5 w-full text-base leading-6 border-b border-gray-100 border-solid max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between px-8 mx-5 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between my-auto whitespace-nowrap text-slate-600 max-md:flex-wrap">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5be6dde0f1115017696c733970a5e40d528d736f606fc65d0b85b85c86d0048?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&" alt="Company Logo" className="shrink-0 max-w-full aspect-[4.35] w-[142px]" />
                        <nav className="flex gap-5 justify-between py-1 max-md:flex max-sm:hidden">
                            <a href="#">Home</a>
                            <div className="flex gap-2 justify-center">
                                <a href="#">Products</a>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6950ecb31c284909607359aa7e93f637fcc361cb6a8b3ca3a711b3f76044b1b?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                            </div>
                            <div className="flex gap-2 justify-center">
                                <a href="#">Resources</a>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6950ecb31c284909607359aa7e93f637fcc361cb6a8b3ca3a711b3f76044b1b?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                            </div>
                            <a href="#">Pricing</a>
                        </nav>
                    </div>
                    <div className="flex gap-3 justify-between pl-5">
                        <a href="#" className="my-auto text-slate-600">Log in</a>
                        <a href="#" className="justify-center px-5 py-2.5 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">Sign up</a>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="outline-none focus:outline-none"
                            aria-label="Toggle Menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Responsive menu */}
                {menuOpen && (
                    <nav className="flex flex-col gap-2 mt-3 md:hidden">
                        <a href="#">Home</a>
                        <a href="#">Products</a>
                        <a href="#">Resources</a>
                        <a href="#">Pricing</a>
                    </nav>
                )}
            </div>
        </header>
    );
}
export default Navbar;
