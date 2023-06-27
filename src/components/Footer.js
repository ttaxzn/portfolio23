function Footer(){
    return(
        <div className='flex flex-row justify-center items-center gap-80 p-10 '>
        <div className='hidden md:block'>
        {'\u00A9'} 2023 Tea Abuselidze
        </div>
        <div className="flex flex-row gap-20">
            <div className="flex flex-col">
                <div>Elsewhere</div>
                <div><a href="https://www.github.com/ttaxzn" target="_blank">Github</a></div>
                <div><a href="https://www.read.cv/teaabus">Read.cv</a></div>
                <div><a href="https://www.linkedin.com/in/teaabuselidze/">LinkedIn</a></div>
            </div>
            <div className="flex flex-col">
                <div>Contact</div>
                <div>Message</div>
                
            </div>
        </div>
        </div>
    );
}

export default Footer;