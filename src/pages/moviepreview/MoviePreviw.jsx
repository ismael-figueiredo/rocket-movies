import style from "./MoviePreviw.module.css"
import { Header } from "../../components/Header"
import { FaArrowLeft, FaRegClock } from "react-icons/fa"
import { TextButton } from "../../components/TextButton"
import { MdStar, MdStarBorder } from "react-icons/md"
import { Tag } from "../../components/Tag"
import { useAuth } from "../../hooks/auth"
import { useState,useEffect } from "react"
import {api} from "../../services/api.js"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function Moviepreviw({ title, rating=0, synopsis, tag=["teste"] }) {

  const {user} = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder
  const renderStars = () => {
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
  const renderTags = () => {
    return tag.map((t, index) => <Tag key={index} text={t} />)
  }
  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <div className={style.back}>
          <FaArrowLeft />
          <TextButton title={`Voltar`} />
        </div>
        <div className={style.title}>
          <h2>{title}Interestellar</h2>
          <div className={style.stars}> {renderStars()}</div>
        </div>
        <div className={style.info}>
          <img src={avatarUrl} alt="" />
          <span>{`Por ${user.name}`}</span>
          <FaRegClock />
          <span> 28/12/2023 às 14:00</span>
        </div>
        <div className={style.tag}> {tag && renderTags()}</div>
        <p>
          {synopsis}Pragas nas colheitas fizeram a civilização humana regredir
          para uma sociedade agrária em futuro de data desconhecida. Cooper,
          ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de
          dez anos de Cooper, acredita que seu quarto está assombrado por um
          fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
          "fantasma" é uma inteligência desconhecida que está enviando mensagens
          codificadas através de radiação gravitacional, deixando coordenadas em
          binário que os levam até uma instalação secreta da NASA liderada pelo
          professor John Brand. O cientista revela que um buraco de minhoca foi
          aberto perto de Saturno e que ele leva a planetas que podem oferecer
          condições de sobrevivência para a espécie humana. As "missões Lázaro"
          enviadas anos antes identificaram três planetas potencialmente
          habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann
          – nomeados em homenagem aos astronautas que os pesquisaram. Brand
          recruta Cooper para pilotar a nave espacial Endurance e recuperar os
          dados dos astronautas; se um dos planetas se mostrar habitável, a
          humanidade irá seguir para ele na instalação da NASA, que é na
          realidade uma enorme estação espacial. A partida de Cooper devasta
          Murphy.
        </p>
      </main>
    </div>
  )
}
