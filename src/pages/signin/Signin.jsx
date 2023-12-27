import style from "./Signin.module.css"
import image from "../../assets/cine.png"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";



export function Signin(){
    return(
        <div className={style.container}>
            <div className={style.form}>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>
                <h2>Faça seu login</h2>
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
                title="Entrar"
                />
                <div className={style.createAccount}>
                <TextButton
                title={"Criar conta"}
                />
                </div>
               
            </div>
           <img src={image} alt="" />
          
        </div>
    )
}