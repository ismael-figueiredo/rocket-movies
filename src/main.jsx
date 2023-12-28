import React from "react"
import ReactDOM from "react-dom/client"
import { Routes } from "./routes"

import { AuthProvider } from "./hooks/auth"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
)
