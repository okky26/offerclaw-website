import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faUser, faHouse, faBlender, faCampground, faDog, faRandom } from "@fortawesome/free-solid-svg-icons";
import Hero from "@/section/Hero/hero"
import { GetDataPosts } from "@/utils/GetDataBanner/getDataPosts";
import Carousel from "@/section/Carousel/carousel";
import Section from "@/section/Post Section/Tech Section/section";

export default async function Home() {
  
  const posts = await GetDataPosts('https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,category,date&page=1&per_page=4&order_by=date&order=asc&_embed');
  const dataPost = JSON.stringify(posts)

  return (
    <>
      <section className="w-full h-screen">
        <Hero props={dataPost} children={<Carousel/>}/>
      </section>
      <section className="w-full h-[75vh] sm:h-[120vh]">
        <Section 
          url={'https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,date&per_page=4&order_by=date&order=desc&_embed&categories=7'}
          icon={
            <FontAwesomeIcon 
              icon={faHeadphones} 
              size='sm' 
              color="rgb(38,38,38)"
            />
          }
          category={'tech'}
        />
      </section>
      <section className="w-full h-[75vh] sm:h-[120vh]">
          <Section
            url={'https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,date&per_page=4&order_by=date&order=desc&_embed&categories=8'}
            icon={
              <FontAwesomeIcon 
                icon={faUser} 
                size='sm' 
                color="rgb(38,38,38)"
              />
            }
            category={`health & wellness`}
          />
      </section>
      {/* <section className="w-full h-[75vh] sm:h-[120vh]">
          <Section
            url={'https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,date&per_page=4&order_by=date&order=desc&_embed&categories=9'}
            icon={
              <FontAwesomeIcon 
                icon={faHouse} 
                size='sm' 
                color="rgb(38,38,38)"
              />
            }
            category={`home essentials + decor`}
          />
      </section> */}
      {/* <section className="w-full h-[75vh] sm:h-[120vh]">
          <Section
            url={'https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,date&per_page=4&order_by=date&order=desc&_embed&categories=22'}
            icon={
              <FontAwesomeIcon 
                icon={faBlender} 
                size='sm' 
                color="rgb(38,38,38)"
              />
            }
            category={`appliances`}
          />
      </section> */}
      {/* <section className="w-full h-[75vh] sm:h-[120vh]">
          <Section
            url={'https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,date&per_page=4&order_by=date&order=desc&_embed&categories=14'}
            icon={
              <FontAwesomeIcon 
                icon={faCampground} 
                size='sm' 
                color="rgb(38,38,38)"
              />
            }
            category={`outdoors`}
          />
      </section> */}
      {/* <section className="w-full h-[75vh] sm:h-[120vh]">
          <Section
            url={'https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,date&per_page=4&order_by=date&order=desc&_embed&categories=16'}
            icon={
              <FontAwesomeIcon 
                icon={faDog} 
                size='sm' 
                color="rgb(38,38,38)"
              />
            }
            category={'pets'}
          />
      </section> */}
      {/* <section className="w-full h-[75vh] sm:h-[120vh]">
          <Section
            url={'https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,date&per_page=4&order_by=date&order=desc&_embed&categories=16'}
            icon={
              <FontAwesomeIcon 
                icon={faRandom} 
                size='sm' 
                color="rgb(38,38,38)"
              />
            }
            category={`Other`}
          />
      </section> */}
    </>
  )
}

