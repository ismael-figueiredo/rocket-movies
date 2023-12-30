
import { useState, useEffect } from "react"
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import {Loader} from "../common/Loader/Loader"

import { CreateMovie } from "../pages/createmovie/CreateMovie"
import { Home } from "../pages/home/Home"
import { Profile } from "../pages/profile/Profile"
import { Moviepreviw } from "../pages/moviepreview/MoviePreviw"

export function AppRoutes() {
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 200) 

    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateMovie />} />
        <Route path="/previw/:id" element={<Moviepreviw />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
