import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../Container/Container";
import useFirebase from "../../../hooks/useFirebase";

function NavList() {
  const { user, signOutUser } = useFirebase();
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-cinzel text-white hover:text-[#EEFF25]"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#EEFF25]" : ""} ${
              isPending ? "text-amber-900" : ""
            }`
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-cinzel text-white hover:text-[#EEFF25]"
      >
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#EEFF25]" : ""} ${
              isPending ? "text-amber-900" : ""
            }`
          }
        >
          Contact Us
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-cinzel text-white hover:text-[#EEFF25]"
      >
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#EEFF25]" : ""} ${
              isPending ? "text-amber-900" : ""
            }`
          }
        >
          Dashboard
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-cinzel text-white hover:text-[#EEFF25]"
      >
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#EEFF25]" : ""} ${
              isPending ? "text-amber-900" : ""
            }`
          }
        >
          Our Menu
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-cinzel text-white hover:text-[#EEFF25]"
      >
        <NavLink
          to="/shop/salad"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#EEFF25]" : ""} ${
              isPending ? "text-amber-900" : ""
            }`
          }
        >
          Our Shop
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-cinzel text-white hover:text-[#EEFF25]"
      >
        {user ? (
          <button onClick={() => signOutUser()}>Sign Out</button>
        ) : (
          <NavLink
            to="/signIn"
            className={({ isActive, isPending }) =>
              `${isActive ? "text-[#EEFF25]" : ""} ${
                isPending ? "text-amber-900" : ""
              }`
            }
          >
            Sign In
          </NavLink>
        )}
      </Typography>
    </ul>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="absolute top-0 z-50 bg-[#15151580] mx-auto max-w-full shadow-sm w-full backdrop-filter-none backdrop-blur-none border-none rounded-none">
      <Container className="flex items-center justify-between">
        <Link className="flex flex-col items-center" to="/">
          <Typography
            as="h1"
            className="text-white font-cinzel font-extrabold uppercase text-lg md:text-xl"
          >
            BISTRO BOSS
          </Typography>
          <Typography
            as="h1"
            className=" text-white font-cinzel font-extrabold uppercase text-sm md:text-base"
          >
            Restaurant
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-[#EEFF25]" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
          )}
        </IconButton>
      </Container>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nav;
