import 'react-multi-carousel/lib/styles.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import ImageCarousel from "@/components/imageCarousel/ImageCarousel";
import ProjectTechnologiesDisplay from "@/components/projects/ProjectTechnologiesDisplay";
import ProjectImage from "@/components/projects/projectImage/ProjectImage";

const ProjectItemCard = ({ projectData }) => {
  const { title, technologies_used, short_description, images, slug, categoryId } = projectData;
  
  const linkUrl = `${routes[categoryId]}/${slug}`
  
  console.log(images[0])
  
  return (
    <motion.div
      animate={{scale: [0, 1]}}
      transition={{duration: 0.5}}
    >
    
      <Link to={linkUrl} className="projectItemCard rounded-3xl p-5 flex flex-wrap md:flex-nowrap justify-center group">
        {/* cover image */}
          <div className='w-full md:max-w-[8rem] lg:max-w-[18rem]'>
            {images && images.length > 0 && (
              <ProjectImage
              imgPath = { images[0].path }
              altText = {`${slug}-cover-image`}
              classes={`max-h-[10.2rem] h-[100%] overflow-hidden object-cover object-top rounded-lg  border-[0.15rem] border-indigo-500 group-hover:border-indigo-400  group border-solid`}
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