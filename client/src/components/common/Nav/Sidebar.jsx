import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Spinner, Typography } from "@material-tailwind/react";
import useFirebase from "../../../hooks/useFirebase";
import toast from "react-hot-toast";
import { GoHomeFill } from "react-icons/go";
import { RiAdminFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { useGetAdmin } from "../../../hooks/TanStackQuery/useGet";
import { MdOutlinePayment } from "react-icons/md";

const Sidebar = () => {
  const { signOutUser } = useFirebase();
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const { isAdmin, isAdminLoading } = useGetAdmin();

  //Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success("Sign Out");
      navigate("/");
      localStorage.removeItem("access-token");
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
            {/*  Menu Items */}
            <nav>
              {/* User Home */}
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2  transition-colors duration-300 transform  hover:text-white ${
                    isActive ? "text-white" : "text-[#151515]"
                  }`
                }
              >
                <GoHomeFill className="w-5 h-5" />

                <span className="mx-4 font-medium">User Home</span>
              </NavLink>
              {/* My Cart */}
              <NavLink
                to="/dashboard/myCart"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2  transition-colors duration-300 transform  hover:text-white ${
                    isActive ? "text-white" : "text-[#151515]"
                  }`
                }
              >
                <FaCartShopping className="w-5 h-5" />

                <span className="mx-4 font-medium">My Cart</span>
              </NavLink>
              {/* payment history */}
              <NavLink
                to="/dashboard/paymentHistory"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2  transition-colors duration-300 transform  hover:text-white ${
                    isActive ? "text-white" : "text-[#151515]"
                  }`
                }
              >
                <MdOutlinePayment className="w-5 h-5" />

                <span className="mx-4 font-medium">payment history</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />
          {/* Home  */}
          <button
            onClick={() => navigate("/")}
            className="flex w-full items-center px-4 py-2 mt-2 text-[#151515] hover:text-white transition-colors duration-300 transform"
          >
            <GoHomeFill className="w-5 h-5" />
            <span className="mx-4 font-medium">Home</span>
          </button>

          {/* Admin  */}
          {isAdminLoading ? (
            <div className="flex w-full items-center px-4 py-2 mt-2">
              <Spinner color="light-green" />
            </div>
          ) : (
            <button
              disabled={!isAdmin}
              onClick={() => navigate("/admin")}
              className={`flex w-full items-center px-4 py-2 mt-2 transition-colors duration-300 transform ${
                !isAdmin
                  ? "text-[#15151580]"
                  : "text-[#151515] hover:text-white"
              }`}
            >
              <RiAdminFill className="w-5 h-5" />
              <span className="mx-4 font-medium">Admin</span>
            </button>
          )}

          {/* Sign Out  */}
          <button
            onClick={handleSignOut}
            className="flex w-full items-center px-4 py-2 mt-2 text-[#151515] hover:text-white transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
