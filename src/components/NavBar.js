import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"



export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"
                        exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Carman
                    </NavLink>
                    <NavLink to="/post"
                    className="inline-flex items-center py-6 px-3 mr-6 text-red-200 hover:text-green-800">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                    className="inline-flex items-center py-6 px-3 mr-6 text-red-200 hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    className="inline-flex items-center py-6 px-3 mr-6 text-red-200 hover:text-green-800">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                    url="https://twitch.tv/kingcarman" 
                    className="mr-4" 
                    target ="_blank" 
                    fgColor="#fff" 
                    style={{height: 45, width: 45 }}/>
                    <SocialIcon 
                    url="https://twitter.com/kingcarman" 
                    className="mr-4" 
                    target ="_blank" 
                    fgColor="#fff" 
                    style={{height: 45, width: 45 }}/>
                    <SocialIcon 
                    url="https://linkedin.com/in/christopher-carman-75257376" 
                    className="mr-4" 
                    target ="_blank" 
                    fgColor="#fff" 
                    style={{height: 45, width: 45 }}/>
                </div>
            </div>
        </header>
    )
}