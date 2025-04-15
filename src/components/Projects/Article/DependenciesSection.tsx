import Heading from "@/components/UI/Heading";
import HighlightText from "../../HighlightText";

// dependencies types
type Dependencies = {
  backend?: {
    packageJSON?: string[],
    composerJSON?: string[],
  };
  frontend?: {
    packageJSON?: string[],
  };
};

// props types
type DependenciesSectionProps = {
  dependencies: Dependencies;
}


const DependenciesSection: React.FC<DependenciesSectionProps> = ({ dependencies }) => {
  console.log(dependencies)
  return (
    <>
      {(dependencies.backend.packageJSON?.length > 0 || dependencies.backend.composerJSON?.length > 0) && (
        <section aria-labelledby="backend-dependencies">
          <Heading tag="h4" id="backend-dependencies">Backend</Heading>
          
          <div className="ml-8">
            {dependencies.backend.composerJSON?.length > 0 && (
              <>
                <Heading tag="h5" id="dependencies">composer.json</Heading>
                <ul className="article-dependencies-list">
                  {dependencies.backend.composerJSON.map((dep, idx) => <li className="py-1" key={idx}><HighlightText>{dep}</HighlightText></li>)}
                </ul>
              </>
            )}
            
            {dependencies.backend.packageJSON?.length > 0 && (
              <>
                <Heading tag="h5" id="dependencies">package.json</Heading>
                <ul className="article-dependencies-list">
                  {dependencies.backend.packageJSON.map((dep, idx) => <li className="py-1" key={idx}><HighlightText>{dep}</HighlightText></li>)}
                </ul>
              </>
            )}
          </div>
        </section>
      )}
      
      {dependencies.frontend.packageJSON?.length > 0 && (
        <section aria-labelledby="frontend-dependencies">
          <Heading tag="h4" id="frontend-dependencies">Frontend</Heading>
    
          <div className="ml-8">
            {dependencies.frontend.packageJSON?.length > 0 && (
              <>
                <Heading tag="h5" id="dependencies">package.json</Heading>
                <ul className="article-dependencies-list">
                  {dependencies.frontend.packageJSON.map((dep, idx) => <li className="py-1" key={idx}><HighlightText>{dep}</HighlightText></li>)}
                </ul>
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default DependenciesSection;