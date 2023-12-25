import React from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loading from '../../component/Loading/Loading'


function MainLayout() {
  const navigation = useNavigation()
  // console.log(navigation)
  return (
    <div>
        <Header/>
        {
          navigation.state ==="loading"?<Loading/>:<Outlet/>
        }
        
        <Footer/>
    </div>
  )
}

export default MainLayout