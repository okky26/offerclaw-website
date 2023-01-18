import CategoryNav from "@/components/CategoryNavigation/categoryNav";
import PostCard from "@/components/Cards/postCards";
import { GetDataPosts } from "@/utils/GetDataBanner/getDataPosts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default async function Section({url, icon, category}){

    const posts = await GetDataPosts(url)

    console.log(posts)

    return(
        <article className="w-full h-full flex flex-col items-center justify-center py-3 sm:py-0">
            <CategoryNav 
                link={'/category/featured-post'} 
                    icon={icon} 
                    catName={category} 
                    linkIcon={<FontAwesomeIcon 
                        icon={faChevronRight} 
                        size='sm' 
                        color="rgb(38,38,38)"/>}
            />
            <section className="w-full h-[90%] flex flex-col items-center justify-center gap-y-2 py-3 px-6 sm:px-8 sm:grid sm:grid-cols-4 sm:grid-rows-3 sm:gap-2">
                <PostCard
                    index={0}
                    categories={posts[0]._embedded['wp:term'][0][0].name}
                    titles={posts[0].title.rendered}
                    excerpts={posts[0].excerpt.rendered}
                    dates={posts[0].date}
                    src={posts[0]._embedded['wp:featuredmedia'][0].source_url}
                    cardContainer={'sm:h-full sm:col-span-2 sm:row-span-3 sm:flex-col-reverse sm:p-3'}
                    imgContainer={'sm:w-full sm:h-3/5'}
                    imgStyle={'sm:w-full'}
                    textContainer={'sm:w-full sm:h-2/5 sm:justify-evenly sm:pt-3'}
                    category={'sm:px-3 sm:py-1 sm:text-xs sm:text-primary-bg'}
                    title={'sm:text-lg'}
                    excerpt={'sm:block sm:text-xs font-sans-serif text-neutral-500 w-full'}
                    date={'sm:text-[8px] sm:text-neutral-500'}
                    fullBlock={'sm:flex'}
                />
                <PostCard
                    index={1}
                    categories={posts[1]._embedded['wp:term'][0][0].name}
                    titles={posts[1].title.rendered}
                    dates={posts[1].date}
                    excerpts={posts[1].excerpt.rendered}
                    src={posts[1]._embedded['wp:featuredmedia'][0].source_url}
                    cardContainer={'sm:h-full sm:row-span-2 sm:col-start-3 sm:flex-col-reverse sm:p-3'}
                    imgContainer={'sm:w-full sm:h-full'}
                    imgStyle={'sm:w-full'}
                    textContainer={'sm:w-full sm:justify-evenly sm:pt-1'}
                    category={'sm:px-3 sm:py-[1px] sm:text-[8px] sm:text-primary-post-bg'}
                    title={'sm:text-xs sm:pr-0'}
                    excerpt={'sm:block sm:text-[8px] font-sans-serif text-neutral-500 w-full'}
                    date={'sm:text-[8px] sm:text-neutral-500'}
                    fullBlock={'sm:hidden'}
                />
                <PostCard
                    index={2}
                    categories={posts[2]._embedded['wp:term'][0][0].name}
                    titles={posts[2].title.rendered}
                    dates={posts[2].date}
                    src={posts[2]._embedded['wp:featuredmedia'][0].source_url}
                    excerpts={posts[2].excerpt.rendered}
                    cardContainer={'sm:h-full sm:row-span-2 sm:col-start-4 sm:flex-col-reverse sm:p-3'}
                    imgContainer={'sm:w-full'}
                    imgStyle={'sm:w-full'}
                    textContainer={'sm:w-full sm:justify-evenly sm:pt-1'}
                    category={'sm:px-3 sm:py-[1px] sm:text-[8px] sm:text-primary-post-bg'}
                    title={'sm:text-xs sm:pr-0'}
                    excerpt={'sm:block sm:text-[8px] font-sans-serif text-neutral-500 w-full'}
                    date={'sm:text-[8px] sm:text-neutral-500'}
                    fullBlock={'sm:hidden'}
                />
                <PostCard
                    index={3}
                    categories={posts[3]._embedded['wp:term'][0][0].name}
                    titles={posts[3].title.rendered}
                    dates={posts[3].date}
                    src={posts[3]._embedded['wp:featuredmedia'][0].source_url}
                    excerpts={posts[3].excerpt.rendered}
                    cardContainer={'sm:h-full sm:col-span-2 sm:col-start-3 sm:row-start-3 sm:flex-row-reverse sm:p-3'}
                    imgContainer={'sm:w-1/2'}
                    imgStyle={'sm:w-full'}
                    textContainer={'sm:w-full sm:pl-2 sm:gap-y-1'}
                    category={'sm:px-3 sm:py-[1px] sm:text-[8px] sm:text-primary-post-bg'}
                    title={'sm:text-xs sm:pr-0'}
                    excerpt={'sm:block sm:text-[8px] font-sans-serif text-neutral-500 w-full'}
                    date={'sm:text-[8px] sm:text-neutral-500'}
                    fullBlock={'sm:hidden'}
                />
            </section>
        </article>
    )
}