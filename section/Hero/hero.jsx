'use client'

import { useState } from "react"
import CategoryNav from "@/components/CategoryNavigation/categoryNav"
import BannerCard from "@/components/BannerCards/bannerCard"
import Button from "@/components/Button/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faFire, faCalendar, faChevronLeft} from "@fortawesome/free-solid-svg-icons"


export default function Hero({props, children}){
    const [page, setPage] = useState(0)

    console.log(page)

    const posts = JSON.parse(props)

    const handlerNextPost = () => {
        setPage(page + 1)
    };
    const handlerPrevPost = () => {
        setPage(page - 1)
    };


    return(
        <>
            <article className="w-full h-full flex flex-col items-center justify-center py-3">
                <CategoryNav 
                    link={'/category/featured-post'} 
                        icon={<FontAwesomeIcon 
                            icon={faFire} 
                            size='lg' 
                            color="rgb(38,38,38)"/>} 
                        catName={'featured post'} 
                        linkIcon={<FontAwesomeIcon 
                            icon={faChevronRight} 
                            size='sm' 
                            color="rgb(38,38,38)"/>}
                    />
                <section className="w-full h-[90%] grid grid-rows-2 gap-y-2 px-6 py-3 sm:grid-cols-2 sm:grid-rows-1 sm:gap-x-2">
                    <div className="relative w-full h-full flex flex-col items-start justify-start gap-y-2 bg-white rounded-[16px] p-3 overflow-hidden">
                        <BannerCard 
                            src={posts[page]._embedded['wp:featuredmedia'][0].source_url}
                            alt={'post featured image'}
                            category={posts[page]._embedded['wp:term'][0][0].name}
                            title={posts[page].title.rendered}
                            icon={
                                <FontAwesomeIcon
                                    icon={faCalendar}
                                    size='xs'
                                    color='#a8bde6'
                                />
                            }
                            date={posts[page].date}
                        />
                        <div className="absolute w-1/5 h-1/6 flex items-center justify-between left-1/2 top-full    translate-x-full -translate-y-full">
                            <Button 
                                style={`w-8 h-8 flex items-center justify-center ${page === 0 ? 'bg-neutral-600     pointer-events-none' : 'bg-neomorphism'} shadow-md`}
                                content={
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                        size='sm'
                                        color="rgb(38,38,38)"
                                    />
                                }
                                handler={handlerPrevPost}
                            />
                            <Button 
                                style={`w-8 h-8 flex items-center justify-center  shadow-md ${page === 3 ? 'bg-neutral-600  pointer-events-none' : 'bg-neomorphism'} transition-all duration-100`}
                                content={
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        size='sm'
                                        color="rgb(38,38,38)"
                                    />
                                }
                                handler={handlerNextPost}
                            />
                        </div>
                    </div>
                    <>
                        {children}
                    </>
                </section>
            </article>
        </>
    )
}

