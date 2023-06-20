import './App.css';

function App() {
  return (
   <div className="App">

    {/* INTRO WITH NAME */}
    <div className='flex flex-col' >
    <div className='text-6xl mt-40 sm:text-8xl md:text-8xl lg:text-8xl'>
      Hi. I'm Tea. 
    </div>
    <div className='text-6xl m-3 sm:text-8xl md:text-8xl lg:text-8xl' >
     A Developer.
    </div>
    <div className='text-l m-8 sm:text-2xl md:text-2xl lg:text-2xl'>
    As a developer and generalist designer, I'm passionate about bringing digital visions to life that are fun, useful, and user-centric.
    </div>
    </div>

    <div className='flex flex-col justify-center items-center w-full h-[950px] gap-10 md:flex-row md:p-20 md:h-[400px] lg:flex-row lg:p-20 lg:h-[400px]' >
          <div className='flex-initial bg-slate-300 w-5/6 h-[425px] rounded-3xl align-center md:h-[400px] lg:flex-row lg:p-20 lg:h-[400px]'>

          </div>
          <div className='flex-initial bg-slate-300 w-5/6 h-[425px] rounded-3xl align-center md:h-[400px] lg:flex-row lg:p-20 lg:h-[400px]'>

          </div>
    </div>

   </div>
  );
}

export default App;
