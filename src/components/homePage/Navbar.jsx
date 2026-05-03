import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import "./Navbar.css"

const Navbar = () => {
  const { language, t, setLang } = useLanguage()

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.courses, path: "/courses" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.contact, path: "/contact" },
    { name: t.nav.becomeInstructor, path: "/become-instructor" },
  ]

  const languages = [
    { key: "use", label: "US" },
    { key: "eng", label: "UK" },
  ]

  return (
    <div className='navbar'>
      <div className="nav-left">
        <ul className='nav-left-list'>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-right">
        <ul className="nav-right-list">
          {languages.map((lang) => (
            <li
              key={lang.key}
              className={`lang-switch ${language === lang.key ? "active" : ""}`}
              onClick={() => setLang(lang.key)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
