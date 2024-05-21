function LogoGrid() {
    const logos = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e93460182ba5c252844dcc6d2dc299e0c0cfe7ca090a06b31acef54dd3e25461?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&", alt: "Company Logo 1" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d47cee98170fec4999ca5c84a9b984d8a5014c695c124f7d4574be1842701678?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&", alt: "Company Logo 2" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/320d5a5ecd2594217fb0d260c4a4e49efef07a1ddb6ff61d600c54546fa38d41?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&", alt: "Company Logo 3" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/073043eea04e909fea800700491cbedcdaa9cf428d3a8895a5deba0b553e9491?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&", alt: "Company Logo 4" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d4cc9c29b1be3f3fcc9487e8faea1216f1c8b4a326761b0b0fef7cf83c1fd5e?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&", alt: "Company Logo 5" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aac2ae10794bc2032e47ac7971fc5dcbbaffcd35b641858c4a34af420a570ea2?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&", alt: "Company Logo 6" }
    ];

    return (
        <section className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col px-8 my-4 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
                <p className="text-base font-medium leading-6 text-center text-slate-600 max-md:max-w-full">Join 4,000+ companies already growing</p>
                <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
                    {logos.map((logo, index) => (
                        <img key={index} loading="lazy" src={logo.src} alt={logo.alt} className="shrink-0 max-w-full aspect-ratio w-[170px] max-sm:-ml-px max-sm:w-[138px]" />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default LogoGrid