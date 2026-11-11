

import About from "@/components/About";
import Header from "@/components/Header";
import Section from "@/components/Section";

const Home = () =>{
  return (
    <div className="mx-auto min-h-screen
    max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4"> 
          <Header/>

          <main className="pt-24 lg:w-1/2 lg:py-24">
              <Section id="about" title="About">
                <p className="h-96">
                  <About/>
                </p>
              </Section>

              <Section id="experience" title="Experience">
                <p className="h-96">Experience (Step 5)</p>
              </Section>

              <Section id="projects" title="Projects">
                <p className="h-96">Projects (Step 6)</p>
              </Section>
          </main>
      </div>
    </div>
  )
}

export default Home;