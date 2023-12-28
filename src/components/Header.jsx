import style from "./Header.module.css"
import { useNavigate } from "react-router-dom"

import { Input } from "./Input"
import { CiSearch } from "react-icons/ci"

export function Header() {
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <h2 onClick={() => navigate("/")}>RocketMovies</h2>
      <div className={style.search}>
        <Input
          id="search"
          icon={CiSearch}
          type="text"
          placeholder="Pesquise aqui"
        />
      </div>
      <div className={style.avatar}>
        <div className={style.user}>
          <span className={style.userName}>Ismael Figueiredo</span>
          <span className={style.logout}>sair</span>
        </div>
        <div>
          <img
            onClick={() => navigate("/profile")}
            src="https://github.com/ismael-figueiredo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
