import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './Components/User/Index'
import Create from './Components/User/Create'
import Details from './Components/Details/Details'
import Edit from './Components/Edit/Edit'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Index/>}/>
        <Route path='/user/index' element = {<Index />}/>
        <Route path='/user/create' element = {<Create />}/>
        <Route path='/user/:id' element = {<Details />}/>
        <Route path='/user/edit/:id' element = {<Edit />}/>
        <Route path='*' element = {<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </>
  )
}
