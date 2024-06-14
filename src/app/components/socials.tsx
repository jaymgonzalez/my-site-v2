import { FaGithub } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'

const Social = () => {
  const data = [
    {
      href: 'https://github.com/jaymgonzalez',
      label: 'Github',
      title: 'Github',
      icon: <FaGithub size={24} />,
    },
    {
      href: 'https://www.linkedin.com/in/jay-m-gonzalez/',
      label: 'LinkedIn',
      title: 'LinkedIn',
      icon: <GrLinkedin size={24} />,
    },
  ]

  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {data.map((item) => (
        <li key={item.href} className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${item.label} (opens in a new tab)`}
            title={item.title}
          >
            <span className="sr-only">{item.label}</span>
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
