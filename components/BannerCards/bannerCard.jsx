'use client'

export default function BannerCard({src,alt,category,title,icon,date}){
    return(
        <div key={Math.random()} className="w-full h-full flex flex-col items-start justify-start gap-y-2 overflow-hidden">
            <div className="w-full h-3/5 flex items-center justify-center">
                <img src={src} alt={alt} className={`w-1/2 mx-auto aspect-auto object-contain animate-slideRight`} />
            </div>
            <h2 className={`text-md font-sans-serif px-4 py-1 bg-primary-cat-bg rounded-md shadow-md capitalize animate-slideRight`}>{category}</h2>
            <h1 className={`h-1/5 text-xl font-sans-serif w-4/5 text-primary-img-bg font-bold animate-slideRight`}>{title}</h1>
            <div className={`w-full flex items-center justify-start gap-x-3 animate-slideRight mb-auto`}>
                <div className="w-2 h-2 flex items-center justify-center">{icon}</div>
                <p className="text-xs text-primary-img-bg font-sans-serif">{date}</p>
            </div>
        </div>
    )
}
