import { Route, Routes, Navigate } from "react-router-dom"

import { Signin } from "../pages/signin/Signin"
import { Signup } from "../pages/signup/Signup"

export function AuthRoutes() {
  const user = localStorage.getItem("@rocketmovies:user")
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      {!user && <Route path="*" element={<Navigate to="/"/>}/>}
    </Routes>
  )
}
