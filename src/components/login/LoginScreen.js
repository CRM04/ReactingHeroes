import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const loginScreen = ({ history }) => {

    const logIn = () => {
        history.replace('/')
    }

    return (
        <div className="bg-gray-200 h-screen flex justify-center items-center">
            <div className="bg-white absolute rounded shadow md:w-1/2 lg:w-1/4 sm:w-80">
                <div className="flex justify-around">
                    <div className=" border-b-2 p-2 m-3 border-loginBtn">
                        <span className="text-gray-00 font-semibold cursor-pointer ">
                            LOG IN
                        </span>
                    </div>
                    <div className="border-b-2 p-2 m-3 border-transparent">
                        <span className="text-gray-500 p-2 m-3 font-semibold cursor-pointer">
                            SIGN IN
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 m-10">
                    <div className="flex justify-center items-center">
                        <FontAwesomeIcon icon={faUserCircle} className="text-gray-400 text-8xl mb-4 mt-4" />
                    </div>
                    <input type="text" className="bg-gray-100 rounded m-2 p-2 hover:shadow focus:outline-none focus:ring-2 focus:ring-loginBtn focus:border-transparent" placeholder="Usuario" />
                    <input type="text" className="bg-gray-100 rounded m-2 p-2 hover:shadow focus:outline-none focus:ring-2 focus:ring-loginBtn focus:border-transparent" placeholder="Contraseña" />
                    <button type="button" onClick={logIn} className="border-loginBtn shadow-xl p-2 m-2 border-2 rounded bg-loginBtn text-white hover:bg-red-700 hover:border-red-700 focus:border-transparent">Iniciar sesion</button>

                </div>
                <div className="bg-gray-100 relative p-8 flex justify-center items-center">
                    <span className="text-gray-400 font-semibold cursor-pointer hover:text-loginBtn">Olvidaste tu contraseña ?</span>
                </div>
            </div>
        </div>
    )
}

export default loginScreen
