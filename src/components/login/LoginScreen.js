import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
import { useForm } from '../../hooks/useForm'

const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    const [{ usuario }, handleInput] = useForm({ usuario: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const userState = { name: usuario };
        console.log(userState);
        localStorage.setItem('user', JSON.stringify(userState))
        dispatch({
            type: types.login,
            payload: {
                ...userState
            }
        });
        const lastPath = localStorage.getItem('lastPath') || '/';
        history.replace(lastPath);
    }

    return (
        <div className="bg-gray-200 h-screen flex justify-center items-center">
            <div className="bg-white absolute rounded shadow md:w-1/2 lg:w-1/4 sm:w-80">
                <div className="flex justify-around">
                    <div className=" border-b-2 p-2 m-3 border-loginBtn">
                        <span className="text-gray-00 font-semibold cursor-pointer uppercase">
                            LOG IN
                        </span>
                    </div>
                    <div className="border-b-2 p-2 m-3 border-transparent">
                        <span className="text-gray-500 p-2 m-3 font-semibold cursor-pointer uppercase">
                            SIGN In
                        </span>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 m-10">
                        <div className="flex justify-center items-center">
                            <FontAwesomeIcon icon={faUserCircle} className="text-gray-400 text-8xl mb-4 mt-4" />
                        </div>
                        <input type="text" name="usuario" onChange={handleInput} value={usuario} className="bg-gray-100 rounded m-2 p-2 hover:shadow focus:outline-none focus:ring-2 focus:ring-loginBtn focus:border-transparent" placeholder="Usuario" required />
                        {/* <input type="text" className="bg-gray-100 rounded m-2 p-2 hover:shadow focus:outline-none focus:ring-2 focus:ring-loginBtn focus:border-transparent" placeholder="Contraseña" /> */}
                        <button type="submit" className="border-loginBtn shadow-xl p-2 m-2 border-2 rounded bg-loginBtn text-white hover:bg-red-700 hover:border-red-700 focus:border-transparent">Iniciar sesion</button>
                    </div>
                    <div className="bg-gray-100 relative p-8 flex justify-center items-center">
                        <span className="text-gray-400 font-semibold cursor-pointer hover:text-loginBtn">Olvidaste tu contraseña ?</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen
