import PortfolioItem from '@/shared/server/PortfolioItem';
import InnerContentTemplate from '@/shared/server/InnerContentTemplate';
import OuterContentTemplate from '@/shared/server/OuterContentTemplate';

export default function Portfolio () {
  return (
    <OuterContentTemplate>
      <InnerContentTemplate
        title="Portfolio"
        nextActionText="Contact Me"
        nextUrl="/contact"
      >
        <>
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
        </>
      </InnerContentTemplate>
    </OuterContentTemplate>
  )
};
