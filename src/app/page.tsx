import InnerContentTemplate from '@/shared/server/InnerContentTemplate';
import OuterContentTemplate from '@/shared/server/OuterContentTemplate';
import Image from 'next/image'

export default function Home() {
  return (
    <OuterContentTemplate>
      <>
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
      </>
    </OuterContentTemplate>
  );
}
