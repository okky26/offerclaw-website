import Link from "next/link"

export default function CategoryNav({icon, catName, link, linkIcon}){
    return(
        <section className="w-[90%] h-[10%] flex items-center justify-around px-3 pt-3 border-b-2 m-0 border-white/75 sm:py-1 sm:pb-1">
            <div className="w-3/5 h-full flex items-center justify-start gap-x-2">
                <Link
                    href={link} 
                    className="w-10 h-10 rounded-full bg-neomorphism shadow-md flex items-center justify-center sm:w-8 sm:h-8"
                >
                    {icon}
                </Link>
                <Link
                    href={link}
                    className='w-3/4 h-full flex items-center justify-center sm:justify-start'
                >
                    <h2 className="text-xl text-neutral-800 font-gothic font-bold capitalize">{catName}</h2>
                </Link>
            </div>
            <div className="w-2/5 h-full flex item-center justify-end gap-x-2">
                <Link
                    href={link}
                    className="w-full h-full flex item-center justify-end gap-x-3 sm:gap-x-1"
                >
                    <h2 className="text-l text-neutral-800 font-normal font-sans-serif capitalize h-full flex items-center justify-center sm:justify-end">view all</h2>
                    <div className="w-1/4 h-full flex items-center justify-center">{linkIcon}</div>
                </Link>
            </div>
        </section>
    )
}