
import './Home.css'
import Header from '../../components/Header/Header'
import ExplorMenu from '../../components/ExploreMenu/ExplorMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { useState } from 'react'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    const[category,setCategory]=useState("All");
  return (
    <div>
        <Header />
        <ExplorMenu category={category} setCategory={setCategory}/>
        <FoodDisplay  category={category} />
        <AppDownload/>
    </div>
  )
}

export default Home