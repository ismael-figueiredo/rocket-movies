import style from "./createmovie.module.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { FaArrowLeft } from "react-icons/fa"
import { TextButton } from "../../components/TextButton"
import { NewItem } from "../../components/NewItem"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

export function CreateMovie() {
  const navigate = useNavigate()
  const [tags, setTags] = useState([])
  const [newTag, setNewtag] = useState("")

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewtag("")
  }

  function handleRemovetag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  return (
    <div className={style.container}>
      <Header />
      <main>
        <div title="novo filme" className={style.title}>
          <div className={style.back} onClick={() => navigate(-1)}>
            <FaArrowLeft />
            <TextButton title={`Voltar`} />
          </div>
          <h2>Novo filme</h2>
        </div>

        <div title="formulário" className={style.form}>
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

          <div className={style.markers}>
            {tags.map((tag, index) => (
              <NewItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemovetag(tag)}
              />
            ))}
            <NewItem
              isNew
              onChange={(e) => setNewtag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>
          <div className={style.buttons}>
            <button className={style.buttonSave}>Salvar filme</button>
            <button className={style.buttonDelete}>Excluir filme</button>
          </div>
        </div>
      </main>
    </div>
  )
}
