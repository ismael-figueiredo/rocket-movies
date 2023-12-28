import { Route, Routes } from "react-router-dom"

import { CreateMovie } from "../pages/createmovie/CreateMovie"
import { Home } from "../pages/home/Home"
import { Profile } from "../pages/profile/Profile"
import { Moviepreviw } from "../pages/moviepreview/MoviePreviw"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/previw/:id" element={<Moviepreviw />} />
    </Routes>
  )
}
