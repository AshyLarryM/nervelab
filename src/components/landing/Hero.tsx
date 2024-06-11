export function Hero() {
  return (
    <div className="bg-transparent/40 rounded-lg p-5 border border-purple-500 max-h-full animate-fade-in-3">
      <div className="p-4">
        <h1 className="text-white text-3xl mb-4 text-center text-purple animate-slide-down-logo">NerveLab Placeholder</h1>
        <div className="flex justify-center">
          <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/Yz8F5hQf0QA?si=yGbLZnj3ZgN_gg85"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
