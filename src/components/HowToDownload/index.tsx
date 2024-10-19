const HowToDownload = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-md">
        <h3 className="max-w-3xl text-center text-lg font-extrabold text-black dark:text-white sm:text-4xl">
          How to download Youtube Videos?
        </h3>

        <div className="relative h-3 w-full max-w-3xl">
          {/* Gradients */}
          <div className="absolute inset-x-1/2 top-0 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-1/2 top-0 h-[5px] w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute inset-x-1/2 top-0 h-px w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="mt-10 grid w-full gap-4 text-xs max-lg:grid-rows-3 sm:text-base lg:grid-cols-3 lg:gap-12">
        <div className="flex items-center gap-4 font-light leading-relaxed tracking-wide">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-200 text-lg font-extrabold text-blue-500 lg:size-14 lg:text-4xl">
            1
          </span>
          Take the link you want to convert and paste it into the designated
          input area.
        </div>
        <div className="flex items-center gap-4 font-light leading-relaxed tracking-wide">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-red-200 text-lg font-extrabold text-red-500 lg:size-14 lg:text-4xl">
            2
          </span>
          Choose the MP4 or MP3 format you wish to convert to, then click the
          download button.
        </div>
        <div className="flex items-center gap-4 font-light leading-relaxed tracking-wide">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-green-200 text-lg font-extrabold text-green-500 lg:size-14 lg:text-4xl">
            3
          </span>
          Hold on until the conversion is complete, then download the file.
        </div>
      </div>
    </div>
  )
}

export default HowToDownload
