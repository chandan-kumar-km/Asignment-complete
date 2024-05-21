import React from 'react'

function BlogPost({ imageSrc, category, title, description, authorImgSrc, authorName, date }) {
    return (

        <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-8">
                <img loading="lazy" src={imageSrc} alt={`${title} cover`} className="w-full aspect-[1.59]" />
                <p className="mt-6 text-sm font-semibold leading-5 text-violet-700">{category}</p>
                <div className="flex gap-4 mt-2 text-2xl font-semibold leading-8 text-gray-900">
                    <h3 className="flex-1">{title}</h3>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d69f07ce58248e9832734d04d647a7484264b318a6af5a3b919ef1588adcfdff?apiKey=9e14dd180b244b5f92c9956a27c1ea7d&" alt="Open Post Icon" className="shrink-0 my-auto w-6 aspect-square" />
                </div>
                <p className="mt-2 text-base leading-6 text-slate-600">{description}</p>
                <div className="flex gap-3 self-start mt-6">
                    <div className="flex overflow-hidden relative flex-col justify-center w-10 aspect-square rounded-[200px]">
                        <img loading="lazy" src={authorImgSrc} alt={`${authorName} Avatar`} className="object-cover absolute inset-0 size-full" />
                        <div className="relative shrink-0 h-10 border border-gray-900 border-solid rounded-[200px]" />
                    </div>
                    <div className="flex flex-col text-sm leading-5">
                        <span className="font-semibold text-gray-900">{authorName}</span>
                        <time className="text-slate-600">{date}</time>
                    </div>
                </div>
            </div>
        </article>

    )
}

export default BlogPost