import style from "./Home.module.css"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { CardMovie } from "../../components/CardMovie"
import { Header } from "../../components/Header"
import { GoPlus } from "react-icons/go"
import { useEffect, useState } from "react"

export function Home() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [movie, setMovie] = useState([])
  const [tags, settags] = useState([])

  const handleSearchChange = (value) => {
    setSearch(value)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`)

      setMovie(response.data)
    }
    fetchMovies()
  }, [search])

  useEffect(() => {
    async function fetchtags() {
      const response = api.get("/tags")
      settags(response.data)
    }
    fetchtags()
  }, [])

  return (
    <div className={style.container}>
      <Header onSearchChange={handleSearchChange} />
      <main>
        <div className={style.title}>
          <h2>Meus filmes</h2>
          <button onClick={() => navigate("/create")}>
            <GoPlus size="16" />
            Adicionar filme
          </button>
        </div>
        <div className={style.content}>
          {movie.map((movie) => (
            <a href={`/previw/${movie.id}`}>
              <CardMovie key={String(movie.id)} data={movie} />
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
