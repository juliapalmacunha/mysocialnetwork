import { db } from "../firebase/config"


//importa as funçoes de autenticação do firebase
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {

    const [error, setError] = useState(null) //armazena os estados de erro
    const [loading, setLoading] = useState(null)//armazena o estado de carregamento
    const [cancelled, setCancelled] = useState(false)//armazena a informaçao se o componente for desmontado

    const auth = getAuth() //inicializa a autenticação

    //função que verifica se o componente foi desmontado ou não
    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    //ciração do usuario, utiliza o async para que possa usar o await nela, pois certas operaçoes demoram para carregar
    const createUser = async (data) => { //recebe data que contem os valores do usuario

        checkIfIsCancelled() //verifica se o componente foi desmontado antes de começar a operação
        setLoading(true)//bota para carregar
        setError(null)//reseta o estado de erro para null

        try { //captura qualquer erro que acontecer durante a execução e manda para o catch

            const { user } = await createUserWithEmailAndPassword( //colocando todos esses dados em user
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {displayName: data.displayName}); //atualiza o nome exibido do ususario passando dois parametros necessario, o objeto e o item do objeto que irá ser atualizado

            setLoading(false); //carregamento se encerra

            return user; //retorna o objeto user, os dados do usuario

        } catch (error) {//esse parametro passado para o catch é o erro encontrado
            // Verifique se error é um objeto e tem a propriedade message
            if (error && error.message) {
                console.log(error.message);
                console.log(typeof error.message);
            } else {
                console.log("Erro desconhecido:", error);
            }

            let systemErrorMessage
            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres."
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado"
            }else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setError(systemErrorMessage)//armazena a mensagem de erro para exibir para o usuario
        }
        
    };

    //depois de tudo ter sido renderizado, transformamos o valor para true para quando for renderizado de novo
    //o useeffect é usado para ditar os efeitos colaterais caso a renderização seja interrompida
    useEffect(() => { //isso fica depois de tudo pois se ficasse no inicio o componente ja seria montado com o valor de desmontado
        return () => setCancelled(true)
    }, []);




    return {
        auth,
        createUser,
        error,
        loading
    }
};