import style from "./Profile.module.css"
import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { Input } from "../../components/Input"
import { TextButton } from "../../components/TextButton"
import { Button } from "../../components/Button"
import { FaArrowLeft } from "react-icons/fa"
import { CiMail, CiLock, CiUser, CiCamera } from "react-icons/ci"
import { api } from "../../services/api"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const [avatar, setavatar] = useState(avatarUrl)
  const [avatarfile, setAvatarfile] = useState()

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }
    await updateProfile({ user, avatarfile })
  }

  function handleAvatar(e) {
    const file = e.target.files[0]
    setAvatarfile(file)

    const imagePreviw = URL.createObjectURL(file)
    setavatar(imagePreviw)
  }

  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <header>
        <div className={style.back} onClick={() => navigate(-1)}>
          <FaArrowLeft />
          <TextButton title={`Voltar`} />
        </div>
      </header>
      <main className={style.main}>
        <div className={style.avatar}>
          <img src={avatar} alt="" />
          <label htmlFor="avatar">
            <CiCamera size="20" />
          </label>
          <input id="avatar" type="file" onChange={handleAvatar} />
        </div>

        <Input
          placeholder="Nome"
          icon={CiUser}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          icon={CiMail}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Input
          placeholder="Senha atual"
          icon={CiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
          type="password"
        />
        <Input
          placeholder="Nova senha"
          icon={CiLock}
          type="password"
          onChange={(e) => setPasswordNew(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </main>
    </div>
  )
}
