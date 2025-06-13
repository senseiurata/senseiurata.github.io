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

        <div className="flex mt-6 md:mt-0">
          <InnerContentTemplate
            title="Profile"
            nextActionText="See My Portfolio"
            nextUrl="/portfolio"
          >
            <div className="flex-auto max-w-sm">
              <p className="my-4">
                I’m Ken, a coder who’s worked with JavaScript, PHP, and React; I helped make vrv.co, taught React to folks, and even dabbled in English to Japanese translations.
              </p>
            </div>
          </InnerContentTemplate>
        </div>
      </>
    </OuterContentTemplate>
  );
};
