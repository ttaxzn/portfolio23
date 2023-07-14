

function Footer() {
  return (
    <div className="flex flex-row justify-center items-center gap-80 p-10 ">
      <div className="hidden md:block font-['Nunito']">
        {"\u00A9"} 2023 Tea Abuselidze
      </div>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col font-['Nunito']">
          <div className="font-bold">Elsewhere</div>
          <div className="">
            <a
              href="https://www.github.com/ttaxzn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div className="">
            <a href="https://www.read.cv/teaabus">Read.cv</a>
          </div>
          <div className="">
            <a href="https://www.linkedin.com/in/teaabuselidze/">LinkedIn</a>
          </div>
        </div>
        <div className="flex flex-col font-['Nunito']">
          <div className="font-bold">Contact</div>
          <div className="">Message</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;



