import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Become an Instructor", path: "/become-instructor" },
]
const navRight = ["USE", "ENG"]

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <ul className='nav-left-list'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-right">
        <ul className="nav-right-list">
          {navRight.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar