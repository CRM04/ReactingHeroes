import React from 'react'
import { HeroesList } from '../heroes/HeroesList';

const MarvelScreen = () => {
    const publisher = "Marvel Comics";

    return (
        <div>
            <HeroesList publisher={publisher}></HeroesList>
        </div>
    )
}

export default MarvelScreen
