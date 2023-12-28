import style from "./Profile.module.css"
import { useNavigate } from "react-router-dom"

import { Input } from "../../components/Input"
import { TextButton } from "../../components/TextButton"
import { Button } from "../../components/Button"
import { FaArrowLeft } from "react-icons/fa"
import { CiMail, CiLock, CiUser, CiCamera } from "react-icons/ci"

export function Profile() {
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <header>
        <div className={style.back} onClick={()=>navigate(-1)}>
          <FaArrowLeft />
          <TextButton title={`Voltar`} />
        </div>
      </header>
      <main className={style.main}>
        <div className={style.avatar}>
          <img src="https://github.com/ismael-figueiredo.png" alt="" />
          <label htmlFor="avatar">
            <CiCamera size="20" />
          </label>
          <input id="avatar" type="file" />
        </div>

        <Input
          placeholder="Nome"
          icon={CiUser}
          type="text"
          value="Ismael Figueiredo"
        />
        <Input
          placeholder="Email"
          icon={CiMail}
          type="email"
          value="Ismael@email.com"
        />
        <br />
        <Input placeholder="Senha atual" icon={CiLock} type="password" />
        <Input placeholder="Nova senha" icon={CiLock} type="password" />
        <Button title="Salvar" />
      </main>
    </div>
  )
}
