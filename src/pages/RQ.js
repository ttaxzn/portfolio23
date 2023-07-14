import '../App.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import mockup2 from "../imgs/RQmockup.png";
import { Link } from "react-router-dom";


function RQ() {
  return(
    <div className="App">
        <Navbar/>
        <div className='flex flex-col justify-center items-center'>
        <div className="text-6xl mt-20 sm:text-8xl md:text-8xl lg:text-8xl text-[#283618] font-['Brandey'] p-10 pb-0 pt-0">
      RetroQuest
    </div>
        </div>
        <div className="flex flex-col md:justify-center md:items-center pl-10 pt-20 md:pl-0">
    <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-10">
      <div className="">
        <div className="pb-2 font-['Nunito']">Timeline</div>
        <div className="font-['Nunito']">May 2023 - Current</div>
      </div>
      <div className="">
        <div className="pb-2 font-['Nunito']">Team</div>
        <div className="font-['Nunito']">Tea Abuselidze</div>
      </div>
      <div className="">
        <div className="pb-2 font-['Nunito']">Role</div>
        <div className="font-['Nunito']">iOS Developer, UI/UX Designer</div>
      </div>

      <div className="">
            <div className="pb-2 font-['Nunito']">Skills</div>
            <div className="font-['Nunito']">Swift</div>
          </div>
    </div>
  </div>

  <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex p-5 md:p-0 md:w-1/5">
          <img src={mockup2} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Overview</div>
          <div className="font-['Nunito']">
          Developing RetroQuest, an app designed to uncover hidden gems in local areas, has been an enriching and rewarding journey. Created exclusively for iOS and written in Swift, this project has offered me a unique opportunity to merge my love for travel and discovery with my passion for app development.


          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
        <div className="text-3xl font-['Brandey']">Development</div>

          <div className="font-['Nunito']">
          The conceptualization of RetroQuest stemmed from a personal interest in exploring lesser-known attractions and a desire to share these finds with others. With the vision of creating a community-driven platform, I designed the app to allow users not just to discover these hidden locations, but also to contribute to its growing database by adding their own findings and photos. This ensures that the app remains a dynamic and ever-evolving hub for adventurers and casual explorers alike.


          </div>
          <div className="font-['Nunito']">
          One of the major challenges I have faced during the development was ensuring the app's usability while maintaining its fun and adventurous spirit. To achieve this, I prioritized a clean, intuitive interface that is easy to navigate while also incorporating elements that capture the excitement of discovery.


          </div>
          <div className="font-['Nunito']">
          Working with Swift allowed me to utilize its efficiency and performance to ensure the app runs smoothly. I used Core Location to manage location data and Apple's MapKit for implementing user-friendly interactive maps. For the photo-sharing functionality, I integrated the app with iCloud, allowing users to seamlessly upload their images and share their discoveries with the RetroQuest community.


          </div>

          <div className="font-['Nunito']">
          As it stands, RetroQuest is an ongoing project that I'm refining and expanding. I'm continuously looking into implementing new features based on user feedback and my own ideas. These include social sharing options, personalized recommendation algorithms, and a feature to save and organize favorite locations.
          </div>
        </div>
      </div>
  <div className="flex flex-col justify-center items-center w-100% pt-10 pb-10 md:pt-40 md:pb-20">
        <Link to='/about'>
        <div className="flex flex-col border-solid border-4 border-[#283618] rounded-[400px] bg-[#fefae0] hover:bg-[#a4ac86] hover:text-[#fefae0]">
          <div className="text-3xl md:text-6xl p-10 font-['Brandey']">
            About
          </div>
        </div>
        </Link>
      </div>
        <Footer/>
</div>
);
}

export default RQ;
