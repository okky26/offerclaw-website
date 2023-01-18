'use client';

import { useState } from "react";
import WebTitle from "@/components/WebTitle/webTitle";
import SearchForm from "@/components/SearchForm/searchForm";
import Toggle from "@/components/Button/toggle";
import Navbar from "@/components/Navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";



export default function Header(){
    const [isLoading, setLoading] = useState(false)

    const toggleMenuHandler = () => {
        setLoading(!isLoading)
    }
    return(
    <>
        <section className="h-[25vh] sm:h-[50vh] bg-header bg-cover flex flex-col px-6 items-center justify-center gap-y-2">
            <div className="w-full h-full flex items-end justify-center pr-6 pb-4">
                <Toggle content={<FontAwesomeIcon icon={faBars} size='xl' color='#ffffff'/>} handler={toggleMenuHandler}/>
                <WebTitle childStyle={'text-neutral-50 mx-auto'} containerStyle={'items-end justify-start'}/>
            </div>
            <SearchForm/>
        </section>
        <nav className={`absolute w-full h-screen bg-primary-bg/90 backdrop-blur-md z-10 top-0 ${isLoading === false ? '-translate-x-full' : 'translate-x-0'} transition-all duration-500 sm:relative sm:h-[10vh] sm:bg-neomorphism sm:shadow-md sm:translate-x-0`}>
            <div className="w-full h-[90vh] flex flex-col items-center justify-start p-6 sm:h-full sm:justify-center sm:p-0 sm:flex-row">
                <div className="w-full h-1/6 flex items-center justify-center border-b-2 border-white/50 sm:hidden">
                    <Toggle content={<FontAwesomeIcon icon={faClose} size='2xl' color='rgb(38,38,38)'/>} handler={toggleMenuHandler}/>
                    <WebTitle childStyle={'text-neutral-800 mr-auto ml-[66px]'} containerStyle={'items-center   justify-center'}/>
                </div>
                <Navbar childStyle={isLoading === false ? 'translate-y-full' : 'translate-y-0'}/>
            </div>
        </nav>
    </>
    )
}