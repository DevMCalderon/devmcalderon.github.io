import NavBar from '@/components/NavBar/NavBar';
import Banner from '@/components/Banner/Banner';
import Skills from '@/components/Skills/Skills';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import AboutMe from '@/views/AboutMe/AboutMe';

function Home() {
  
  return (
    <>
      <div className="app-container bgBanner1">
      <NavBar />
        <main>
          <Banner />
          <Skills />
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
