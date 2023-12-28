import style from "./Signin.module.css"
import image from "../../assets/cine.png"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"
import { CiMail } from "react-icons/ci"
import { CiLock } from "react-icons/ci"

export function Signin() {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")

  const navigate = useNavigate()
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }
  return (
    <div className={style.container}>
      <div className={style.form}>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>
        <h2>Faça seu login</h2>
        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          icon={CiMail}
          type="email"
        />
        <Input
          placeholder="Senha"
          icon={CiLock}
          type="password"
          onChange={(e) => setpassword(e.target.value)}
        />

        <Button 
        type="button"
        title="Entrar" 
        onClick={handleSignIn} />
        <div className={style.createAccount}>
          <TextButton
            title={"Criar conta"}
            onClick={() => navigate("/signup")}
          />
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  )
}
