
export function Hero() {
  return (
    <div className="sm:w-3/4 px-8 max-w-none">
      <div className="bg-transparent/40 mt-16">
        <div className="rounded-lg p-5 border border-purple-500 hero-gradient max-h-full animate-fade-in-3">
          <div className="">
            <h1 className="text-white text-2xl lg:text-3xl mb-4 text-center text-purple animate-slide-down-logo ">NerveLab Placeholder</h1>
            <div className="">
              <div className="flex justify-center">
                <iframe src="https://www.youtube.com/embed/Yz8F5hQf0QA?si=yGbLZnj3ZgN_gg85"
                  className="md:w-4/5 w-full aspect-video"
                  title="YouTube video player"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
