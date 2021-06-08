import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { getHerosByName } from '../../selector/getHerosByName';

export const SearchScreen = ({ history }) => {
    
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    // console.log(q);
    
    const [formValues, handleInput] = useForm({ filter: q });
    const { filter } = formValues;
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('?q=' + filter);
    }
    
    const herosFiltered = useMemo(() => getHerosByName(q), [q]);
    
    return (
        <div>
            <div className="flex justify-center">
                <div className="shadow-md w-1/2 rounded">

                    <div className="bg-gray-700 rounded-t p-2">
                        <h4 className="text-xl text-semibold uppercase text-white">Search a hero</h4>
                    </div>
                    <div className="mb-2">
                        <form onSubmit={handleSubmit}>
                            <div className="p-2 m-2">
                                <input type="text" name="filter" autoComplete='off' value={filter} onChange={handleInput} className="border rounded p-2 w-full bg-gray-100 focus-within:border-red-700 hover:border-red-700" placeholder="Type hero's name here" />
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="border p-2 rounded border-red-800 text-red-800 hover:bg-red-600 hover:text-white"> Search </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h4 className="text-xl text-semibold uppercase text-red-800">Results... for {filter}</h4>
                <div className="flex justify-around flex-wrap content-start items-start animate__animated animate__fadeIn">

                    {
                        herosFiltered.length > 0 ?
                        herosFiltered.map(h => (
                            <HeroCard key={h.id} {...h} />
                        )) :
                        (
                            <div className="bg-yellow-700 uppercase p-2 rounded text-white w-1/2 text-center ">
                                No heroes found
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
