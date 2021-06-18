import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selector/getHeroById';

const heroesPath = require.context('../../assets/heroes/', true);

const HeroesScreen = ({ history }) => {
    const { heroeId } = useParams();
    // console.log(heroesPath(`./${heroeId}.jpg`).default)
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
    
    // console.log(hero);
    if (!hero) {
        return <Redirect to='/'></Redirect>
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const backIMG = {
        backgroundImage: `url(http://blog.tiching.com/wp-content/uploads/2019/06/El-cómic-para-enseñar-historia.jpg)`,
        backgroundRepeat: 'no-repeat',
        height: '300px'
    }

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    return (
        <div className="flex justify-center" >
            <div className="w-3/4 rounded flex justify-center shadow" style={backIMG} >
                <div className="w-1/2 absolute top-48 flex hover:transform-gpu hover:-translate-y-102 ease-linear duration-75 bg-white m-2 rounded shadow">
                    <img src={ heroesPath(`./${heroeId}.jpg`).default } className="w-1/6 rounded m-3 shadow animate__animated animate__flipInX" alt="Hero" />
                    <div className=" h-1/3 p-5 rounded m-3">
                        <h4 className="font-semibold uppercase text-xl">
                            {
                                superhero
                            }
                        </h4>
                        <p className="m-3 ">
                            {alter_ego}
                        </p>
                        <p className="m-3 ">
                            {publisher}
                        </p>
                        <p className="m-3 ">
                            {characters}
                        </p>
                        <small className="text-gray-500">
                            {
                                first_appearance
                            }
                        </small>
                        <button type="button" onClick={handleReturn} className="border-loginBtn w-full p-1 mt-3 border-2 rounded bg-loginBtn text-white hover:bg-red-700 hover:border-red-700 focus:border-transparent">
                            Return
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroesScreen
