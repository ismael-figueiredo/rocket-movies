import style from "./createmovie.module.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"

import { FaArrowLeft } from "react-icons/fa"
import { TextButton } from "../../components/TextButton"
import { NewItem } from "../../components/NewItem"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

export function CreateMovie() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewtag] = useState("")

 

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewtag("")
  }

  function handleRemovetag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }
  async function handleNewMovie() {
    if (!title) {
      return alert("Digite um título para o filme.")
    }
    if (!rating || rating < 0 || rating > 5) {
      return alert("Digite um nota de 0 a 5.")
    }
    if (!description) {
      alert("Digite uma breve sinopse do filme")
    }
    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, clique para adicionar ou remova."
      )
    }
    await api.post("/notes", {
      title,
      rating,
      description,
      tags,
    })
    alert("Filme criado com sucesso!")
    navigate("/")
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
            <Input
              id="title"
              type="text"
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              id="rating"
              type="number"
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div>
            <textarea
              id="description"
              className={style.textarea}
              placeholder="Oservações"
              onChange={(e) => setDescription(e.target.value)}
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
            <button className={style.buttonSave} onClick={handleNewMovie}>
              Salvar filme
            </button>
            <button className={style.buttonDelete}>Excluir filme</button>
          </div>
        </div>
      </main>
    </div>
  )
}
