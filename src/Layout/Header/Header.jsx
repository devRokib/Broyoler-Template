
import { useAuthState } from 'react-firebase-hooks/auth';
import './header.css'
import {  Link, NavLink } from 'react-router-dom';
import auth from '../../confige/confige';
import { signOut } from 'firebase/auth';



function Header() {
  const [user] = useAuthState(auth)
  const logout = ()=>{
    signOut(auth)
  }
  
  return (
    <div className='headerSection'>

      <div className="headerContainer">
      <div className="headerLogo">
        <NavLink to = '/'><h1>Logo</h1></NavLink>
      </div>

      <div className="headerMenu">
      <nav className='menuControler'>
        <div className="mainNav">
        <NavLink to= '/'>Home</NavLink>
        <NavLink to = '/about'>About</NavLink>
        <NavLink to= '/contact'>Contact</NavLink>
        </div>
        <div className="registration">
          <NavLink to='/users'>Users</NavLink>
          {
            user? <Link onClick={logout}>Log Out</Link>: <NavLink to='/login'>Login</NavLink>
          }
          <span>{user?.displayName}</span>
          <span>{user?.photoURL?<img src={user?.photoURL} alt=""></img>:''} </span>
          <NavLink to='/signup'>SignUp</NavLink>
          </div>
      </nav>
      </div>
      </div>

    </div>
  )
}

export default Header