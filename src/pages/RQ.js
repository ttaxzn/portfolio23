import '../App.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
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
