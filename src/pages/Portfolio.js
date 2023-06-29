import '../App.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function Portfolio(){
    return(
         <div className="App">
            <Navbar/>
            <div className='flex flex-col justify-center items-center'>
            <div className="text-6xl mt-20 sm:text-8xl md:text-8xl lg:text-8xl text-[#283618]">
          Portfolio.
        </div>
            </div>
            <Footer/>
</div>
       
    );
}

export default Portfolio;