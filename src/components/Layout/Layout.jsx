import { Outlet } from 'react-router-dom'
import Navbar from '../homePage/Navbar'
import Logo from '../homePage/Logo'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
      <Logo />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
