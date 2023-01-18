import { useContext } from "react";
import Link from "next/link";
import SearchButton from "../Button/search";

export default function SearchForm(){
    return(
        <form className="w-full h-full flex items-start justify-center">
            <input type="search" name="search" id="search" placeholder="search" className="w-3/4 h-12 bg-neutral-50/75 text-neutral-800 backdrop-blur-sm rounded-[16px] pl-4 capitalize"/>
            <SearchButton/>
        </form>
    )
}