import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Experience from './components/experience/experience';
import { useProjectStore } from './store/store';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';

function App() {
  const { projects, loading, error, fetchProjects, experience } = useProjectStore();
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("light");

  const sectionRefs:Record<string, React.RefObject<HTMLDivElement | null>> = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    skills: skillsRef,
    experience: experienceRef,
    footer: footerRef
  };

  const handleNavigate = (id: string) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionList = Object.entries(sectionRefs);
      for (const [id, ref] of sectionList) {
        const top = ref.current!.getBoundingClientRect().top;

        if (top >= -100 && top < window.innerHeight / 2) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleThemeChange = useCallback(() =>{
    if(theme == 'light') setTheme('dark');
    else setTheme('light');
  },[theme]);
  
  return (
    <div className={`${theme} App`}>
      <Header onNavigate={handleNavigate} activeSection={activeSection} handleThemeChange={handleThemeChange} currentTheme={theme}/>
      <HomePage id="home" innerRef={homeRef} />
      <About id="about" innerRef={aboutRef}/>
      <Projects id="projects" innerRef={projectsRef} projects={projects}/>
      <Skills id="skills" innerRef = {skillsRef}/>
      <Experience id="experience" innerRef={experienceRef} experience={experience}/>
      <Footer id="footer" innerRef={footerRef}/>
    </div>
  );
};
export default App;
