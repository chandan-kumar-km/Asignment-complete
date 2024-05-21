import React from 'react'
import {BlogPost} from './index'
function BlogPosts() {
  const blogPosts = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e5f2d7d1ca13883412856515c99562252b91ec1246a4f6d35cb9375685e6c18?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
      category: "Design",
      title: "UX review presentations",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      authorImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/35cf99e40782926b6671c619cfc5297230b25082341baf29149689e781f3a2fa?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
      authorName: "Olivia Rhye",
      date: "20 Jan 2024"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5a4f47123cc9286591bdff0a7ed0ce16e910ac742d47bf573d2ff0883e60055?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
      category: "Product",
      title: "Migrating to Linear 101",
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      authorImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f22aefdbdf2d9d9ea9500a1a16aa336dab48b644800c97d0cbe7cd901ecb9196?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
      authorName: "Phoenix Baker",
      date: "19 Jan 2024"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/23957d7781dd18c77a2024734692eae55c2f3a2083980a1bdd067d1afda1aae7?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
      category: "Software Engineering",
      title: "Building your API stack",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      authorImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c54fe275507a42a28aff2ab63579208b42ce876fcaec158b4312e12e92f79809?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&",
      authorName: "Lana Steiner",
      date: "18 Jan 2024"
    }
  ];



  return (
    <section className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col my-4 w-full max-w-[1216px] max-md:max-w-full">
        <header className="flex gap-5 justify-between font-semibold leading-[150%] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <span className="text-base text-violet-700 max-md:max-w-full">Our blog</span>
            <h2 className="mt-3 text-4xl tracking-tighter leading-10 text-gray-900 max-md:max-w-full">Latest blog posts</h2>
            <p className="mt-5 text-xl text-slate-600 max-md:max-w-full">Tools and strategies modern teams need to help their companies grow.</p>
          </div>
          <a href="#" className="justify-center self-start px-5 py-3 text-base text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">View all posts</a>
        </header>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {blogPosts.map((post) => (
              <BlogPost key={post.title} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

}

export default BlogPosts