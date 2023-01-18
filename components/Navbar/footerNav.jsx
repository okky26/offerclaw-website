import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadphones, faUser, faHouse, faBlender, faCampground, faDog, faRandom } from "@fortawesome/free-solid-svg-icons"


export default function FooterNav(){
    return(
        <>
            <ul className="flex flex-col h-1/4 items-center justify-center sm:grid sm:grid-cols-7">
                <li className='w-full h-full flex items-center justify-center'>
                    <Link
                        href={'/'}
                        className={`text-sm text-neutral-50 font-gothic font-bold capitalize w-full h-full flex items-center justify-center gap-x-3 sm:text-[10px]`}                   
                    >
                        <div className="w-2 h-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faHeadphones} size='sm' color='white'/>
                        </div>
                        Tech
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center'>
                    <Link
                        href={'/'}
                        className={`text-sm text-neutral-50 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[10px]`}
                    >
                        <div className="w-2 h-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faUser} size='xs' color='white'/>
                        </div>
                        Health & Wellness
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center'>
                    <Link
                        href={'/'}
                        className={`text-sm text-neutral-50 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[9px]`}
                    >
                        <div className="w-2 h-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faHouse} size='xs' color='white'/>
                        </div>
                        home essentials + decor
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center'>
                    <Link
                        href={'/'}
                        className={`text-sm text-neutral-50 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[10px]`}
                    >
                        <div className="w-2  h-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faBlender} size='xs' color='white'/>
                        </div>
                        appliances
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center'>
                    <Link
                        href={'/'}
                        className={`text-sm text-neutral-50 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[10px]`}
                    >
                        <div className="w-2 h-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faCampground} size='xs' color='white'/>
                        </div>
                        outdoors
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center'>
                    <Link
                        href={'/'}
                        className={`text-sm text-neutral-50 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[10px]`}
                    >
                        <div className="w-2 h-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faDog} size='xs' color='white'/>
                        </div>
                        pets
                    </Link>
                </li>
                <li className='w-full h-full flex items-center justify-center'>
                    <Link
                        href={'/'}
                        className={`text-sm text-neutral-50 font-gothic font-bold capitalize flex items-center justify-center gap-x-3 w-full h-full sm:text-[10px]`}
                    >
                        <div className="w-2 h-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faRandom} size='xs' color='white'/>
                        </div>
                        other
                    </Link>
                </li>
            </ul>
        </>
    )
}