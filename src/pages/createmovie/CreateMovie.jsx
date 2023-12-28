import { Header } from "../../components/Header"
import style from "./createmovie.module.css"
import { FaArrowLeft } from "react-icons/fa"
import { TextButton } from "../../components/TextButton"
import { Input } from "../../components/Input"

export function CreateMovie() {
  return (
    <div className={style.container}>
      <Header />
      <main>
        <div className={style.title}>
          <div className={style.back}>
            <FaArrowLeft />
            <TextButton title={`Voltar`} />
          </div>
          <h2>Novo filme</h2>
        </div>

        <div className={style.form}>
          <div className={style.input}>
            <Input type="text" placeholder="Título" />
            <Input type="number" placeholder="Sua nota (de 0 a 5)" />
          </div>
          <div>
            <textarea
              className={style.textarea}
              placeholder="Oservações"
            ></textarea>
          </div>

          <span className={style.title2}>Marcadores</span>
          <div className={style.markers}></div>
          <div className={style.buttons}>
            <button className={style.buttonSave}>Salvar filme</button>
            <button className={style.buttonDelete}>Excluir filme</button>
          </div>
        </div>
      </main>
    </div>
  )
}
