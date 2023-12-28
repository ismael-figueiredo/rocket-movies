import style from "./Signup.module.css"
import image from "../../assets/cine.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"
import { CiMail, CiLock, CiUser } from "react-icons/ci"
import { FaArrowLeft } from "react-icons/fa"

export function Signup() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  function handleSignup() {
    console.log(name, email, password)
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password }).then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    }).catch(error => {
        if(error.response){
            alert(error.response.data.message)
        }else{
            alert("Não foi possível cadastrar!")
        }
    })
  }
  return (
    <div className={style.container}>
      <div className={style.form}>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>
        <h2>Crie sua conta</h2>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          icon={CiUser}
          type="text"
        />
        <Input
          placeholder="Email"
          icon={CiMail}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          icon={CiLock}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignup} />
        <div className={style.createAccount}>
          <FaArrowLeft />
          <TextButton
            title={`Voltar para o login`}
            onClick={() => navigate("/")}
          />
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  )
}
