import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import data from "../Components/Assets/data";
import new_collections from "../Components/Assets/new_collections"
const Shop = () => {

  
  
  return (
    <div>
      <Hero/>
      <Popular data={data}/>
      <Offers/>
      <NewCollections data={new_collections}/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
