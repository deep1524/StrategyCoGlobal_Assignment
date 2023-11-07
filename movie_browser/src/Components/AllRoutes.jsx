import React from 'react'
import MovieList from '../pages/Home'
import Moviedetails from '../pages/Moviedetails'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        
        <Route path="/" element={<MovieList/>}></Route>
        <Route path="/movie/:person_imdbID" element={<Moviedetails/>}></Route>
    </Routes>
  )
}

export default AllRoutes