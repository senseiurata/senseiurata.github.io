import InnerContentTemplate from '@/shared/server/InnerContentTemplate';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl mt-3 mb-10 p-8 text-center bg-white/10 sm:rounded-2xl md:flex md:gap-7 md:items-start md:text-start">
      <div className="inline-block rounded-full overflow-hidden md:flex-none h-fit">
        <Image src="/images/profile-1.jpg" alt="Ken Urata" width={200} height={200} />
      </div>

      <InnerContentTemplate
        nextActionText="See My Profile"
        nextUrl="/profile"
      >
        <div className="text-3xl">
          <p className="my-4">Hello, I’m Ken.</p>
          <p className="my-4">I am a front-end web developer located in San Francisco, CA.</p>
        </div>
      </InnerContentTemplate>
    </div>
  );
}
