import React from 'react'
import Addrestautant from '../components/Addrestautant'
import Header from '../components/Header'
import Restaurantlist from '../components/Restaurantlist'

const Home = () => {
  return (
    <div><Header></Header>
    <Addrestautant></Addrestautant>
    <Restaurantlist></Restaurantlist>
    </div>
  )
}

export default Home