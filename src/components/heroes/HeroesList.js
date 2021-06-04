import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selector/getHeroesByPublisher';
import HeroCard from './HeroCard';

export const HeroesList = ({ publisher }) => {
    const data = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    
    return (
        <div className="flex justify-around flex-wrap content-start items-start animate__animated animate__fadeIn">
            {
                data.map(h => (
                    <HeroCard key={h.id} {...h}></HeroCard>
                ))
            }
        </div>
    )
}
