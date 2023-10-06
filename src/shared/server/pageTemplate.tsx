import Link from 'next/link';

export default function PageTemplate ({ pageName, nextLink, nextText, children } : {
  pageName: string,
  nextLink: string,
  nextText: string,
  children: React.ReactNode,
}) {
  return (
    <section>
      <h1>{ pageName }</h1>

      { children }

      <div className="action-item">
        <Link className="next-link" href={ nextLink }>{ nextText }</Link>
      </div>
    </section>
  );
};
