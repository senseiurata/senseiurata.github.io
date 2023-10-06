export default function Footer () {
  return (
    <footer className="flex justify-end">
      <ul className="flex gap-1 pu-4 pb-4 pl-6 pr-6">
        <li>
          <a className="text-white" href="https://github.com/senseiurata">Github</a>
        </li>
        <li className="before:content-['/']">
          <a className="ml-1 text-white" href="https://www.linkedin.com/in/ken-urata-8011a81b">LinkedIn</a>
        </li>
      </ul>
    </footer>
  );
};
