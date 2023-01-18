import Card from "@/components/Cards/card";
import { GetDataPosts } from "@/utils/GetDataBanner/getDataPosts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default async function Carousel(){
    const posts = await GetDataPosts('https://www.offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,categories,date&per_page=4&page=2&order_by=date&order=asc&_embed')
    return(
        <section className="w-full h-full grid grid-flow-col auto-cols-max gap-4 overflow-scroll place-items-center sm:overflow-hidden sm:grid-cols-2 sm:grid-rows-2">
            {posts.map((post,index) => (
                <Card
                    key={index}
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={'post featured image'}
                    category={post._embedded['wp:term'][0][0].name}
                    title={post.title.rendered}
                    icon={
                        <FontAwesomeIcon
                            icon={faCalendar}
                            size='xs'
                            color='#a8bde6'
                        />
                    }
                    date={post.date}
                />
            ))}
        </section>
    )
}