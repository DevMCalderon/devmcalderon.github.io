import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProjectImage from "@/components/Projects/ProjectImage/ProjectImage";
import projectsJSON from '@/data/es/projects.json';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};

const ImageCarousel = ({ containerclasses, imageClasses }) => {
  
  const title = projectsJSON.categories[0].projects[0].title;
  const images = projectsJSON.categories[0].projects[0].images;
  
  console.log(images)
  
  return(
    <>
        <div className={`${containerclasses} group`}>
               {/* image carousel */}
               <div className='w-full max-w-screen-xl mx-auto group'>
                 {images && images.length > 0 && (
                   <Carousel
                     additionalTransfrom={0}
                     arrows={false}
                     autoPlay={true}
                     autoPlaySpeed={5500}
                     centerMode={false}
                     className="owl-carousel owl-theme skill-slider pb-10 mb-4 lg:mb-0"
                     dotListClass=""
                     draggable={true}
                     focusOnSelect={false}
                     itemClass=""
                     infinite={true}
                     keyBoardControl={true}
                     minimumTouchDrag={80}
                     pauseOnHover={false}
                     renderArrowsWhenDisabled={false}
                     renderButtonGroupOutside={false}
                     renderDotsOutside={false}
                     responsive={responsive}
                     rewind={false}
                     rtl={false}
                     shouldResetAutoplay
                     showDots={true}
                     sliderClass=''
                     slidesToSlide={1}
                     swipeable={true}
                     ssr={true} // means to render carousel on server-side.
                     // customTransition="all"
                     // transitionDuration={10}
                     containerClass=""
                   >
                     {/* display project images */}
                     {images.map((image, index) => (
                       <ProjectImage
                         imgPath = { image.path }
                         title = { title }
                         key={index}
                         classes={`${imageClasses} rounded-xl overflow-hidden border-[0.2rem] border-solid
                           w-full max-h-[36.9rem] object-cover object-top`}
                       />
                     ))}
                   </Carousel>
                 )}
               </div>
      </div>
    </>
  );
}

export default ImageCarousel;
