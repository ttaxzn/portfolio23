import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import me from "../imgs/me.JPG";
function About() {
  return (
    <>
      <div class="App">
        <Navbar />
        <div className="flex justify-center text-6xl mt-20 md:pb-10 md:text-8xl text-[#283618] font-['Brandey']">
          I'm Tea.
        </div>
        <div className="flex flex-col md:flex-row md:pr-40 md:pl-40">
          <div className="pl-10 pr-10 pt-10 md:w-2/3">
            <img
              src={me}
              alt="me"
              className="rounded-tr-full rounded-tl-full md:w-5/6 drop-shadow-sm"
            />
          </div>

          <div className="flex flex-col text-align pl-10 pr-10 pt-5 md:pt-20 md:w-2/3">
            <div className="text-3xl md:text-5xl text-[#283618] font-['Brandey']">
              I'm a Software Engineer & Web Developer working from Kansas City,
              MO.
            </div>
            <br></br>
            <div className="text-md md:text-2xl text-[#414833] font-['Nunito']">
              Over the past 3+ years, I've worked in various areas of software
              development, including front-end development, back-end, mobile,
              and UI/UX design. I'm proud to have worn many hats.
            </div>
            <br></br>
            <div className="text-md md:text-2xl text-[#414833] font-['Nunito']">
              These days, I'm navigating the technological wonders as a
              Technology Support Specialist at Liberty Public Schools. Explore
              my site to unravel the mysteries of code and design, and let's
              join forces to create some digital magic together.
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-10 md:pt-20 pl-5 md:pl-20 md:pr-20 pr-5 gap-3">
          <div className="flex flex-row w-full">
            <div className="hidden md:block md:w-2/3"></div>
            <div className="bg-[#283618] w-full md:w-1/3 rounded-full drop-shadow-sm">
              <div className="flex flex-row place-content-between align-center items-center pl-5 pr-5 pt-3 pb-3">
                <div className="flex flex-col">
                  <div className="text-md md:text-2xl text-[#fefae0] font-['Nunito']">
                    Liberty Public Schools
                  </div>
                  <div className="text-md md:text-2xl text-[#fefae0] font-['Nunito']">
                    Technology Support Specialist
                  </div>
                </div>
                <div className="text-md md:text-2xl text-[#fefae0]">22~ </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="hidden md:block md:w-1/3"></div>
            <div className="bg-[#283618] w-full md:w-2/3 rounded-full drop-shadow-sm">
              <div className="flex flex-row place-content-between align-center items-center pl-5 pr-5 pt-3 pb-3">
                <div className="flex flex-col">
                  <div className="text-md md:text-2xl text-[#fefae0] font-['Nunito']">
                    Freelance
                  </div>
                  <div className="text-md md:text-2xl text-[#fefae0] font-['Nunito']">
                    Design Consultant
                  </div>
                </div>
                <div className="text-md md:text-2xl text-[#fefae0]">22~ </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-[#283618] w-full md:w-1/3 rounded-full drop-shadow-sm">
              <div className="flex flex-row place-content-between align-center items-center pl-5 pr-5 pt-3 pb-3">
                <div className="flex flex-col">
                  <div className="text-md md:text-2xl text-[#fefae0] font-['Nunito']">
                    Walmart Global Tech
                  </div>
                  <div className="text-md md:text-2xl text-[#fefae0] font-['Nunito']">
                    Software Engineer III Intern
                  </div>
                </div>
                <div className="text-md md:text-2xl text-[#fefae0]">22</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-20 md:pt-40">
          <div className="text-3xl w-3/4 md:w-1/2 md:text-6xl font-['Brandey'] text-[#283618]">
            Let's collaborate if you're committed to sustainability, education,
            equality, or carbon neutrality.
          </div>
          <div className="w-3/4 md:w-1/2 text-md md:text-2xl pt-10 font-['Nunito'] text-[#283618]">
            I believe we should leave this Earth as good as or better than we
            found it for future generations; my goal is to contribute to those
            ideals in whatever way I can. If you feel the same, I'd love to talk
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:p-10">
          <div className="flex flex-col md:bg-[#a4ac86] rounded-[200px] w-full p-20">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col pb-10 md:w-1/2">
                <div className="font-['Nunito'] text-xl md:pl-10 pb-2 md:text-3xl">
                  01
                </div>
                <div className="font-['Brandey'] text-xl md:pl-10 pb-2 md:text-3xl">
                  Make it
                </div>
                <div className="font-['Nunito'] text-xl md:pl-10 md:text-2xl">
                  I create initial drafts and build mockups of design concepts.
                  Discussing tangible designs that are already functional within
                  the browser is extremely valuable. While design tools serve a
                  crucial role in the initial stages, their utility has its
                  limits; the subsequent stages need to be brought to life.
                </div>
              </div>

              <div className="flex flex-col pb-10 md:w-1/2">
                <div className="font-['Nunito'] text-xl md:pl-10 md:pr-10 pb-2 md:text-3xl">
                  02
                </div>
                <div className="font-['Brandey'] text-xl md:pl-10 md:pr-10 pb-2 md:text-3xl">
                  Collaborate
                </div>
                <div className="font-['Nunito'] text-xl md:pl-10 md:pr-10 md:text-2xl">
                  Effective design isn't birthed in isolation, but rather in a
                  communal environment. It requires team collaboration and
                  continual refinement. My goal is to engage
                  stakeholders/clients in the design journey and foster a
                  cooperative atmosphere that invites and values input and
                  suggestions.
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col pb-10 md:w-1/2">
                <div className="font-['Nunito'] text-xl md:pl-10 pb-2 md:text-3xl">
                  03
                </div>
                <div className="font-['Brandey'] text-xl md:pl-10 pb-2 md:text-3xl">
                  Accesibility
                </div>
                <div className="font-['Nunito'] text-xl md:pl-10 md:text-2xl">
                  My design philosophy revolves around inclusivity, with a
                  primary objective to ensure everything I create is accessible
                  to everyone - it's simply the ethical approach. Products
                  designed with accessibility in mind serve a wider audience,
                  not just a select few.
                </div>
              </div>

              <div className="flex flex-col pb-10 md:w-1/2">
                <div className="font-['Nunito'] text-xl md:pl-10 md:pr-10 pb-2 md:text-3xl">
                  04
                </div>
                <div className="font-['Brandey'] text-xl md:pl-10 md:pr-10 pb-2 md:text-3xl">
                  Experimentation
                </div>
                <div className="font-['Nunito'] text-xl md:pl-10 md:pr-10 md:text-2xl">
                  All that I create is open to evolution and exploration. Not
                  all attempts will be successful, yet the value lies in making
                  the effort and gleaning lessons from the initiatives that
                  don't pan out.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-10 w-3/4 md:w-1/2">
            <div className="font-['Nunito'] text-md md:text-2xl text-[#283618]">
              My journey into web development started with a high school class
              that sparked my interest and led to my decision to major in
              Computer Science at the University of Missouri - Kansas City. This
              was followed by a rewarding internship as a Software Engineer III
              Intern at Walmart Global Tech, where I honed my skills further.
              Additionally, I've ventured into the world of freelance work,
              enabling me to apply and extend my skills while exploring a
              variety of projects. These varied experiences have played an
              integral part in shaping me as a designer and developer, providing
              a solid foundation on which I continue to build.
            </div>
            <div className="font-['Nunito'] text-md md:text-2xl text-[#283618]">
              My side projects serve as creative outlets for me to feed my
              curiosity about emerging technologies, helping me stay abreast of
              the ever-evolving web landscape. When not immersed in the digital
              world, I cherish indulging in music both as a listener and a
              player, globetrotting with my partner, and spending quality time
              with my family and friends.
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-100% pt-10 pb-10 md:pt-40 md:pb-20">
        <Link to='/contact'>
        <div className="flex flex-col border-solid border-4 border-[#283618] rounded-[400px] bg-[#fefae0] hover:bg-[#a4ac86] hover:text-[#fefae0]">
          <div className="text-3xl md:text-6xl p-10 font-['Brandey']">
            Contact
          </div>
        </div>
        </Link>
      </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
