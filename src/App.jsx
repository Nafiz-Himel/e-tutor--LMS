import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Homepage from './components/Homepage'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import InstructorSignup from './pages/InstructorSignup/InstructorSignup'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/become-instructor" element={<InstructorSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
