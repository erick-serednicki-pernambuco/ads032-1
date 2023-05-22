import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function Login(props) {
    const navigate = useNavigate();
    const refInputEmail = useRef();
    const refInputSenha = useRef();
    const [erroEmail, setErroEmail] = useState();

    function handleClick(event) {
        props.onLogin(event);
        navigate("/");
    }

    function handleBLurInputEmail(event){
        if(refInputEmail.current.value.length == 0){
            setErroEmail("Email Obrigatorio");
        }else{
            setErroEmail(null)
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input tipe="email" id="email" name="email" ref={refInputEmail} onBlur={handleBLurInputEmail} />
                {erroEmail && <p>{erroEmail}</p>}
                <label htmlFor="senha">Senha</label>
                <input tipe="password" id="senha" name="senha" ref={refInputSenha}  />
                <button onClick={handleClick}>Entrar</button>
               
            </form>

        </>
    )
}