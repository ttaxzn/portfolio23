import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className='flex flex-row sticky top-0 justify-center items-center w-full h-20 z-50'>
        <div className='flex  ring-2 ring-slate-500/30 rounded-3xl backdrop-blur-md items-center justify-center p-5 h-3/4 gap-10 md:gap-20 lg:gap-20'>
      <div className='md:pt-3 md:pb-3 md:pr-7 md:pl-7 lg:pt-3 lg:pb-3 lg:pr-7 lg:pl-7 rounded-3xl md:hover:bg-slate-600 lg:hover:bg-slate-600'>
        <Link to='/'>Work</Link></div>
      <div className='md:pt-3 md:pb-3 md:pr-7 md:pl-7 lg:pt-3 lg:pb-3 lg:pr-7 lg:pl-7 rounded-3xl md:hover:bg-slate-600 lg:hover:bg-slate-600'>
        <Link to='/about'>About</Link></div>
      <div className='md:pt-3 md:pb-3 md:pr-7 md:pl-7 lg:pt-3 lg:pb-3 lg:pr-7 lg:pl-7 rounded-3xl md:hover:bg-slate-600 lg:hover:bg-slate-600'>Social</div>
      <div className='md:pt-3 md:pb-3 md:pr-7 md:pl-7 lg:pt-3 lg:pb-3 lg:pr-7 lg:pl-7 rounded-3xl md:hover:bg-slate-600 lg:hover:bg-slate-600'>Contact</div>
        </div>
        </div>
    );
}

export default Navbar