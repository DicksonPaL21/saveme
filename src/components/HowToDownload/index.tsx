const HowToDownload = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg sm:text-4xl dark:text-white text-black font-extrabold text-center max-w-3xl">
        How to download Youtube Videos?
      </h3>
      <div className="grid mt-10 w-full text-xs sm:text-base max-lg:grid-rows-3 lg:grid-cols-3 lg:gap-12 gap-4">
        <div className="flex gap-4 font-light items-center tracking-wide leading-relaxed">
          <span className="font-extrabold text-lg lg:text-4xl size-10 lg:size-14 shrink-0 text-blue-500 bg-blue-200 grid place-items-center rounded-xl">
            1
          </span>
          Take the link you want to convert and paste it into the designated
          input area.
        </div>
        <div className="flex gap-4 font-light items-center tracking-wide leading-relaxed">
          <span className="font-extrabold text-lg lg:text-4xl size-10 lg:size-14 shrink-0 text-red-500 bg-red-200 grid place-items-center rounded-xl">
            2
          </span>
          Choose the MP4 or MP3 format you wish to convert to, then click the
          download button.
        </div>
        <div className="flex gap-4 font-light items-center tracking-wide leading-relaxed">
          <span className="font-extrabold text-lg lg:text-4xl size-10 lg:size-14 shrink-0 text-green-500 bg-green-200 grid place-items-center rounded-xl">
            3
          </span>
          Hold on until the conversion is complete, then download the file.
        </div>
      </div>
    </div>
  )
}

export default HowToDownload
