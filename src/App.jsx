import React from 'react'
import { BlogPosts, FeatureBlock, FeatureGrid, Footer, HeroSection, HorizontalDivider, LogoGrid, Navbar, Testimonial, FeatureBottom } from './pages/index'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoGrid />
        <HorizontalDivider />
        <FeatureGrid />
        <HorizontalDivider />
        <Testimonial />
        <HorizontalDivider />
        <FeatureBottom />
        <HorizontalDivider />
        <BlogPosts />
        <HorizontalDivider />
        <section className="flex justify-center items-center px-16 py-20 w-full font-semibold bg-gray-50 leading-[150%] max-md:px-5 max-md:max-w-full">
          <div className="flex justify-center items-center px-16 my-4 w-full max-w-[1216px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[768px]">
              <h2 className="text-4xl tracking-tighter leading-10 text-center text-gray-900 max-md:max-w-full">Start your free trial</h2>
              <p className="mt-5 text-xl text-center text-slate-600 max-md:max-w-full">Join over 4,000+ startups already growing with Untitled.</p>
              <div className="flex gap-3 self-center mt-10 text-base">
                <a href="#" className="justify-center px-5 py-3 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700">Learn more</a>
                <a href="#" className="justify-center px-5 py-3 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">Get started</a>
              </div>
            </div>
          </div>
        </section>
        <HorizontalDivider />
      </main>
      <Footer />
    </>
  )
}

export default App