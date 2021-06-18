import React from 'react'
import { Link } from 'react-router-dom'

const herosPath = require.context('../../assets/heroes/', true);
const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="shadow border-gray-200 m-1 h-auto rounded lg:w-1/5 sm:w1 md:w-1/3 hover: transform-gpu hover:-translate-y-2 ease-linear duration-75 mt-10">
            <div className="lg:flex sm:block ">
                <div className="bg-blue-800  w-100 h-100 rounded-tl rounded-tr"></div>
                <img src={herosPath(`./${id}.jpg`).default } className="lg:w-1/2 sm:w1 rounded-tl rounded-bl hover:filter hover:grayscale " alt={superhero} />
                <div className="flex flex-col flex-auto justify-between">
                    <div className="p-2">
                        <h4 className="font-semibold text-lg uppercase ">{superhero}</h4>
                        <div className="text-gray-800">{alter_ego}</div>
                        <small className="text-gray-500">{first_appearance}</small>
                    </div>
                    <Link className="p-2 w-auto bg-gray-100 rounded-br  text-red-700 font-semibold hover:bg-red-900 hover:text-white relative bottom-0" to={`/heroe/${id}`}>Ver más</Link>
                </div>
            </div>
        </div >
    )
}

export default HeroCard
