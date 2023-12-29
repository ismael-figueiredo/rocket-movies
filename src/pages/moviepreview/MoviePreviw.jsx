import style from "./MoviePreviw.module.css"
import { Header } from "../../components/Header"
import { FaArrowLeft, FaRegClock } from "react-icons/fa"
import { TextButton } from "../../components/TextButton"
import { MdStar, MdStarBorder } from "react-icons/md"
import { Tag } from "../../components/Tag"
import { useAuth } from "../../hooks/auth"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api.js"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom"
export function Moviepreviw() {
  const [data, setData] = useState(null)
  console.log(data)

  const params = useParams()

  const { user } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const renderStars = () => {
    const rating = data.rating
    const totalStars = 5
    let stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<MdStar size="20" key={`star_filled_${i}`} />)
    }
    for (let i = rating; i < totalStars; i++) {
      stars.push(<MdStarBorder size="20" key={`star_border_${i}`} />)
    }
    return stars
  }
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])
 const navigate = useNavigate()
  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <div className={style.back}>
          <FaArrowLeft />
          <TextButton 
          onClick={()=> navigate("/")}
          title={`Voltar`} />
        </div>
        {data && (
          <div>
            <div className={style.title}>
              <h2>{data.title}</h2>
              <div className={style.stars}> {renderStars()}</div>
            </div>
            <div className={style.info}>
              <img src={avatarUrl} alt="" />
              <span>{`Por ${user.name}`}</span>
              <FaRegClock />
              <span> {data.created_at}</span>
            </div>
            {data.tags && (
              <div className={style.tag}>
                {data.tags.map((tag) => (
                  <Tag 
                  key={String(tag.id)}
                  text={tag.name} />
                ))}
              </div>
            )}
            <p>{data.description}</p>
          </div>
        )}
      </main>
    </div>
  )
}
