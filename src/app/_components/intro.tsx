import { CMS_NAME } from "@/lib/constants";
import Image from "next/image";

export function Intro() {
  return (
    <section className="w-full flex items-center flex-col px-24 relative">
      <div className="w-full max-w-1040 relative flex flex-col items-center justify-center sm:min-h-704 py-64 sm:py-128">
        <div className="relative flex flex-col items-center justify-center w-full text-center">
          <h1 className="z-10 relative flex font-serif font-normal sm:font-light text-13vw sm:text-15vw md:text-168/100 tracking-tigher">
            Studio Prisoner
          </h1>
          <div className="relative grid sm:grid-cols-2 w-full font-medium text-14/110 mb-32 sm:mb-0">
            <div className="relative flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-7 pt-4 uppercase sm:normal-case">
              <p>
                <span className="hidden sm:inline-block">Connect</span>
              </p>
              <p>
                <span className="hidden sm:inline-block">Inspire</span>
              </p>
              <p>
                <span className="hidden sm:inline-block">Discuss</span>
              </p>
            </div>
            <div className="relative hidden sm:flex text-end justify-end">
              <p className="text-14/150 sm:text-16/150 max-w-212">
                Random thoughts from a designer based in Melbourne, Australia.
              </p>
            </div>
          </div>
          <div className="relative sm:absolute w-full aspect-16/9 sm:w-320 sm:h-640 flex items-center justify-center rounded-full bg-shadow overflow-hidden mix-blend-multiply sm:opacity-50 pb-64 sm:pb-0">
            <div className="absolute transform-gpu duration-1000 ease-out">
              <Image
                src="/assets/josh.jpg"
                height={1792}
                width={1792}
                alt="Picture of the author"
                className="relative w-768 h-768 max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
