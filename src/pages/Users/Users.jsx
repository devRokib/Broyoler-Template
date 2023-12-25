import { useLoaderData } from 'react-router-dom'
import './Users.css'
import User from '../../component/User/User'

function Users() {
    const userData = useLoaderData()
   
  return (
    <div className='mainCard'>
        {
            userData.map((user)=> <User key={user.id} user={user}/>)
        }
    </div>
  )
}

export default Users