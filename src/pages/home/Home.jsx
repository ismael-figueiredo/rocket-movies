import style from "./Home.module.css"
import { Header } from "../../components/Header"


export function Home(){
    return(
        <div className={style.container}>
            <Header/>
        </div>
    )
}