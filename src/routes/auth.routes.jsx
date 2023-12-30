import React, { useState, useEffect } from "react"
import { Route, Routes, Navigate, useLocation } from "react-router-dom"

import { Signin } from "../pages/signin/Signin"
import { Signup } from "../pages/signup/Signup"
import { Loader } from "../common/Loader/Loader"

export function AuthRoutes() {
  const user = localStorage.getItem("@rocketmovies:user")
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 500) 

    return () => clearTimeout(timer)
  }, [location])
  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {!user && <Route path="*" element={<Navigate to="/" />} />}
      </Routes>
    </>
  )
}
