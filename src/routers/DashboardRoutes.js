import React from 'react'
import { Navbar } from '../components/ui/Navar'
import { Route, Switch, Redirect } from 'react-router-dom';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-5">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/dc" component={DcScreen}></Route>
                    <Route exact path="/heroe/:heroeId" component={HeroesScreen}></Route>
                    <Route exact path="/search" component={SearchScreen}></Route>
                    <Redirect to="/marvel"></Redirect>
                </Switch>
            </div>
        </>
    )
}
