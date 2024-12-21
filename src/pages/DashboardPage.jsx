import DashboardNavbar from "../components/DashboardNavbar";

import user from "../assets/images/icon-user-male.svg";
import briefcase from "../assets/images/icon-briefcase.svg";
import mailbox from "../assets/images/icon-mailbox.svg";
import payroll from "../assets/images/icon-speech-bubble.svg";
import star from "../assets/images/icon-favorites.svg";
import icon from "../assets/images/icon-connect.svg";

import user1 from "../assets/images/user-4.jpg";
import user2 from "../assets/images/user-6.jpg";
import user3 from "../assets/images/user-7.jpg";
import user4 from "../assets/images/user-8.jpg";
import user5 from "../assets/images/user-9.jpg";

const DashboardPage = () => {
  return (
    <>
      <div>
        <div>
          <DashboardNavbar />
        </div>
        <div className="text-sm sm:grid sm:grid-cols-3 xl:grid-cols-6 mt-24 xl:mx-11">
          <div className="w-11/12 relative bg-blue-950 text-center mx-auto my-5 py-5 rounded-lg">
            <img src={user} className="w-12 h-12 mx-auto mb-5" />
            <span className="text-blue-300 font-semibold">
              <p>Employees</p>
              <h1 className="text-2xl">96</h1>
            </span>
          </div>
          <div className="w-11/12 bg-yellow-900 relative text-center mx-auto my-5 py-5 rounded-lg">
            <img src={briefcase} className="w-12 h-12 mx-auto mb-5" />
            <span className="text-yellow-300 font-semibold">
              <p>Clients</p>
              <h1 className="text-2xl">3,650</h1>
            </span>
          </div>
          <div className="w-11/12 bg-cyan-800 text-center mx-auto my-5 py-5 rounded-lg">
            <img src={mailbox} className="w-12 h-12 mx-auto mb-5" />
            <span className="text-cyan-300 font-semibold">
              <p>Projects</p>
              <h1 className="text-2xl">356</h1>
            </span>
          </div>
          <div className="w-11/12 bg-red-950 text-center mx-auto my-5 py-5 rounded-lg">
            <img src={star} className="w-12 h-12 mx-auto mb-5" />
            <span className="text-red-300 font-semibold">
              <p>Events</p>
              <h1 className="text-2xl">696</h1>
            </span>
          </div>
          <div className="w-11/12 bg-green-800 text-center mx-auto my-5 py-5 rounded-lg">
            <img src={payroll} className="w-12 h-12 mx-auto mb-5" />
            <span className="text-green-300 font-semibold">
              <p>Payroll</p>
              <h1 className="text-2xl">$96k</h1>
            </span>
          </div>
          <div className="w-11/12 bg-fuchsia-950 text-center mx-auto my-5 py-5 rounded-lg">
            <img src={icon} className="w-12 h-12 mx-auto mb-5" />
            <span className="text-fuchsia-300 font-semibold">
              <p>Reports</p>
              <h1 className="text-2xl">59</h1>
            </span>
          </div>
        </div>

        <div className="top-projects border border-gray-600 rounded-lg w-11/12 text-sm mx-auto my-5 p-5">
          <div className="flex justify-between items-center mb-10">
            <span>
              <h1 className="font-semi text-2xl">Top Projects</h1>
              <p>Best Products</p>
            </span>
            <span>
              <select className="bg-transparent border-2 rounded focus:outline-none px-3 py-2 hover:border-primary">
                <option className="bg-gray-700">March 2025</option>
                <option className="bg-gray-700">April 2025</option>
                <option className="bg-gray-700">May 2025</option>
              </select>
            </span>
          </div>
          <div>
            <table className="w-full overflow-x-scroll">
              <thead className="font-semibold">
                <td className="">Assisgned</td>
                <td className="">Project</td>
                <td className="">Priority</td>
                <td>Budget</td>
              </thead>
              <tbody className="">
                <tr className="border border-gray-600 border-l-0 border-r-0">
                  <td className="flex items-center gap-3 my-3">
                    <img src={user1} className="w-10 h-10 rounded-full" />
                    <span className="space-y-1">
                      <h1 className="font-bold">Sunhil Joshi</h1>
                      <p className="text-xs">Web Designer</p>
                    </span>
                  </td>
                  <td className="text-xs md:text-sm">
                    <span className="text-gray-400">Elite Admin</span>
                  </td>
                  <td>
                    <span className="bg-green-900 text-green-300 rounded-xl text-xs px-2 py-1.5">
                      Low
                    </span>
                  </td>
                  <td>
                    <span>$3.9k</span>
                  </td>
                </tr>
                <tr className="border border-gray-600 border-l-0 border-r-0">
                  <td className="flex items-center gap-3 my-3">
                    <img src={user2} className="w-10 h-10 rounded-full" />
                    <span className="space-y-1">
                      <h1 className="font-bold">John Deo</h1>
                      <p className="text-xs">Web Developer</p>
                    </span>
                  </td>
                  <td className="text-xs md:text-sm">
                    <span className="text-gray-400">Flexy Admin</span>
                  </td>
                  <td>
                    <span className="bg-yellow-900 text-yellow-300 rounded-xl text-xs px-2 py-1.5">
                      Medium
                    </span>
                  </td>
                  <td>
                    <span>$24.9k</span>
                  </td>
                </tr>
                <tr className="border border-gray-600 border-l-0 border-r-0">
                  <td className="flex items-center gap-3 my-3">
                    <img src={user3} className="w-10 h-10 rounded-full" />
                    <span className="space-y-1">
                      <h1 className="font-bold">Nirav Joshi</h1>
                      <p className="text-xs">Web Manager</p>
                    </span>
                  </td>
                  <td className="text-xs md:text-sm">
                    <span className="text-gray-400">Material Pro</span>
                  </td>
                  <td>
                    <span className="bg-red-900 text-red-300 rounded-xl text-xs px-2 py-1.5">
                      High
                    </span>
                  </td>
                  <td>
                    <span>$12.8k</span>
                  </td>
                </tr>
                <tr className="borde border-gray-600 border-l-0 border-r-0r">
                  <td className="flex items-center gap-3 my-3">
                    <img src={user4} className="w-10 h-10 rounded-full" />
                    <span className="space-y-1">
                      <h1 className="font-bold">Yuraj Sheth</h1>
                      <p className="text-xs">Project Manager</p>
                    </span>
                  </td>
                  <td className="text-xs md:text-sm">
                    <span className="text-gray-400">Xtreme Admin</span>
                  </td>
                  <td>
                    <span className="bg-blue-900 text-blue-300 rounded-xl text-xs px-2 py-1.5">
                      Very High
                    </span>
                  </td>
                  <td>
                    <span>$2.4k</span>
                  </td>
                </tr>
                <tr className="border border-gray-600 border-l-0 border-r-0">
                  <td className="flex items-center gap-3 my-3">
                    <img src={user5} className="w-10 h-10 rounded-full" />
                    <span className="space-y-1">
                      <h1 className="font-bold">Jericho Laye</h1>
                      <p className="text-xs">Software Designer</p>
                    </span>
                  </td>
                  <td className="text-xs md:text-sm">
                    <span className="text-gray-400"> Elite Admin</span>
                  </td>
                  <td>
                    <span className="bg-cyan-900 text-cyan-300 rounded-xl text-xs px-2 py-1.5">
                      High
                    </span>
                  </td>
                  <td>
                    <span>$22.4k</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
