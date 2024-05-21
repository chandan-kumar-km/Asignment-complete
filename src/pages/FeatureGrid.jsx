import { FeatureBlock } from './index'

function FeatureGrid() {
    const featuresTop = [
        {
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c77360ae13575fee470058050b4f881aff4ac63fa149c86c2d9f81ec0acc55a1?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
            title: "Share team inboxes",
            description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        },
        {
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f3aae0b9d1df43efbab26a99ea9bd344ffbe712e0737a2f57d1305b04f5b7b9?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
            title: "Deliver instant answers",
            description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        },
        {
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e549212d2bb364f2e9860219cd93caa78f15d784e6a0a168d681abb0d2498a4b?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
            title: "Manage your team with reports",
            description: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
        }
    ];

    const featuresBottom = [
        {
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3327301a4bb6dc530f6fc1e095d80ef174a1a110e68e7f2968e7fe044686dd63?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
            title: "Connect with customers",
            description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
        },
        {
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c199582ab2cda3b8a6a2ed1407698cd579e8f5c73764cc4759fbbb0964eaca73?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
            title: "Connect the tools you already use",
            description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
        },
        {
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b02f3e60389a1953e9a07ca729fa560251c0dd6a500b082bb229c582514e1ef0?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
            title: "Our people make the difference",
            description: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
        }
    ];
    return (
        <section className="flex flex-col items-center p-20 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="mt-4 text-base font-semibold leading-6 text-center text-violet-700 max-md:max-w-full">Features</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tighter leading-10 text-center text-gray-900 max-md:max-w-full">Analytics that feels like it’s from the future</h2>
            <p className="mt-5 text-xl leading-8 text-center text-slate-600 w-[768px] max-md:max-w-full">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            <div className="flex flex-col self-stretch px-8 mt-16 mb-4 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {featuresTop.map((feature, index) => (
                            <FeatureBlock key={index} iconSrc={feature.iconSrc} title={feature.title} description={feature.description} />
                        ))}
                    </div>
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {featuresBottom.map((feature, index) => (
                            <FeatureBlock key={index} iconSrc={feature.iconSrc} title={feature.title} description={feature.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default FeatureGrid