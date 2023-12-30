import style from "./Loader.module.css"
import { RiMovie2Fill } from "react-icons/ri"


export function Loader(){
  return (
    <div className={style.container}>
      <RiMovie2Fill  size="200"/>
    </div>
  )
}