import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadphones, faUser, faHouse, faBlender, faCampground, faDog, faRandom } from "@fortawesome/free-solid-svg-icons"

export default function Navbar({childStyle}){
    return(
        <>
            <ul className="w-full h-4/6 grid grid-rows-7 items-center justify-evenly sm:h-full sm:flex sm:items-center sm:justify-evenly">
                <li className='w-full h-full flex items-center justify-center overflow-hidden sm:w-3/4 sm:hover:bg-primary-bg sm:transition-all sm:duration-300'>
                    <Link
                        href={'/'}
                        className={`text-xl ${childStyle} transition-transform duration-500 delay-500 text-neutral-800 font-gothic font-bold capitalize w-full h-full flex items-center justify-center gap-x-3 sm:text-[10px] sm:gap-x-2 sm:translate-y-0`}                   
                    >
                        <div className="w-5 h-5 flex items-center justify-center sm:w-2 sm:h-2">
                            <FontAwesomeIcon icon={faHeadphones} size='sm' color='rgb(38,38,38)'/>
                        </div>
                        Tech
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center overflow-hidden sm:hover:bg-primary-bg sm:transition-all sm:duration-300'>
                    <Link
                        href={'/'}
                        className={`text-xl ${childStyle} transition-transform duration-500 delay-500 text-neutral-800 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[10px] sm:gap-x-2 sm:translate-y-0 `}
                    >
                        <div className="w-5 h-5 flex items-center justify-center sm:w-2 sm:h-2">
                            <FontAwesomeIcon icon={faUser} size='xs' color='rgb(38,38,38)'/>
                        </div>
                        Health & Wellness
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center overflow-hidden sm:hover:bg-primary-bg sm:transition-all sm:duration-300'>
                    <Link
                        href={'/'}
                        className={`text-xl ${childStyle} transition-transform duration-500 delay-500 text-neutral-800 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[9px] sm:gap-x-2 sm:translate-y-0 `}
                    >
                        <div className="w-5 h-5 flex items-center justify-center sm:w-2 sm:h-2">
                            <FontAwesomeIcon icon={faHouse} size='xs' color='rgb(38,38,38)'/>
                        </div>
                        home essentials + decor
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center overflow-hidden sm:w-5/6 sm:hover:bg-primary-bg sm:transition-all sm:duration-300'>
                    <Link
                        href={'/'}
                        className={`text-xl ${childStyle} transition-transform duration-500 delay-500 text-neutral-800 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[10px] sm:gap-x-2 sm:translate-y-0 `}
                    >
                        <div className="w-5 h-5 flex items-center justify-center sm:w-2 sm:h-2">
                            <FontAwesomeIcon icon={faBlender} size='xs' color='rgb(38,38,38)'/>
                        </div>
                        appliances
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center overflow-hidden sm:w-5/6 sm:hover:bg-primary-bg sm:transition-all sm:duration-300'>
                    <Link
                        href={'/'}
                        className={`text-xl ${childStyle} transition-transform duration-500 delay-500 text-neutral-800 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[10px] sm:gap-x-2 sm:translate-y-0 `}
                    >
                        <div className="w-5 h-5 flex items-center justify-center sm:w-2 sm:h-2">
                            <FontAwesomeIcon icon={faCampground} size='xs' color='rgb(38,38,38)'/>
                        </div>
                        outdoors
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center overflow-hidden sm:w-3/4 sm:hover:bg-primary-bg sm:transition-all sm:duration-300'>
                    <Link
                        href={'/'}
                        className={`text-xl ${childStyle} transition-transform duration-500 delay-500 text-neutral-800 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[10px] sm:gap-x-2 sm:translate-y-0 `}
                    >
                        <div className="w-5 h-5 flex items-center justify-center sm:w-2 sm:h-2">
                            <FontAwesomeIcon icon={faDog} size='xs' color='rgb(38,38,38)'/>
                        </div>
                        pets
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center overflow-hidden sm:w-3/4 sm:hover:bg-primary-bg sm:transition-all sm:duration-300'>
                    <Link
                        href={'/'}
                        className={`text-xl ${childStyle} transition-transform duration-500 delay-500 text-neutral-800 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[10px] sm:gap-x-2 sm:translate-y-0 `}
                    >
                        <div className="w-5 h-5 flex items-center justify-center sm:w-2 sm:h-2">
                            <FontAwesomeIcon icon={faRandom} size='xs' color='rgb(38,38,38)'/>
                        </div>
                        other
                    </Link>
                </li>
            </ul>
        </>
    )
}