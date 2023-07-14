import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Contact() {
  return (
    <>
    <div className="App h-[100vh]">
      <Navbar />
      <div className="flex flex-col justify-center items-center pb-10">
        <div className="text-6xl mt-20 sm:text-8xl md:text-8xl lg:text-8xl text-[#283618] font-['Brandey']">
          Contact.
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
      <form
        action="https://public.herotofu.com/v1/e7524860-8274-11ed-b38f-a1ed22f366b1"
        method="post"
        accept-charset="UTF-8"
        className="justify-center items-center align-center relative flex flex-col bg-transparent font-['Nunito'] text-lg"
      >
        <div className="">
          <input
            name="Name"
            id="name"
            type="text"
            placeholder="Name"
            className="bg-transparent pl-2 pr-2 border-2 border-[#283618] rounded-3xl h-[5vh] placeholder:text-[#283618] w-[70vw] md:w-[30vw]"
            required
          />
        </div>
        <div className="pt-5">
          <input
            name="Email"
            id="email"
            type="email"
            placeholder="Email"
            className="bg-transparent pl-2 pr-2 border-2 border-[#283618] rounded-3xl h-[5vh] placeholder:text-[#283618] w-[70vw] md:w-[30vw]"
            required
          />
        </div>
        <div className="pt-5 pb-10">
            <textarea className="bg-transparent pl-2 pr-2 border-2  border-[#283618] pb-10 rounded-3xl h-[20vh] placeholder:text-[#283618] w-[70vw] md:w-[30vw] pt-3">Message</textarea>
          
        </div>
        <div>
          <input type="submit" value="Submit" className="border-2 pl-5 pr-5 pt-3 pb-3 border-[#283618] rounded-xl hover:bg-[#a4ac86] hover:text-white font-bold"/>
          <div className="overflow-hidden whitespace-nowrap absolute indent-[-99999px]">
            <input
              type="text"
              name="_gotcha"
              tabindex="-1"
              autocomplete="off"
            />
          </div>
        </div>
      </form>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default Contact;
