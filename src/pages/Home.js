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

      <div className="flex flex-col justify-center items-center">
        <div className="text-6xl mt-20 sm:text-8xl md:text-8xl lg:text-8xl text-[#283618] font-['Brandey']">
          Hi. I'm Tea.
        </div>
        <div className="text-6xl m-3 sm:text-8xl md:text-8xl lg:text-8xl text-[#283618] font-['Brandey'] text-center">
          A Developer.
        </div>
        <div className="text-l m-8 sm:text-2xl md:text-2xl lg:text-2xl text-[#414833] text-center font-['Nunito']">
          As a developer and generalist designer, I'm passionate about bringing
          digital visions to life that are fun, useful, and user-centric.
        </div>
      </div>

      <div className=" pt-10 justify-center items-center flex flex-col w-full h-auto max-h-[625px] gap-10 md:flex-row md:pr-10 md:pl-10 lg:pr-20 lg:pl-20 ">
        <div
          className="bg-[#a68a64] drop-shadow-md md:hover:drop-shadow-xl w-2/3 max-h-[625px] overflow-hidden rounded-[50px] md:rounded-[100px]"
          id="hoveranimation"
        >
          <div className="relative pb-7 pad">
            <div className="absolute top-0 right-0 p-5 md:p-0 md:pr-5 text-[#283618] font-['Brandey'] text-2xl md:text-5xl md:right-14 md:top-14">
              Portfolio
            </div>
            <div className=" absolute top-7 right-0 p-5 md:p-0 md:pr-5 text-[#283618] font-['Nunito'] text-lg md:text-4xl pl-5 md:right-14 md:top-28 disappear">
              React / JS / Tailwind
            </div>
          </div>
          <Link to="/portfolio">
            <img src={left} id="hoveranimation2" alt="computer"/>
          </Link>
        </div>
        <div
          className="bg-[#3a5a40] drop-shadow-md hover:drop-shadow-xl w-2/3 max-h-[625px] overflow-hidden rounded-[50px] md:rounded-[100px]"
          id="hoveranimation"
        >
          <div className="relative pb-7 pad">
            <div className="absolute top-0 right-0 p-5 md:p-0 md:pr-5 text-2xl md:text-5xl md:right-14 md:top-14 text-[#fefae0] font-['Brandey']">
              Lumos
            </div>
            <div className="absolute top-7 right-0 p-5 md:p-0 md:pr-5 text-lg md:text-4xl md:right-14 md:top-28 text-[#fefae0] font-['Nunito'] disappear">
              React / JS / TS
            </div>
          </div>
          <Link to="/lumos">
            <img src={left} id="hoveranimation2" alt="computer" className="h-auto"/>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-5xl mt-20 sm:text-8xl md:text-8xl lg:text-8xl pt-20 md:pt-40 text-[#283618] font-['Brandey']">
          In Progress.
        </div>
        <div className="text-l m-8 sm:text-2xl md:text-2xl lg:text-2xl text-[#414833] text-center font-['Nunito']">
          Work in various states of design and development, from side projects,
          to in-flight product design and development.
        </div>
      </div>

      <div className=" pt-10 flex flex-col w-full  h-auto max-h-[650px] gap-10 md:flex-row justify-center items-center md:pr-10 md:pl-10 lg:pr-20 lg:pl-20 ">
        <div
          className="bg-[#a4ac86] drop-shadow-md md:hover:drop-shadow-xl w-2/3 max-h-[325px] md:max-h-[613px] overflow-hidden rounded-[50px] md:rounded-[100px]"
          id="hoveranimation"
        >
          <div className="relative pb-7 pad">
            <div className=" absolute top-0 right-0 p-5 md:p-0 md:pr-5 text-2xl md:text-5xl md:right-14 md:top-14 text-[#283618] font-['Brandey']">
              The Blast Monkeys
            </div>
            <div className="absolute top-7 right-0 p-5 md:p-0 md:pr-5 text-lg md:text-4xl md:right-14 md:top-28 text-[#283618] font-['Nunito']">
              React / JS / Tailwind
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
          className="bg-[#7f4f24] drop-shadow-md hover:drop-shadow-xl w-2/3 md:w-1/3 max-h-[325px] md:max-h-[613px] overflow-hidden rounded-[50px] md:rounded-[100px]"
          id="hoveranimation"
        >
          <Link to="/retroquest">
          <div className="relative pb-7">
            <div className="absolute top-0 right-0 p-5 md:p-0 md:pr-5 text-2xl md:text-5xl md:right-14 md:top-14 text-[#fefae0] font-['Brandey']">
              RetroQuest
            </div>
            <div className="absolute top-7 right-0 p-5 md:p-0 text-lg md:text-4xl md:right-14 md:top-28 text-[#fefae0] font-['Nunito']">
              Swift
            </div>
          </div>
          
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
