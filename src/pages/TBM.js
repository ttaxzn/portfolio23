import "../App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import mockup1 from "../imgs/TBMmockup.png";
import blastlogo from "../imgs/blastlogo.jpeg";

function TBM() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col justify-center items-center p-10 pb-0">
        <div className="text-6xl mt-20 sm:text-8xl md:text-8xl lg:text-8xl text-[#283618] font-['Brandey']">
          The Blast Monkeys
        </div>
      </div>
      <div className="flex flex-col md:justify-center md:items-center pl-10 pt-20 md:pl-0">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-10">
          <div className="">
            <div className="pb-2 font-['Nunito']">Timeline</div>
            <div className="font-['Nunito']">January 2023 - Current</div>
          </div>
          <div className="">
            <div className="pb-2 font-['Nunito']">Team</div>
            <div className="font-['Nunito']">The Blast Monkeys</div>
          </div>
          <div className="">
            <div className="pb-2 font-['Nunito']">Role</div>
            <div className="font-['Nunito']">Product Designer, Front End</div>
          </div>

          <div className="">
            <div className="pb-2 font-['Nunito']">Skills</div>
            <div className="font-['Nunito']">
              React.js, JavaScript, Bootstrap, Tailwind
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center overflow-hidden pt-10">
        <div className="flex w-2/3 md:w-1/3 overflow-hidden justify-center items-center md:p-0">
          <img src={blastlogo} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Overview</div>
          <div className="font-['Nunito']">
            The Blast Monkeys project is an ambitious undertaking focused on
            reinvigorating the online presence of a highly talented band based
            out of Kansas City, Missouri. As a collective known for their
            dynamic performances and vibrant tunes, The Blast Monkeys desired a
            web platform that reflected their energy, creativity, and musical
            spirit.
          </div>

          <div className="font-['Nunito']">
            The aim of this project was to design and develop a website that not
            only promotes the band and their music but also connects them with
            their fan base in a more engaging and interactive way. The site
            serves as the digital face of the band, offering fans and potential
            booking agents a glimpse into the band's world — their music, tour
            dates, behind-the-scenes stories, and more.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
        <div className="text-3xl font-['Brandey']">Development</div>

          <div className="font-['Nunito']">
            TheBlastMonkeys.com, in its original design, had its charm, however,
            given the rapidly evolving digital landscape, a revamp was overdue.
            As a platform dedicated to a fun and dynamic mobile game, its web
            presence needed to reflect the same level of energy, creativity, and
            user engagement that the game itself offers.
          </div>
          <div className="font-['Nunito']">
            For the redesign, I started with an in-depth analysis of the
            original site, identifying areas that could be enhanced to make it
            more engaging, accessible, and user-friendly. The homepage, being
            the first point of contact for visitors, was given special
            attention. My aim was to make it more dynamic and interactive,
            ensuring visitors are immediately drawn in and want to explore
            further.
          </div>
          <div className="font-['Nunito']">
            In terms of aesthetics, I decided to inject a fresh vibrancy into
            the design, making use of the band's existing color palette but in a
            more modern and appealing way. This meant a more balanced use of
            bold colors and white space to achieve a cleaner, more eye-catching
            layout without it being overwhelming.
          </div>

          <div className="font-['Nunito']">
            See below for the first partial iteration of the homepage redesign:{" "}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center overflow-hidden pt-10">
        <div className="flex w-2/3 md:w-1/3 overflow-hidden justify-center items-center md:p-0">
          <img src={mockup1} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="font-['Nunito']">
            The redesign of the homepage involved incorporating elements that
            both immediately capture the attention of visitors and provide quick
            access to essential information. To that end, I decided to showcase
            the tour dates directly on the homepage, instead of relegating them
            to a dedicated tab alone.
          </div>
          <div className="font-['Nunito']">
            This decision was grounded in the idea of immediacy - presenting the
            most critical and timely information up front where it cannot be
            missed. Tour dates are a vital part of the community engagement
            aspect of The Blast Monkeys' brand. By prominently featuring them on
            the homepage, visitors can instantly get a sense of the lively and
            engaged community that revolves around the game.
          </div>
          <div className="font-['Nunito']">
            The tour dates are neatly arranged in a dedicated section, making
            use of clean typography and a layout that's easy to skim. Each date
            is accompanied by pertinent information such as the location and a
            brief description of the event.
          </div>

          <div className="font-['Nunito']">
            Despite these enhancements to the homepage, I've also decided to
            retain the original dedicated "Tour Dates" tab in the site's main
            navigation. This tab leads to a page that provides more detailed
            information about each tour date. This dual approach ensures that
            while the homepage provides immediate, at-a-glance information, the
            dedicated tab offers a deeper dive into the events for those who are
            interested.
          </div>

          <div className="font-['Nunito']">
            This redesign project for TheBlastMonkeys.com is still in progress,
            with continued efforts to enhance and refine its user interface and
            overall functionality. For a real-time look at the ongoing evolution
            of the site, you're invited to visit the current live version at
            <a href="https://www.theblastmonkeys.com" className="underline">
              {" "}
              theblastmonkeys.com
            </a>
            . Your patience and understanding are appreciated as we strive to
            create an engaging and intuitive platform for all Blast Monkeys
            enthusiasts.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-100% pt-10 pb-10 md:pt-40 md:pb-20">
        <Link to="/retroquest">
          <div className="flex flex-col border-solid border-4 border-[#283618] rounded-[400px] bg-[#fefae0] hover:bg-[#a4ac86] hover:text-[#fefae0]">
            <div className="text-3xl md:text-6xl p-10 font-['Brandey']">
              RetroQuest
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default TBM;
