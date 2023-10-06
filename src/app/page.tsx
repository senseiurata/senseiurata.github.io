import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl mt-3 mb-10 p-8 text-center bg-white/10 sm:rounded-2xl md:flex md:gap-7 md:items-start md:text-start">
      <div className="inline-block rounded-full overflow-hidden md:flex-none h-fit">
        <Image src="/images/profile-1.jpg" alt="Ken Urata" width={200} height={200} />
      </div>
      <div className="text-3xl">
        <p className="my-4">Hello, I’m Ken.</p>
        <p className="my-4">I am a front-end web developer located in San Francisco, CA.</p>
        <div className="flex-none mt-4 flex justify-end">
          <Link href="/profile" className="inline-block p-2 mt-4 rounded-md border-b-4 text-lg bg-cyan-500 text-white border-cyan-700 hover:bg-cyan-600 hover:text-white">
            See My Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
