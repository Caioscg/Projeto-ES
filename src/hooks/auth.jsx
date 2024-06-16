import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [ data, setData ] = useState("")

    async function signIn({ login, password }) {
        try {
            console.log("oláa")
            const response = await api.post("/sessions", { login, password })
            const { user, token } = response.data

            localStorage.setItem("@ufgorganized:user", JSON.stringify(user))
            localStorage.setItem("@ufgorganized:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar.")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@ufgorganized:user")
        localStorage.removeItem("@ufgorganized:token")

        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem("@ufgorganized:user")
        const token = localStorage.getItem("@ufgorganized:token")

        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                user: JSON.parse(user),
                token
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)  // inicializa o contexto que ta no AuthProvider

    return context  // essa variavel contém o conteudo dentro do value do context
}

export { AuthProvider, useAuth }