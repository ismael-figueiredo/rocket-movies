import style from './Tag.module.css'

export function Tag({ text }) {
  return (
    <div className={style.container}>
      <span>{ text }</span>
    </div>
  )
}
