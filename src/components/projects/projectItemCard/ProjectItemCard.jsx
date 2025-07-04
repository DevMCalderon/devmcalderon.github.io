import 'react-multi-carousel/lib/styles.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import ImageCarousel from "@/components/imageCarousel/ImageCarousel";
import ProjectTechnologiesDisplay from "@/components/projects/ProjectTechnologiesDisplay";

const ProjectItemCard = ({ projectData }) => {
  const { title, technologies_used, short_description, images, slug, categoryId } = projectData;
  
  const linkUrl = `${routes[categoryId]}/${slug}`
  
  return (
    <motion.div
      animate={{scale: [0, 1]}}
      transition={{duration: 0.5}}
    >
    
      <Link to={linkUrl} className="projectItemCard rounded-3xl p-6 flex flex-wrap md:flex-nowrap justify-center group">
        {/* image carousel */}
        <div className='w-full md:w-3/12 lg:w-4/12 group mb-4 md:mb-0'>
          {images && images.length > 0 && (
            <ImageCarousel
              autoPlay={true}
              arrows={false}
              containerClass="rounded-3xl border-[0.15rem] border-indigo-500 group-hover:border-indigo-400"
              imageClass="max-h-[10.2rem] h-[100%] w-full"
              imageSrcPaths={ images }
              imageAltTexts={ `carousel-img-${title}` }
            />
          )}
        </div>
        
        {/* text and icons */}
        <div className="text-left ml-0 md:ml-6">
          <h4 className="text-center md:text-start text-lg text-white font-bold mb-2 group-hover:text-blue-300">{title}</h4>
          
          {/* description */}
          <p className="text-base text-slate-300 mb-1.5">
            {short_description}
          </p>

          
          <ProjectTechnologiesDisplay technologies_used={technologies_used} />
        </div>
        
      </Link>
    </motion.div>

  );
};

export default ProjectItemCard;