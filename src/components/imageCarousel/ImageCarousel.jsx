import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProjectImage from "@/components/projects/projectImage/ProjectImage";

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

const ImageCarousel = ({ imageSrcPaths, imageAltTexts, containerClass, imageClass, arrows, autoPlay }) => {
  
  return (
    <>
      {/* image carousel */}
      {imageSrcPaths && imageSrcPaths.length > 0 && (
        <div className={`rounded-xl w-full relative `}>
          <Carousel
            className={`${containerClass} owl-carousel owl-theme skill-slider group border-solid `}
            arrows={ arrows }
            autoPlay={ autoPlay }
            autoPlaySpeed={5500}
            centerMode={false}
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
            renderDotsOutside={true}
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
            // containerClass={`bg-black`}
          >
            {/* display project images */}
            {imageSrcPaths.map((image, index) => (
              <ProjectImage
              imgPath = { image.path }
              altText = {`${imageAltTexts}-${index}`}
              key={index}
              classes={`${imageClass} overflow-hidden border-solid object-cover object-top`}
              />
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
}

export default ImageCarousel;
