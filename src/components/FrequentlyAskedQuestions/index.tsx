import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

const FrequentlyAskedQuestions = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-md">
        <h3 className="max-w-3xl text-center text-lg font-extrabold text-black dark:text-white sm:text-4xl">
          Frequently Asked Questions
        </h3>

        <div className="relative h-3 w-full max-w-4xl">
          {/* Gradients */}
          <div className="absolute inset-x-1/2 top-0 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-1/2 top-0 h-[5px] w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute inset-x-1/2 top-0 h-px w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="mt-10 w-full max-w-4xl lg:w-screen">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Are there options to download videos on YouTube?
            </AccordionTrigger>
            <AccordionContent className="mt-2 font-light leading-relaxed tracking-wide">
              By default, YouTube doesn&apos;t allow you to download videos
              directly to your devices; you can only save them in the YouTube
              app. However, with a downloader tool like SaveMe, you can easily
              download videos without any issues.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Are there any tools to download YouTube Shorts?
            </AccordionTrigger>
            <AccordionContent className="mt-2 font-light leading-relaxed tracking-wide">
              With this tool, you can easily download your favorite YouTube
              Shorts - completely free!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Are YouTube downloading tools available for free?
            </AccordionTrigger>
            <AccordionContent className="mt-2 font-light leading-relaxed tracking-wide">
              Other downloader apps may vary, but SaveMe is definitely free to
              use.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do downloaded videos from YouTube come with watermarks?
            </AccordionTrigger>
            <AccordionContent className="mt-2 font-light leading-relaxed tracking-wide">
              No, they don&apos;t.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FrequentlyAskedQuestions
