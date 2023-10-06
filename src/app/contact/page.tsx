import Image from "next/image";
import Link from "next/link";

export default function Contact () {
  return (
    <div className="mx-auto max-w-3xl mt-3 mb-10 p-8 text-center bg-white/10 sm:rounded-2xl md:flex md:gap-7 md:items-start md:text-start">
      <div className="inline-block rounded-full overflow-hidden md:flex-none h-fit">
        <Image src="/images/profile-1.jpg" alt="Ken Urata" width={200} height={200} />
      </div>
      <div>
        <h1 className="text-2xl">
          Contact
        </h1>
        <p className="my-4">Ken Urata</p>
        <p className="my-4">San Francisco - California - (U.S.A)</p>
        <address>
          <p><a href="tel:+14085152896"><strong>+1 408 515.2896</strong></a></p>
          <p><a href="mailto:kensurata@gmail.com" className="my-4">kensurata@gmail.com</a></p>
        </address>
        <div className="">
          <Link href="/" className="inline-block p-2 mt-4 rounded-md border-b-4 text-lg bg-cyan-500 text-white border-cyan-700 hover:bg-cyan-600 hover:text-white">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
};
