function Footer() {
  const footerLinks = [
    {
      category: "Product",
      links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"]
    },
    {
      category: "Company",
      links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"]
    },
    {
      category: "Resources",
      links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"]
    },
    {
      category: "Use cases",
      links: ["Startups", "Enterprise", "Government", "SaaS center", "Marketplaces", "Ecommerce"]
    },
    {
      category: "Social",
      links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"]
    },
    {
      category: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"]
    }
  ];

  return (
    <footer className="flex flex-col items-center px-16 pt-14 pb-12 w-full bg-white leading-[150%] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1216px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.category} className="flex flex-col flex-1 whitespace-nowrap max-sm:pr-6">
              <p className="text-sm font-semibold leading-5 text-gray-500">{section.category}</p>
              {section.links.map((link, index) => (
                <a key={index} href="#" className="mt-3 text-base font-semibold text-slate-600">{link}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex gap-5 justify-between items-start pt-8 mt-16 text-base text-gray-500 border-t border-gray-200 border-solid max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c49517d6d1a04f4bc8af895ae41249673eff54ff3342f60629cf37244a4b1b98?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&" alt="Footer Logo" className="shrink-0 max-w-full aspect-[4.35] w-[142px]" />
          <p className="mt-1">© 2077 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer