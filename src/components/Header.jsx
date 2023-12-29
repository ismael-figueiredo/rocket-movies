import style from "./Header.module.css"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/auth"
import { api } from "../services/api"
import { useState } from "react"
import { Input } from "./Input"
import { CiSearch } from "react-icons/ci"
import avatarPlaceholder from "../assets/avatar_placeholder.svg"

export function Header({ onSearchChange }) {
  const { signOut, user } = useAuth()

  const [search, setSearch] = useState("")

  const handleInputChange = (event) => {
    setSearch(event.target.value)
    onSearchChange(event.target.value) // Chamar a função de callback
  }
  const navigate = useNavigate()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <div className={style.container}>
      <h2 onClick={() => navigate("/")}>RocketMovies</h2>
      <div className={style.search}>
        <Input
          id="search"
          icon={CiSearch}
          type="text"
          placeholder="Pesquise aqui"
          onChange={handleInputChange}
        />
      </div>
      <div className={style.avatar}>
        <div className={style.user}>
          <span className={style.userName}>{`Olá, ${user.name}`}</span>
          <span className={style.logout} onClick={signOut}>
            sair
          </span>
        </div>
        <div>
          <img onClick={() => navigate("/profile")} src={avatarUrl} alt="" />
        </div>
      </div>
    </div>
  )
}
