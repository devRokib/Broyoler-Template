import UserDetails from '../UserDetails/UserDetails';
import './User.css'
import { NavLink } from 'react-router-dom';

function User({user:{id,name,email,website,company:{name:companyNamme}}}) {
    
  return (
    <div>
        <div className="cards">
            <div className="card">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p>Company: {companyNamme}</p>
            <NavLink to={`/users/${id}`}>
            <button className='UserBtn'>User Details</button>
            </NavLink>
            </div>
        </div>
    </div>
  )
}

export default User