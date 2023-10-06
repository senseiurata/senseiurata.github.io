import InnerContentTemplate from "@/shared/server/InnerContentTemplate";
import Image from "next/image";

export default function Contact () {
  return (
    <div className="mx-auto max-w-3xl mt-3 mb-10 p-8 text-center bg-white/10 sm:rounded-2xl md:flex md:gap-7 md:items-start md:text-start">
      <div className="inline-block rounded-full overflow-hidden md:flex-none h-fit">
        <Image src="/images/profile-1.jpg" alt="Ken Urata" width={200} height={200} />
      </div>
      <InnerContentTemplate
        title="Contact"
        nextActionText="Back to Home"
        nextUrl="/"
      >
        <>
          <p className="my-4">Ken Urata</p>
          <p className="my-4">San Francisco - California - (U.S.A)</p>
          <address>
            <p><a href="tel:+14085152896"><strong>+1 408 515.2896</strong></a></p>
            <p><a href="mailto:kensurata@gmail.com" className="my-4">kensurata@gmail.com</a></p>
          </address>
        </>
      </InnerContentTemplate>
    </div>
  )
};
