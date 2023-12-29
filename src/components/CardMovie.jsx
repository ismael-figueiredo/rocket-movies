import React from "react"
import style from "./CardMovie.module.css"
import { MdStar, MdStarBorder } from "react-icons/md"
import { Tag } from "./Tag"

export function CardMovie({ data, ...rest}) {
  const rating = data.rating
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
 

  return (
    <div className={style.container}>
      <h2>{data.title}</h2>
      <div>{renderStars()}</div>
      <p>{data.description}</p>
      {data.tags.map((tag) => (
        <Tag key={tag.id} text={tag.name} />
      ))}
    </div>
  )
}
