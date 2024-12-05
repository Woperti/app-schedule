import React, { useEffect } from 'react'

const LoginView = () => {
    useEffect(() => {
        document.title = "Bienvenido"
    }, [])

    return (
        <div>
            <label>Correo
                <input
                    placeholder='Email raiz'
                    name="email"
                />
            </label>
            <label>
                Contrasena
                <input
                    placeholder='Contrasenia'
                    name="password"
                />
            </label>
        </div>
    )
}

export const AuthenticationCodeView = () => {
    return (
        <div>

        </div>
    )
}

export default LoginView