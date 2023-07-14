import "../App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import mockup from "../imgs/mobilemockup.png";
import flow from "../imgs/flowchart.png";
import footer from "../imgs/footer.png";
import code from "../imgs/codesnippet.png";

function Portfolio() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="text-6xl mt-20 sm:text-8xl md:text-8xl lg:text-8xl text-[#283618] font-['Brandey']">
          Portfolio.
        </div>
      </div>
      <div className="flex flex-col md:justify-center md:items-center pl-10 pt-20 md:pl-0">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-10 ">
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
            <div className="font-['Nunito']">Product Designer, Front End</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex p-5 md:p-0">
          <img src={mockup} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Overview</div>
          <div className="font-['Nunito']">
            Creating the portfolio website was a fascinating journey that honed
            my skills in modern web technologies like React, JavaScript, and
            Tailwind CSS. The process was iterative and collaborative,
            leveraging the convenience and version control benefits offered by
            GitHub. I'll walk you through the steps I followed to bring my
            portfolio site to life.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Key Components</div>
          <div className="font-['Nunito']">
            At the outset, I broke down the site's architecture, laying out the
            basic pages it would comprise. There would be a home page that
            serves as an introduction and provides an overview of the site. An
            about page to delve into my story, experiences, and skill sets. And,
            importantly, a projects page that would showcase my work, thereby
            functioning as a dynamic resume of sorts.
          </div>
          <div className="font-['Nunito']">
            The first phase involved setting up the basic React application,
            bootstrapping the project with Create React App. I focused on
            designing the navigation bar at this stage. The navigation bar was
            designed to be responsive, adjusting to different device screen
            sizes seamlessly. I utilized the Tailwind CSS utility-first approach
            to design it. By using Tailwind CSS, I could apply styles directly
            in the HTML code, resulting in a neat, streamlined component,
            minimizing the number of stylesheets and enhancing readability.
          </div>
          <div className="font-['Nunito']">
            I used GitHub as the repository for all the development work. With
            every significant feature or update, I committed the changes to
            GitHub. This not only ensured that every version of the project was
            safely stored but also allowed me to backtrack if necessary. As an
            added bonus, it allowed others to review the code, solicit feedback,
            and demonstrate my commitment to best practices in version control.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Flow Chart</div>
          <div className="font-['Nunito']">
            The flowchart effectively illustrates the routing journey of the
            portfolio website, demonstrating the interactive journey through
            various sections, guided by React Router. At the heart of the
            website lies the Home page. From here, users can select one of the
            four links: "Portfolio", "Lumos", "The Blast Monkeys", and
            "RetroQuest", each directing them to a unique path. React Router
            associates these links with their respective routes and ensures the
            correct component gets rendered. When "Portfolio" is clicked, users
            are directed to the Portfolio page, associated with the "/portfolio"
            route. On this page, there's a button at the bottom which, when
            clicked, routes to the "Lumos" page. This stepwise navigation
            pattern continues throughout the website.
          </div>
          <div className="font-['Nunito']">
            After viewing the details on the Portfolio page, the user can click
            the button to be taken to the Lumos page, associated with the
            "/lumos" route. Similarly, the Lumos page features a button which,
            when clicked, routes the user to "The Blast Monkeys" page,
            associated with the "/blastmonkeys" route. The Blast Monkeys page
            follows the same pattern, with a button that routes users to the
            final page, "RetroQuest", associated with the "/retroquest" route.
            This routing system provides a linear journey through the pages,
            allowing users to explore the work sequentially. In essence, the
            flowchart captures the routing intricacies of the website,
            highlighting the progressive navigation design enabled by React
            Router, which guides users through the website in a structured,
            logical sequence.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex p-5 md:p-0">
          <img src={flow} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Footer Component</div>
          <div className="font-['Nunito']">
            Components lie at the heart of React's philosophy, encapsulating
            logic and styling into self-contained units that can manage their
            own state and lifecycle. This architectural paradigm of breaking
            down the UI into modular, reusable components brings numerous
            benefits to the table, such as improved code maintainability,
            readability, and reusability. By implementing complex UIs as a
            composition of simpler, independent components, React simplifies
            development and debugging, thereby accelerating the development
            process.
          </div>
          <div className="font-['Nunito']">
            The Footer component in my portfolio website is an excellent
            illustration of this principle. It is a consistent element that
            appears across all pages of the website, thereby making it a perfect
            candidate for a standalone, reusable component. By implementing the
            Footer as a separate component, I was able to maintain a clean,
            organized codebase, as any changes required to the Footer could be
            performed in one place and reflected across the entire site.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex p-5 w-5/6 md:w-1/3 md:p-0">
          <img src={footer} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">
            Scroll To Top Component
          </div>
          <div className="font-['Nunito']">
            The ScrollToTop React component that I've incorporated into my
            website plays a critical role in streamlining the user experience by
            providing smooth navigation across the site. Utilizing hooks from
            both React and React Router, I've crafted this component to scroll
            the window back to the top whenever the route location changes. In
            simpler terms, when a visitor navigates from one page to another,
            ScrollToTop ensures that the new page begins from the top, rather
            than maintaining the scroll position of the previous page.
          </div>
          <div className="font-['Nunito']">
            Here's how I've structured the component:
            <ol className="list-decimal list-inside pt-5 pb-5">
              <li>
                {" "}
                I've imported useEffect from React and useLocation from React
                Router.
              </li>
              <li>
                {" "}
                I've defined a functional component, ScrollToTop, which uses the
                useLocation hook to monitor the current location (route).
              </li>
              <li>
                {" "}
                Within ScrollToTop, I've utilized the useEffect hook to run a
                function every time the location changes. This function,
                window.scrollTo(0, 0), scrolls the window back to the top.
              </li>
              <li>
                The component then returns its children components, which are
                passed to it via props.
              </li>
            </ol>
            By integrating ScrollToTop into my portfolio website, I ensure that
            no matter what route a visitor takes—be it from the Home page to the
            About page or from one project to another in the Portfolio—every new
            page always starts from the top. This facilitates a seamless,
            intuitive browsing experience that adheres to standard web
            navigation practices, making ScrollToTop an integral part of the
            user-friendly design of my site.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex p-5 md:p-0">
          <img src={code} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="font-['Nunito']">
            For a deeper dive into my work and the projects I've undertaken,
            feel free to visit my GitHub at{" "}
            <a href="https://www.github.com/ttaxzn" className="underline">
              github.com/ttaxzn
            </a>{" "}
            or below in the footer. I welcome any opportunity to collaborate and
            am always open to feedback. Thank you for your interest in my work!
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-100% pt-10 pb-10 md:pt-40 md:pb-20">
        <Link to="/lumos">
          <div className="flex flex-col border-solid border-4 border-[#283618] rounded-[400px] bg-[#fefae0] hover:bg-[#a4ac86] hover:text-[#fefae0]">
            <div className="text-3xl md:text-6xl p-10 font-['Brandey']">
              Lumos
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
