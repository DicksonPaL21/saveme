import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

const FrequentlyAskedQuestions = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg sm:text-4xl dark:text-white text-black font-extrabold text-center max-w-3xl">
        Frequently Asked Questions
      </h3>
      <div className="mt-10 w-full lg:w-screen max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Are there options to download videos on YouTube?
            </AccordionTrigger>
            <AccordionContent className="tracking-wide leading-relaxed font-light mt-2">
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
            <AccordionContent className="tracking-wide leading-relaxed font-light mt-2">
              With this tool, you can easily download your favorite YouTube
              Shorts - completely free!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Are YouTube downloading tools available for free?
            </AccordionTrigger>
            <AccordionContent className="tracking-wide leading-relaxed font-light mt-2">
              Other downloader apps may vary, but SaveMe is definitely free to
              use.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do downloaded videos from YouTube come with watermarks?
            </AccordionTrigger>
            <AccordionContent className="tracking-wide leading-relaxed font-light mt-2">
              No, they don&apos;t.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FrequentlyAskedQuestions
