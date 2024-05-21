function HeroSection() {
    return (
        <section className="flex flex-col items-center px-16 pt-20 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mt-4 w-full max-w-[1216px] max-md:max-w-full">
                <div className="flex flex-col items-center px-20 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-3 py-1 pr-2.5 pl-1 text-sm font-medium leading-5 text-violet-700 bg-purple-50 rounded-2xl border border-purple-200 border-solid mix-blend-multiply">
                        <span className="justify-center px-2.5 py-0.5 text-center bg-white rounded-2xl border border-purple-300 border-solid">New feature</span>
                        <div className="flex gap-1 my-auto">
                            <span>Check out the team dashboard</span>
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1535a4f96f782b55688944b5160f68b3b24f91e3081e52743e2541ad353a0e03?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&" alt="" className="shrink-0 my-auto w-4 aspect-square" />
                        </div>
                    </div>
                    <h1 className="self-stretch mx-4 mt-4 text-6xl tracking-tighter text-center text-gray-900 leading-[72px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">Beautiful analytics to grow smarter</h1>
                    <p className="mt-6 text-xl leading-8 text-center text-slate-600 w-[768px] max-md:max-w-full">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                    <div className="flex gap-3 mt-12 text-lg leading-7 max-md:mt-10 max-sm:flex max-sm:flex-col max-sm:w-full">
                        <a href="#" className="flex gap-3 justify-center px-7 py-4 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700 max-md:px-5">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/784427ed17dff740476480dcb80dbf4802a2d80830154327e6ca7b66b4ecab7a?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&" alt="" className="shrink-0 my-auto w-6 aspect-square" />
                            <span>Demo</span>
                        </a>
                        <a href="#" className="justify-center px-7 py-4 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm max-md:px-5">Sign up</a>
                    </div>
                </div>
                <div className="flex relative flex-col w-full rounded-xl max-md:mt-0 max-md:max-w-full overflow-hidden">
                    <div className="md:hidden">
                        <img loading="lazy" src="3_2 screen mockupdesk.png" alt="Background for Small Screen" className="object-contain w-full h-full" />
                    </div>
                    <div className="hidden md:flex">
                        <img loading="lazy" src="Mockup shadowshadow.png" alt="" className="object-contain absolute inset-0 z-0 w-full h-full" />
                        <img loading="lazy" src="Screen mockup (REPLACE FILL).png" alt="Dashboard screenshot" className="object-contain mx-auto mt-9 md:max-w-[1050px]  z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection