import left from "../imgs/1.png";
import full from "../imgs/fullscreen.png";
import mobile from "../imgs/mobile.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      <Navbar sticky="top" />

      {/* INTRO WITH NAME */}

      <div className="flex flex-col">
        <div className="text-6xl mt-20 sm:text-8xl md:text-8xl lg:text-8xl">
          Hi. I'm Tea.
        </div>
        <div className="text-6xl m-3 sm:text-8xl md:text-8xl lg:text-8xl">
          A Developer.
        </div>
        <div className="text-l m-8 sm:text-2xl md:text-2xl lg:text-2xl">
          As a developer and generalist designer, I'm passionate about bringing
          digital visions to life that are fun, useful, and user-centric.
        </div>
      </div>

      <div className=" pt-10 flex flex-col w-full h-auto max-h-[800px] gap-10 md:flex-row justify-center items-center md:pr-10 md:pl-10 lg:pr-20 lg:pl-20 ">
        <div
          className="bg-slate-300 drop-shadow-md md:hover:drop-shadow-xl w-2/3 max-h-[625px] overflow-hidden rounded-3xl"
          id="hoveranimation"
        >
          <div className="relative pb-10">
            <div className="absolute right-5 top-5 text-xl md:text-4xl md:right-10 md:top-10">
              Portfolio
            </div>
            <div className="absolute right-5 top-12 text-xl md:text-4xl md:right-10 md:top-24">
              React / JS
            </div>
          </div>
          <Link to="/portfolio">
            <img src={left} id="hoveranimation2" alt="computer" />
          </Link>
        </div>
        <div
          className="bg-slate-300 drop-shadow-md hover:drop-shadow-xl w-2/3 max-h-[625px] overflow-hidden rounded-3xl"
          id="hoveranimation"
        >
          <div className="relative pb-10">
            <div className="absolute right-5 top-5 text-xl md:text-4xl md:right-10 md:top-10">
              Lumos
            </div>
            <div className="absolute right-5 top-12 text-xl md:text-4xl md:top-24 md:right-10">
              React / JS / TS
            </div>
          </div>
          <Link to="/lumos">
            <img src={left} id="hoveranimation2" alt="computer" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-6xl mt-20 sm:text-8xl md:text-8xl lg:text-8xl pt-20 md:pt-40">
          In Progress.
        </div>
        <div className="text-l m-8 sm:text-2xl md:text-2xl lg:text-2xl">
          Work in various states of design and development, from side projects,
          to in-flight product design and development.
        </div>
      </div>

      <div className=" pt-10 flex flex-col w-full h-auto max-h-[800px] gap-10 lg:flex-row justify-center items-center md:pr-10 md:pl-10 lg:pr-20 lg:pl-20 ">
        <div
          className="bg-slate-300 drop-shadow-md md:hover:drop-shadow-xl w-2/3 max-h-[325px] md:max-h-[613px] overflow-hidden rounded-3xl"
          id="hoveranimation"
        >
          <div className="relative pb-10">
            <div className="absolute right-5 top-5 text-xl md:text-4xl md:right-10 md:top-10">
              The Blast Monkeys
            </div>
            <div className="absolute right-5 top-12 text-xl md:text-4xl md:right-10 md:top-24">
              React / JS
            </div>
          </div>
          <div className="flex">
            <Link to="/theblastmonkeys">
              <img
                src={full}
                id="hoveranimation2"
                className="pt-20 md:pt-40 pl-2"
                alt="webpage"
              />
            </Link>
          </div>
        </div>
        <div
          className="bg-slate-300 drop-shadow-md hover:drop-shadow-xl w-2/3 md:w-1/3 max-h-[325px] md:max-h-[613px] overflow-hidden rounded-3xl"
          id="hoveranimation"
        >
          <div className="relative pb-10">
            <div className="absolute right-5 top-5 text-xl md:text-4xl md:right-10 md:top-10">
              RetroQuest
            </div>
            <div className="absolute right-5 top-12 text-xl md:text-4xl md:top-24 md:right-10">
              Swift
            </div>
          </div>
          <Link to="/retroquest">
            <img
              src={mobile}
              id="hoveranimation2"
              className="pt-10 md:pt-20"
              alt="phone mockup"
            />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;