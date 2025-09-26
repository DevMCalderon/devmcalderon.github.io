import 'react-multi-carousel/lib/styles.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import ProjectTechnologiesDisplay from "@/components/projects/ProjectTechnologiesDisplay";
import ProjectImage from "@/components/projects/projectImage/ProjectImage";

const ProjectItemCard = ({ projectData }) => {
  const { title, technologies_used, short_description, images, slug, categoryId } = projectData;
  
  const linkUrl = `${routes[categoryId]}/${slug}`
  
  return (
    <motion.div
      animate={{scale: [0, 1]}}
      transition={{duration: 0.5}}
    >
    
      <Link to={linkUrl} className="w-full projectItemCard rounded-3xl p-5 flex flex-wrap lg:flex-nowrap justify-center group">
        
        {/* thumbnail image */}
        <div className='w-full md:w-9/12 lg:w-[45%] h-auto lg:h-56 mb-3'>
          {images && images.length > 0 && (
            <ProjectImage
            imgPath = { images[0].path }
            altText = {`${slug}-cover-image`}
            classes={`w-full h-full overflow-hidden object-fill object-top object-left rounded-lg  border-solid border-[0.15rem] border-indigo-500 group-hover:border-indigo-400  group`}
            />
          )}
        </div>
        
        {/* texts and skill icons */}
        <div className="w-full lg:w-7/12 text-left ml-0 md:ml-6">
          <h4 className="text-[1.5rem] md:text-lg text-center md:text-start text-white font-bold mb-2 group-hover:text-blue-300">{title}</h4>
          
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