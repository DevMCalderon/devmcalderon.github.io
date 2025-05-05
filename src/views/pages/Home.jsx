import NavBar from '@/components/navBar/NavBar';
import Banner from '@/components/banner/Banner';
import Skills from '@/components/skills/Skills';
import ProjectsSection from '@/components/projects/ProjectsSection';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import AboutMe from '@/views/aboutMe/AboutMe';

function Home() {
  
  return (
    <>
      <div className="bgBanner1">
      	<NavBar />
				
        <main className='app-container'>
					<div className='backdrop-blur-sm'>
						<Banner />
						<Skills />
					</div>
					
          <ProjectsSection />
					<AboutMe />
				</main>
				
				<Contact />
			</div>
      
			<Footer />
    </>
  );
}

export default Home
