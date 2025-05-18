import 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./components/Home"
import Login from './pages/Login';
import Socialmedia from './pages/Socialmedia';
import About from './pages/About';
// import Contact from "./pages/Contact"
import Register from './pages/Register';
import GoogleLogin from './pages/GoogleLogin';
import NotFound from './pages/NotFound';
import MainPage from './components/MainPage';
import ProfileSection from './pages/ProfileSection';
import LinkResult from './pages/LinkResult'
import VerifiedLink from './pages/VerifiedLink';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mainpage' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/verifedlink' element={<VerifiedLink/>}/>
          <Route path='/linkresult' element={<LinkResult/>}/>
          <Route path='/profile' element={<ProfileSection/>}/>
          <Route path='/socialmedia' element={<Socialmedia/>}/>
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/contact' element={<Contact/>}/> */}
          <Route path='/register' element={<Register/>}/>
          <Route path='/google-login' element={<GoogleLogin/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App