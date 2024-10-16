import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div className='max-w-7xl mx-auto'>
    <Header></Header>    
    <Outlet></Outlet>

    </div>
  )
}
