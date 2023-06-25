import React from 'react'
import imagen2 from '../assets/java_docker.jpg'
import imagen1 from '../assets/polygrap.jpg'
import imagen3 from '../assets/node.jpg'
import Card from './Card'
const cards = [
    {
        id:1,
        title: 'React Fast',
        image: imagen1,
        instructor: "Agustin Meza"
    },
    {
        id:2,
        title: 'Java Docker',
        image: imagen2,
        instructor: "Sheila Nav"
    },
    {
        id:3,
        title : 'node JS',
        image: imagen3,
        instructor: 'valentin pérez'
    }
 
]
export default function Cards() {
 
  return (
    <div className='container d-flex justify-content-center align-item-center h-100'>
        <div className='row'>
            <div className='col-md-4'>
                <Card/>
            </div>
            <div className='col-md-4'>
                <Card/>
            </div>
            <div className='col-md-4'>
                <Card/>
            </div>
        </div>
    </div>
  )
}
