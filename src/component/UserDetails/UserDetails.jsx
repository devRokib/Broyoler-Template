import './UserDetails.css'
import { useLoaderData } from 'react-router-dom'

function UserDetails() {
    const userInfo = useLoaderData()
    
    const {username,name,phone,email}= userInfo
  return (
    <div>
        <div className="detailsUser">
        <div className="userImg">
        <img src="https://i.ibb.co/cJ8GBX2/photo-1633332755192-727a05c4013d.jpg" alt="photo-1633332755192-727a05c4013d" border="0"/>
        </div>
        <div className="userInfo">
            <h1 >User Information</h1>
            <hr />
        <h4>{username}</h4>
        <h4>{name}</h4>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        </div>
        </div>
        
    </div>
  )
}

export default UserDetails