import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import me from "../imgs/me.JPG";
function About() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center text-6xl mt-20 md:pb-10 md:text-8xl">
        I'm Tea.
      </div>
      <div className="flex flex-col justify-center md:flex-row md:pr-80 md:pl-80">
        <div className="pl-10 pr-10 pt-10 md:w-2/3">
          <img
            src={me}
            alt="me"
            className="rounded-tr-full rounded-tl-full w-full drop-shadow-sm"
          />
        </div>

        <div className="flex flex-col text-align pl-10 pr-10 pt-5 md:pt-20">
          <div className="text-3xl md:text-6xl">
            I'm a Software Engineer & Web Developer working from Kansas City,
            MO.
          </div>
          <br></br>
          <div className="text-md md:text-2xl">
            Over the past 12+ years, I've worked in various areas of digital
            design, including front-end development, email, marketing, and app
            UI/UX. I'm proud to have worn many hats.
          </div>
          <br></br>
          <div className="text-md md:text-2xl">
            These days, I focus on building Help Scout's knowledge base and AI
            tools as a Senior Product Designer
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-10 md:pt-20 pl-5 md:pl-20 md:pr-20 pr-5 gap-3">
        <div className="flex flex-row w-full">
          <div className="hidden md:block md:w-2/3"></div>
          <div className="bg-slate-300 w-full md:w-1/3 rounded-full drop-shadow-sm">
            <div className="flex flex-row place-content-between align-center items-center pl-5 pr-5 pt-2 pb-2">
              <div className="flex flex-col">
                <div className="text-md md:text-2xl">
                  Liberty Public Schools
                </div>
                <div className="text-md md:text-2xl">
                  Technology Support Specialist
                </div>
              </div>
              <div className="text-md md:text-2xl">22~ </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full">
          <div className="hidden md:block md:w-1/3"></div>
          <div className="bg-slate-300 w-full md:w-2/3 rounded-full drop-shadow-sm">
            <div className="flex flex-row place-content-between align-center items-center pl-5 pr-5 pt-2 pb-2">
              <div className="flex flex-col">
                <div className="text-md md:text-2xl">Freelance</div>
                <div className="text-md md:text-2xl">Design Consultant</div>
              </div>
              <div className="text-md md:text-2xl">22~ </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full">
          <div className="bg-slate-300 w-full md:w-1/3 rounded-full drop-shadow-sm">
            <div className="flex flex-row place-content-between align-center items-center pl-5 pr-5 pt-2 pb-2">
              <div className="flex flex-col">
                <div className="text-md md:text-2xl">Walmart Global Tech</div>
                <div className="text-md md:text-2xl">
                  Software Engineer III Intern
                </div>
              </div>
              <div className="text-md md:text-2xl">22</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-20 md:pt-40">
        <div className="text-3xl w-3/4 md:w-1/2 md:text-6xl">
          Let's collaborate if you're committed to sustainability, education,
          equality, or carbon neutrality.
        </div>
        <div className="w-3/4 md:w-1/2 pt-10">
          I believe we should leave this Earth as good as or better than we
          found it for future generations; my goal is to contribute to those
          ideals in whatever way I can. If you feel the same, I'd love to talk
        </div>
      </div>

      <div className="flex flex-col justify-center items-center md:p-10">
        <div className="flex flex-col md:bg-slate-300 rounded-full w-full p-20">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col pb-10">
              <div>01</div>
              <div>Make it</div>
              <div>
                I sketch wireframes and make prototypes. Talking through tactile
                designs existing in the browser is worth its weight. Design
                tools only carry you so far; the rest should be realized with a
                link my team can rally around.
              </div>
            </div>

            <div className="flex flex-col pb-10">
              <div>01</div>
              <div>Make it</div>
              <div>
                I sketch wireframes and make prototypes. Talking through tactile
                designs existing in the browser is worth its weight. Design
                tools only carry you so far; the rest should be realized with a
                link my team can rally around.
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col pb-10">
              <div>01</div>
              <div>Make it</div>
              <div>
                I sketch wireframes and make prototypes. Talking through tactile
                designs existing in the browser is worth its weight. Design
                tools only carry you so far; the rest should be realized with a
                link my team can rally around.
              </div>
            </div>

            <div className="flex flex-col pb-10">
              <div>01</div>
              <div>Make it</div>
              <div>
                I sketch wireframes and make prototypes. Talking through tactile
                designs existing in the browser is worth its weight. Design
                tools only carry you so far; the rest should be realized with a
                link my team can rally around.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-3/4 md:w-1/2">
        <div>
          Before I stepped into the world of product design, I was a web
          developer. One of my earliest jobs involved writing HTML emails, in a
          time before email linters. Lots of wishing, hoping, and finger
          crossing that your email arrived in a recipient's inbox in one piece.
        </div>
        <div>
          Coding emails forced me to understand how HTML and CSS play together,
          a skill set I've carried and kept fresh in the years since. My side
          project work is just an excuse to satisfy my curiosity about new
          technologies and understand how the web is moving forward.
        </div>
        <div>
          Outside work, I enjoy good coffee near my home by the sea, listening
          to and playing music, exploring the world with my partner, and playing
          with my Labrottie pup, Louie.
        </div>
        </div>
    
      </div>
      <Footer />
    </>
  );
}

export default About;
