import style from "./register.module.css"

import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/userAuthentication"

const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");
    const [error, setError] = useState("");

    const {createUser, error: authError, loading} = useAuthentication();

 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
       
        const user = {
            displayName,
            email,
            password
        }

        if(password !== confpassword){
            setError("As senhas precisam ser iguais!")
            return
        }

        const res = await createUser(user)

        console.log(user)
    };

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    })



    return (
        <div className={style.telacadastro}>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome</span>
                    <input
                        type="text"
                        name="displayname"
                        required
                        placeholder="Nome do usuário"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>E-mail</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirmação de senha</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme a sua senha"
                        value={confpassword}
                        onChange={(e) => setConfpassword(e.target.value)}
                    />
                </label>
                {!loading && <button className="btn" >Cadastrar</button>}
                {loading && <button className="btn" disable>Aguarde</button>}
                {error && <p style={{ color: 'red' }} >{error}</p>}
            
                
            </form>

        </div>
    )
}

export default Register