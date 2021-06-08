import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const { user, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogOut = () => {
        dispatch({
            type: types.logout
        });
        history.replace("/login");
    }

    return (
        <div className="">
            <nav className="bg-navBar shadow-2xl" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex sm:justify-between lg:justify-start">
                        <div className="flex items-center">
                            <div className="">
                                <img
                                    className="h-14 w-auto"
                                    src="../assets/heroes/logo.png"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:flex justify-between">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <NavLink
                                        activeClassName="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        exact
                                        to="/marvel"
                                    >
                                        Marvel
                                    </NavLink>

                                    <NavLink
                                        activeClassName="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        exact
                                        to="/dc"
                                    >
                                        DC
                                    </NavLink>

                                    <NavLink
                                        activeClassName="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        exact
                                        to="/search"
                                    >
                                        Search
                                    </NavLink>
                                </div>
                                <div className=" flex items-baseline space-x-4">
                                    <p className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                                        {user.name}
                                    </p>
                                    <button
                                        className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        onClick={handleLogOut}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center pt-1 pb-1 pr-2 pl-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {
                                    !isOpen ? <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg> : <svg
                                        className="hidden h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                }


                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink
                                    activeClassName="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    exact
                                    to="/marvel"
                                >
                                    Marvel
                                    </NavLink>

                                <NavLink
                                    activeClassName="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    exact
                                    to="/dc"
                                >
                                    DC
                                    </NavLink>

                                <NavLink
                                    activeClassName="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    exact
                                    to="/search"
                                >
                                    Search
                                    </NavLink>
                                <button
                                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    onClick={handleLogOut}
                                >
                                    Logout
                                    </button>
                                <p className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                                    {user.name}
                                </p>
                            </div>
                        </div>
                    )}

                </Transition>
            </nav>

            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">                    
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>
                </div>
            </main> */}
        </div >
    )
}
