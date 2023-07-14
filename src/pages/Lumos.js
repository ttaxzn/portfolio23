import "../App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import four from "../imgs/4.png";
import six from "../imgs/6.png";
import seven from "../imgs/7.png";
import eight from "../imgs/8.png";
import thirteen from "../imgs/13.png";
import fifteen from "../imgs/15.png";
import { Link } from "react-router-dom";


function Lumos() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="text-6xl mt-20 sm:text-8xl md:text-8xl lg:text-8xl text-[#283618 font-['Brandey']">
          Lumos.
        </div>
      </div>

      <div className="flex flex-col md:justify-center md:items-center pl-10 pt-20 md:pl-0">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-10">
          <div className="">
            <div className="pb-2 font-['Nunito']">Timeline</div>
            <div className="font-['Nunito']">May 2022 - August 2022</div>
          </div>
          <div className="">
            <div className="pb-2 font-['Nunito']">Team</div>
            <div className="font-['Nunito']">Walmart Global Tech</div>
          </div>
          <div className="">
            <div className="pb-2 font-['Nunito']">Role</div>
            <div className="font-['Nunito']">Product Designer, Front End</div>
          </div>

          <div className="">
            <div className="pb-2 font-['Nunito']">Skills</div>
            <div className="font-['Nunito']">React.js, JS, TS, Bootstrap, Postman</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex p-5 md:p-0 md:w-2/3">
          <img src={four} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Overview</div>
          <div className="font-['Nunito']">
            Lumos is a powerful web application designed to provide
            comprehensive insights and metrics related to replenishments at
            Walmart and Sam's Club. It serves as an invaluable tool for
            suppliers, vendors, and stakeholders, offering real-time visibility
            into inventory management, demand forecasting, and supply chain
            analytics. With Lumos, users can make data-driven decisions,
            optimize their operations, and maximize their business potential
            within the Walmart and Sam's Club ecosystem.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Exception Reports</div>
          <div className="font-['Nunito']">
            Exception Reports is a powerful component of Lumos, designed to
            provide users with detailed insights and analysis of exceptional
            events and anomalies within the Walmart and Sam's Club replenishment
            processes. This feature enables suppliers, vendors, and stakeholders
            to identify and address critical issues, exceptions, and outliers,
            allowing for proactive decision-making and improved operational
            efficiency.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center overflow-hidden pt-10">
        <div className="flex w-[130%] md:w-5/6 overflow-hidden justify-center items-center md:p-0">
          <img src={six} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Key Components</div>
          <div className="font-['Nunito']">
            Identification of Exceptions: The Exception Reports feature utilizes
            advanced algorithms to identify exceptional events and deviations
            from standard replenishment processes. These exceptions may include
            stock discrepancies, order errors, delivery delays, pricing
            anomalies, and more. By flagging these issues, Lumos empowers users
            to quickly detect and resolve problems that can impact inventory
            management and customer satisfaction.
          </div>
          <div className="font-['Nunito']">
            Root Cause Analysis: Lumos enables users to perform root cause
            analysis by providing insights into the underlying reasons behind
            the identified exceptions. Through data analysis and correlation,
            the feature helps users uncover patterns, trends, or systemic issues
            that contribute to exceptional events. This analysis facilitates
            targeted interventions and process improvements to prevent future
            occurrences.
          </div>
          <div className="font-['Nunito']">
            Collaboration and Resolution Workflow: Exception Reports foster
            collaboration among teams by providing a platform for communication,
            sharing of information, and collaborative problem-solving. Users can
            add comments, notes, or attachments to specific exceptions, enabling
            seamless collaboration between suppliers, vendors, and relevant
            stakeholders. This collaborative workflow ensures efficient
            resolution of exceptions and facilitates knowledge sharing for
            future reference.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Out of Stock</div>
          <div className="font-['Nunito']">
            As a part of the Lumos team, I was thrilled to take on the challenge
            of creating the Out-of-Stock Reports feature. Recognizing the
            importance of providing users with comprehensive insights into
            product availability, I embarked on a journey to empower suppliers,
            vendors, and stakeholders with valuable information to optimize
            their replenishment processes and enhance customer satisfaction.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex p-5 md:p-0 md:w-2/3">
          <img src={seven} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Key Components</div>
          <div className="font-['Nunito']">
            API Integration: Lumos seamlessly integrates with an API that
            retrieves up-to-date information about product availability from
            Walmart and Sam's Club systems. This integration ensures that the
            out-of-stock reports generated in Lumos are accurate and reflect the
            current status of products.
          </div>
          <div className="font-['Nunito']">
            Detailed Product Information: The Out-of-Stock Reports in Lumos
            provide users with detailed information about the unavailable
            products. This includes essential details such as item number, UPC
            (Universal Product Code), description, vendor, and more. Having
            access to this information helps users identify specific products
            that are out of stock and understand their attributes.
          </div>
          <div className="font-['Nunito']">
            Causes of Out-of-Stock: Lumos goes beyond just displaying product
            information and delves into the root causes of out-of-stock
            instances. By analyzing the data obtained from the API, Lumos
            identifies the factors contributing to the unavailability of
            products. These causes could range from supply chain disruptions,
            production issues, delays in shipments, changes in demand, and more.
          </div>
          <div className="font-['Nunito']">
            Analytics and Insights: Lumos transforms the raw data from the API
            into meaningful analytics and insights. Users can explore trends,
            patterns, and correlations related to out-of-stock incidents. This
            analysis allows them to identify recurring issues, potential areas
            of improvement, and strategies to mitigate future stockouts.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Item Search</div>
          <div className="font-['Nunito']">
            The Item Search feature goes beyond the traditional search
            functionality by integrating with the Exception Reports, allowing
            users to quickly access relevant exception reports based on item
            numbers. This unique feature enables suppliers, vendors, and
            stakeholders to efficiently identify and address exceptional events
            or anomalies associated with specific products within the Walmart
            and Sam's Club ecosystem.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex p-5 md:p-0 md:w-2/3">
          <img src={eight} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Key Components</div>
          <div className="font-['Nunito']">
            Seamless Integration: The Item Search feature seamlessly integrates
            with the Exception Reports module in Lumos. When users search for a
            specific item using its item number, the system automatically
            retrieves any exception reports related to that item.
          </div>
          <div className="font-['Nunito']">
            Streamlined Issue Resolution: The integration between Item Search
            and Exception Reports accelerates the issue resolution process.
            Users can effortlessly navigate from the search results to the
            detailed exception reports, enabling them to take immediate action
            to address the exceptional event and mitigate any potential impact
            on inventory management, order fulfillment, or customer
            satisfaction.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Bookmark</div>
          <div className="font-['Nunito']">
            The Bookmark feature is a convenient tool designed to allow
            users to save and bookmark specific exception reports for easy
            access and reference. By leveraging this feature, suppliers,
            vendors, and stakeholders can efficiently organize and manage their
            exceptional events data within the Walmart and Sam's Club ecosystem.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex p-5 md:p-0 md:w-2/3 justify-center items-center">
          <img src={fifteen} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 w-full pl-10 pr-10 pt-20 md:pl-0 md:pr-0 md:w-1/3">
          <div className="text-3xl font-['Brandey']">Key Components</div>
          <div className="font-['Nunito']">
            Quick and Easy Access: Once exception reports are bookmarked, users
            can quickly access them from a dedicated bookmarks section within
            Lumos. This eliminates the need for repetitive searching or
            navigating through multiple reports, enabling users to retrieve
            important information efficiently.
          </div>
          <div className="font-['Nunito']">
            Collaboration and Sharing: Lumos enables users to collaborate and
            share bookmarked exception reports with other team members or
            stakeholders. This feature facilitates effective communication,
            fosters collaboration, and promotes knowledge sharing within the
            organization.
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center pt-12">
        <div className="flex flex-col p-5 md:p-0 md:w-2/3 justify-center items-center">
          <img src={thirteen} className="drop-shadow-md" alt="screenshot" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-100% pt-10 pb-10 md:pt-40 md:pb-20">
        <Link to='/theblastmonkeys'>
        <div className="flex flex-col border-solid border-4 border-[#283618] rounded-[400px] bg-[#fefae0] hover:bg-[#a4ac86] hover:text-[#fefae0]">
          <div className="text-3xl md:text-6xl p-10 font-['Brandey']">
            The Blast Monkeys
          </div>
        </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Lumos;
