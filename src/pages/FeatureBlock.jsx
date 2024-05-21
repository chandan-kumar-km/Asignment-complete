function FeatureBlock({ iconSrc, title, description }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-center max-md:mt-8">
        <img loading="lazy" src={iconSrc} alt="" className="self-center w-12 border border-gray-200 border-solid shadow-sm aspect-square" />
        <h2 className="mt-5 text-xl font-semibold leading-8 text-gray-900">{title}</h2>
        <p className="mt-2 text-base leading-6 text-slate-600">{description}</p>
      </div>
    </div>
  );
}
export default FeatureBlock

