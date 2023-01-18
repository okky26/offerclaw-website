import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/button";
export default function PostCard({
    index, 
    categories, 
    titles, 
    dates, 
    src,
    excerpts,
    cardContainer,
    textContainer,
    categoryContainer,
    category,
    title,
    excerpt,
    dateContainer,
    icon,
    date,
    imgContainer,
    imgStyle,
    fullBlock
}){
    return(
        <div key={index} className={`w-full h-[135px] flex items-center p-3 justify-around bg-white rounded-2xl ${cardContainer}`}>
            <div className={`w-3/4 h-full flex flex-col items-start justify-around gap-y-2 ${textContainer}`}>
                <div className={`w-full flex items-center ${categoryContainer}`}>
                    <h2 className={`text-xs bg-primary-cat-bg text-neutral-500 font-sans-serif py-1 px-3 rounded-md shadow-md ${category}`}>{categories}</h2>
                 </div>
                 <h2 className={`pr-2 text-sm capitalize w-full font-sans-serif font-bold text-primary-img-bg ${title}`}>{titles}</h2>
                 <p className={`hidden ${excerpt}`}>{excerpts}</p>
                 <Button
                    style={`${fullBlock} relative group uppercase items-center justify-center w-2/5 text-xs font-gothic hidden py-3`}
                    content={
                        <>
                            <div className="group-hover:scale-100 group-hover:bg-primary-post-cat absolute z-[2] w-full scale-x-50 origin-left rounded-md h-full bg-primary-cat-bg transition-all duration-500"></div>
                            <div className="absolute z-[3] w-full h-full flex items-center justify-around">
                                <p className="text-sm font-normal group-hover:translate-x-1 transition-transform duration-500">explore</p>
                                <FontAwesomeIcon
                                    icon={faArrowRightLong}
                                    size='lg'
                                    color="rgb(38,38,38)"
                                    className="group-hover:-translate-x-1 transition-transform duration-500"
                                />
                            </div>
                        </>
                    }
                 />
                 <div className={`w-full flex items-center justify-start gap-x-3 ${dateContainer}`}>
                    <div className={`w-2 h-2 flex items-center justify-center ${icon}`}>
                        <FontAwesomeIcon
                            icon={faCalendar}
                            size='xs'
                            color='#a8bde6'
                        />
                    </div>
                    <p className={`text-xs text-primary-img-bg font-sans-serif ${date}`}>{dates}</p>
                </div>
            </div>
            <div className={`w-1/2 h-full flex items-center justify-center border-2 border-primary-post-cat/70 rounded-xl ${imgContainer}`}>
                <img src={src} alt="" className={`w-full h-full aspect-auto object-contain p-1 ${imgStyle}`} />
            </div>
        </div>
    )
}