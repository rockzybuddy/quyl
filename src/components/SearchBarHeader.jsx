import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
const SearchBarHeader = () => {
  return (
    <div className="flex items-center justify-between  py-4 shadow-sm">
      {/* Search Bar */}
      <div className="flex items-center w-1/2">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search your course"
            className="w-full py-3 px-5 text-sm rounded-lg outline-none border-none focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m1.56-5.61a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Icons and User Section */}
      <div className="flex items-center space-x-6">
        {/* Help Icon */}
        <button className="relative">
          <IoIosHelpCircleOutline className="h-6 w-6"/>
        </button>

        {/* Chat Icon */}
        <button className="relative">
          <MdMessage className="h-6 w-6"/>
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings Icon */}
        <button className="relative">
          <LuSettings2 className="h-6 w-6"/>
          {/* <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span> */}
        </button>

        <button className="relative">
          <IoNotificationsOutline className="h-6 w-6"/>
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-nice-young-girl-show-tongue-wear-top-isolated-turquoise-color-background-portrait-nice-young-girl-show-tongue-323915903.jpg"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium text-gray-800">Adeline H. Dancy</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBarHeader;
