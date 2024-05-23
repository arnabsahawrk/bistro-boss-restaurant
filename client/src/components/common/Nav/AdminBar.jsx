import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import useFirebase from "../../../hooks/useFirebase";
import toast from "react-hot-toast";
import { GoHomeFill } from "react-icons/go";

const AdminBar = () => {
  const { signOutUser } = useFirebase();
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

  //Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success("Sign Out");
      navigate("/");
    } catch (err) {
      toast.error(`${err}`);
    }
  };

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#D1A054] flex justify-between lg:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link className="flex flex-col items-center" to="/">
              <Typography
                as="h1"
                className="text-[#151515] font-cinzel font-extrabold uppercase text-lg md:text-xl"
              >
                BISTRO BOSS
              </Typography>
              <Typography
                as="h1"
                className=" text-[#151515] font-cinzel font-extrabold uppercase text-sm md:text-base"
              >
                Restaurant
              </Typography>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="p-4 focus:outline-none focus:bg-[#D1A054]"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 lg:fixed flex flex-col justify-between overflow-x-hidden bg-[#D1A054] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full flex py-2 justify-center items-center mx-auto">
              <Link className="flex flex-col items-center" to="/">
                <Typography
                  as="h1"
                  className="text-[#151515] font-cinzel font-extrabold uppercase text-lg md:text-xl"
                >
                  BISTRO BOSS
                </Typography>
                <Typography
                  as="h1"
                  className=" text-[#151515] font-cinzel font-extrabold uppercase text-sm md:text-base"
                >
                  Restaurant
                </Typography>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              {/* <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <BsGraphUp className="w-5 h-5" />
  
                  <span className="mx-4 font-medium">Statistics</span>
                </NavLink> */}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          {/* Home  */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:text-white ${
                isActive ? "text-white" : "text-[#151515]"
              }`
            }
          >
            <GoHomeFill className="w-5 h-5" />
            <span className="mx-4 font-medium">Home</span>
          </NavLink>

          <button
            onClick={handleSignOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-[#151515] hover:text-white transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default AdminBar;
