import { Route, Routes } from "react-router-dom"

import { Signin } from "../pages/signin/Signin"
import { Signup } from "../pages/signup/Signup"

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
