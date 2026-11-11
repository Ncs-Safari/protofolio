

import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Spotlight from "@/components/Spotlight";

const Home = () =>{
  return (
    <div className="mx-auto min-h-screen
    max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <Spotlight />
      <div className="lg:flex lg:justify-between lg:gap-4"> 
          <Header/>

          <main className="pt-24 lg:w-1/2 lg:py-24">
              <Section id="about" title="About">
                  <About/> 
              </Section>

              <Section id="experience" title="Experience">
                  <Experience />
              </Section>

              <Section id="projects" title="Projects">
                <Projects />
              </Section>
          </main>
      </div>
    </div>
  )
}

export default Home;