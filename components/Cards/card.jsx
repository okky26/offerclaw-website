export default function Card({key,title, category, icon, date, src, alt}){
    return(
        <div key={key} className="w-60 h-full bg-white rounded-2xl flex flex-col items-start justify-around gap-y-2 py-2 px-3 sm:w-full">
            <div className="w-full h-3/4 flex items-center justify-center">
                <img src={src} alt={alt} className={`w-1/2 mx-auto aspect-auto object-contain sm:object-cover sm:w-1/4`} />
            </div>
            <h2 className={`text-xs font-sans-serif px-4 py-1 bg-primary-cat-bg rounded-md shadow-md capitalize sm:text-[6px] sm:px-[4px] sm:py-[1px]`}>{category}</h2>
            <h1 className={`text-sm font-sans-serif w-4/5 text-primary-img-bg font-bold sm:text-xs sm:w-full`}>{title}</h1>
            <div className={`w-full flex items-center justify-start gap-x-3 mb-auto`}>
                <div className="w-2 h-2 flex items-center justify-center sm:h-[4px] sm:w-[4px]">{icon}</div>
                <p className="text-xs text-primary-img-bg font-sans-serif sm:text-[6px]">{date}</p>
            </div>
        </div>
    )
}