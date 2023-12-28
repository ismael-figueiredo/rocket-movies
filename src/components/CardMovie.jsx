import React from "react"
import style from "./CardMovie.module.css"
import { MdStar, MdStarBorder } from "react-icons/md"
import { Tag } from "./Tag"

export function CardMovie({ title, synopsis, rating = 0 ,tag}) {
  const renderStars = () => {
    const totalStars = 5
    let stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<MdStar key={`star_filled_${i}`} />)
    }
    for (let i = rating; i < totalStars; i++) {
      stars.push(<MdStarBorder key={`star_border_${i}`} />)
    }
    return stars
  }
  const renderTags = () => {
    return tag.map((t, index) => <Tag key={index} text={t} />)
  }

  return (
    <div className={style.container}>
      <h2>{title}</h2>
      <div>{renderStars()}</div>
      <p>{synopsis}</p>
      {tag && renderTags()}
    </div>
  )
}
