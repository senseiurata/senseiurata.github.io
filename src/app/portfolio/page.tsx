import Link from 'next/link';
import PortfolioItem from '@/shared/server/PortfolioItem';

export default function Portfolio () {
  return (
    <div className="mx-auto max-w-3xl mt-3 mb-10 p-8 text-center bg-white/10 sm:rounded-2xl md:flex md:gap-7 md:items-start md:text-start">
      <div>
        <h1 className="text-2xl mb-4">
          Portfolio
        </h1>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10 text-start">
          <PortfolioItem
            title="Portfolio Site"
            imageUrl="/images/portfolio.jpg"
            skills={[
              'Next 13',
              'Typescript',
              'Tailwind',
            ]}
            githubUrl="https://github.com/senseiurata/senseiurata.github.io"
          />
          <PortfolioItem
            title="Secret Personal Project"
            thumbnail={<div className="aspect-[400/250] flex items-center justify-center bg-gray-800 text-5xl">?</div>}
            skills={[
              'Express.js / Lit',
              'Postgres',
              'Multilingual 🇺🇸🇯🇵',
              'Data vizualization 📈',
              '~10k Weekly Active Users 🏃‍♂️',
            ]}
          />
        </div>
        <div className="flex-none mt-4 flex justify-end">
          <Link href="/contact" className="inline-block p-2 mt-4 rounded-md border-b-4 text-lg bg-cyan-500 text-white border-cyan-700 hover:bg-cyan-600 hover:text-white">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
};
