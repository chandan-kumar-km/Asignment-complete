function Testimonial() {
    return (
        <section className="flex flex-col items-center p-20 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f8d39b7efe282d3b6a4c7f7258b9fa0922b39f351a86767bfa1ac8c2fcd6c9c?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&" alt="Client Logo" className="mt-4 max-w-full aspect-[3.45] w-[140px]" />
            <blockquote className="mt-8 text-5xl font-medium tracking-tighter text-center text-gray-900 leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">We’ve been using Untitled to kick start every new project and can’t imagine working without it.</blockquote>
            <div className="flex overflow-hidden relative flex-col justify-center mt-8 w-16 aspect-square rounded-[200px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/90785c424193d2e9ced8babc27b5b48f701783723ee21657d661521e6070c594?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&" alt="Testimonial Avatar" className="object-cover absolute inset-0 size-full" />
                <div className="relative shrink-0 h-16 border border-gray-900 border-solid rounded-[200px]" />
            </div>
            <cite className="mt-4 text-lg font-semibold leading-7 text-center text-gray-900 max-md:max-w-full">Candice Wu</cite>
            <p className="mt-1 mb-4 text-base leading-6 text-center text-slate-600 max-md:max-w-full">Product Manager, Sisyphus</p>
        </section>
    );
}
export default Testimonial