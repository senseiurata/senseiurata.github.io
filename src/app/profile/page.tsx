import ContentTemplate from "@/shared/server/InnerContentTemplate";
import Image from "next/image"
import Link from "next/link";

export default function Profile () {
  return (
    <div className="mx-auto max-w-3xl mt-3 mb-10 p-8 text-center bg-white/10 sm:rounded-2xl md:flex md:items-stretch md:gap-7 md:text-start">
      <div className="inline-block text-center md:flex-none">
        <Image className="rounded-lg" src="/images/profile-1.jpg" alt="" width={200} height={200} />
        <strong className="block text-xl my-3">Ken Urata</strong>
        <p className="my-2">Front-end Engineer, <span aria-label="9 Years">9+ Yrs</span></p>
        <p className="my-2">YC Founder</p>
      </div>

      <ContentTemplate
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
      </ContentTemplate>
    </div>
  );
};
