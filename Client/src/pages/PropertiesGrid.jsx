import Cards from '../components/propertiesGrid/Cards'
import GridView from '../components/propertiesGrid/GridView'
import Sorting from '../components/propertiesGrid/Sorting'
import React from 'react'

export default function PropertiesGrid() {
  return (
    <div>
        <GridView/>
        <Sorting/>
        <Cards/>


    </div>
  )
}
