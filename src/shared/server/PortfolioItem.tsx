import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioItem ({
  title,
  skills,
  imageUrl,
  githubUrl,
  thumbnail,
}: { title: string, skills: Array<string>, imageUrl?: string, githubUrl?: string, thumbnail?: ReactElement }
) {
  const image = imageUrl
    ? <Image src={imageUrl} alt="Portfolio Site" width={400} height={250}/>
    : null;
  if (!(image || thumbnail)) {
    throw new Error('Missing image or thumbnail')
  }

  return (
    <section>
      <h2 className="my-3 text-xl">{title}</h2>
      {image || thumbnail}
      <ul className="my-4 list-disc list-inside">
        {skills.map((skill: string, index: number) => <li key={index}>{skill}</li>)}
      </ul>
      {githubUrl ? <Link href={githubUrl}>Github</Link> : null}
    </section>
  );
};