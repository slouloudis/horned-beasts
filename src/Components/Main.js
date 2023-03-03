import React from 'react'
import HornedBeast from './HornedBeast'
import data from "../data.json"


export default function Main() {
  return (
    <div class="coolClass">
      {
      data.map((arrayItem) => {
        return <HornedBeast title={arrayItem.title} imageUrl={arrayItem.image_url} description={arrayItem.description}/>
      })
      }
    </div>
  )
}

