import InnerContentTemplate from '@/shared/server/InnerContentTemplate';
import OuterContentTemplate from '@/shared/server/OuterContentTemplate';
import Image from 'next/image'

export default function Profile () {
  return (
    <OuterContentTemplate>
      <>
        <div className="inline-block text-center md:flex-none">
          <Image className="rounded-lg" src="/images/profile-1.jpg" alt="" width={200} height={200} />
          <strong className="block text-xl my-3">Ken Urata</strong>
          <p className="my-2">Front-end Engineer, <span aria-label="9 Years">9+ Yrs</span></p>
          <p className="my-2">YC Founder</p>
        </div>

        <InnerContentTemplate
          title="Profile"
          nextActionText="See My Portfolio"
          nextUrl="/portfolio"
        >
          <div className="flex-auto flex flex-col gap-4">
            <p>
              I’m Ken, a coder who’s worked with JavaScript, PHP, and React; I helped make vrv.co, taught React to folks, and even dabbled in English-Japanese software translations.</p>
            <p>
            <a href="/resume.pdf">Ken’s Resume (PDF)</a>
            </p>
          </div>
        </InnerContentTemplate>
      </>
    </OuterContentTemplate>
  );
};
