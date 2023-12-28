import style from "./Signup.module.css"
import image from "../../assets/cine.png"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { CiMail, CiLock, CiUser } from "react-icons/ci"
import { FaArrowLeft } from "react-icons/fa";



export function Signup(){
    return(
        <div className={style.container}>
            <div className={style.form}>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>
                <h2>Crie sua conta</h2>
                <Input 
                    placeholder="Nome"
                    icon={ CiUser }
                    type="text"
                />
                <Input 
                    placeholder="Email"
                    icon={ CiMail }
                    type="email"
                />
                 <Input 
                    placeholder="Senha"
                    icon={ CiLock }
                    type="password"
                />
                <Button 
                    title="Cadastrar"
                />
                <div className={style.createAccount}>
                    <FaArrowLeft/>
                    <TextButton
                         title={`Voltar para o login`}
                />  
                </div>
               
            </div>
           <img src={image} alt="" />
          
        </div>
    )
}