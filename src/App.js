import './App.css';
import left from './imgs/1.png';
import right from './imgs/2.png';
function App() {
  return (
   <div className="App">

    {/* NAV BAR */}
    <div className='flex flex-row sticky top-0 justify-center items-center w-full h-20'>
    <div className='flex  ring-2 ring-slate-500/30 rounded-3xl backdrop-blur-sm items-center justify-center p-5 h-3/4 gap-10 md:gap-20 lg:gap-20'>
  <div className='md:pt-3 md:pb-3 md:pr-7 md:pl-7 lg:pt-3 lg:pb-3 lg:pr-7 lg:pl-7 rounded-3xl md:hover:bg-slate-600 lg:hover:bg-slate-600'>Work</div>
  <div className='md:pt-3 md:pb-3 md:pr-7 md:pl-7 lg:pt-3 lg:pb-3 lg:pr-7 lg:pl-7 rounded-3xl md:hover:bg-slate-600 lg:hover:bg-slate-600'>About</div>
  <div className='md:pt-3 md:pb-3 md:pr-7 md:pl-7 lg:pt-3 lg:pb-3 lg:pr-7 lg:pl-7 rounded-3xl md:hover:bg-slate-600 lg:hover:bg-slate-600'>Social</div>
  <div className='md:pt-3 md:pb-3 md:pr-7 md:pl-7 lg:pt-3 lg:pb-3 lg:pr-7 lg:pl-7 rounded-3xl md:hover:bg-slate-600 lg:hover:bg-slate-600'>Contact</div>
    </div>
    </div>





    {/* INTRO WITH NAME */}

    <div className='flex flex-col' >
    <div className='text-6xl mt-20 sm:text-8xl md:text-8xl lg:text-8xl'>
      Hi. I'm Tea. 
    </div>
    <div className='text-6xl m-3 sm:text-8xl md:text-8xl lg:text-8xl' >
     A Developer.
    </div>
    <div className='text-l m-8 sm:text-2xl md:text-2xl lg:text-2xl'>
    As a developer and generalist designer, I'm passionate about bringing digital visions to life that are fun, useful, and user-centric.
    </div>
    </div>

    <div className=' pt-10 flex flex-col w-full h-auto max-h-[800px] gap-10 lg:flex-row justify-center items-center md:pr-10 md:pl-10 lg:pr-20 lg:pl-20 ' >
          <div className='bg-slate-300 w-2/3 max-h-[625px] overflow-hidden rounded-3xl'>
            <div className='relative pb-10'>
              <div className='absolute right-5 top-5 text-xl md:text-4xl md:right-10 md:top-10'>SOS Game</div>
              <div className='absolute right-5 top-12 text-xl md:text-4xl md:right-10 md:top-24'>Java</div>
            </div>
            <img src={left}/>
          </div>
          <div className='bg-slate-300 w-2/3 max-h-[625px] overflow-hidden rounded-3xl'>
          <div className='relative pb-10'>
              <div className='absolute right-5 top-5 text-xl md:text-4xl md:right-10 md:top-10'>Portfolio</div>
              <div className='absolute right-5 top-12 text-xl md:text-4xl md:top-24 md:right-10'>React / JS</div>
            </div>
          <img src={left}/>
          </div>
    </div>

   </div>
  );
}

export default App;
