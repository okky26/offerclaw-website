import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchButton(){
    return(
       <button className="w-6 h-6 absolute translate-y-1/2 right-[20%] sm:right-[17%]">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
       </button>
    )
}