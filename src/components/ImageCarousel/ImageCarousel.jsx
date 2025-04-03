import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProjectImage from "@/components/Projects/ProjectImage/ProjectImage";

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

const ImageCarousel = ({ imageSrcPaths, imageAltTexts, containerClass, imageClass }) => {
  
  return (
    <>
      {/* image carousel */}
      {imageSrcPaths && imageSrcPaths.length > 0 && (
        <div className={``}>
          <Carousel
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={5500}
            centerMode={false}
            //  lg:mb-0
            className={`${containerClass} owl-carousel owl-theme skill-slider pb-6 group`}
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
            // containerClass={`${containerClass}`}
          >
            {/* display project images */}
            {imageSrcPaths.map((image, index) => (
              <ProjectImage
                imgPath = { image.path }
                title = { imageAltTexts }
                key={index}
                classes={`${imageClass} overflow-hidden border-[0.2rem] border-solid object-cover object-top`}
              />
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
}

export default ImageCarousel;
