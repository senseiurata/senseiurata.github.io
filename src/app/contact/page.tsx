import InnerContentTemplate from '@/shared/server/InnerContentTemplate';
import OuterContentTemplate from '@/shared/server/OuterContentTemplate';
import Image from 'next/image';

export default function Contact () {
  return (
    <OuterContentTemplate>
      <>
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
              <p><a href="mailto:kensurata@gmail.com" className="my-4">kensurata@gmail.com</a></p>
            </address>
          </>
        </InnerContentTemplate>
      </>
    </OuterContentTemplate>
  )
};
