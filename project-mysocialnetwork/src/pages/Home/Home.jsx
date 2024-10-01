import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import style from "./home.module.css"

const Home = () => {
  return (
    <div className={style.home}>
      <Navbar/>
    </div>
  )
}

export default Home