import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { BsPlayBtnFill as Logo } from "react-icons/bs";
import { IoIosSearch as SearchIcon } from "react-icons/io";
import { BsFillMicFill as MicIcon } from "react-icons/bs";
import { RiVideoAddLine as CreateVideoIcon } from "react-icons/ri";
import { RiVideoAddFill as CreateVideoIconActive } from "react-icons/ri";
import { IoAppsOutline as AppsIcon } from "react-icons/io5";
import { IoApps as AppsIconActive } from "react-icons/io5";
import { BsBell as BellIcon } from "react-icons/bs";
import { BsBellFill as BellIconActive } from "react-icons/bs";
import { ReactNode, useState, useEffect } from "react";
import SideMenu from "./sidemenu/SideMenu";
import SmallSideMenu from "./sidemenu/SmallSideMenu";
import { Link, useMatch, useLocation } from "react-router-dom";
import SideMenuModal from "./sidemenu/SideMenuModal";

interface NavbarI {
  children: ReactNode;
  bigSideMenu: boolean;
  setBigSideMenu: Function;
}

const Navbar = ({
  children,
  bigSideMenu,
  setBigSideMenu,
}: NavbarI): JSX.Element => {
  const [createActive, setCreateActive] = useState(false);
  const [appsActive, setAppsActive] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);
  const inHomePage = useMatch("/");
  const [hideSideMenu, setHideSideMenu] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setHideSideMenu(true);
    setBigSideMenu(true);
  }, [location, setBigSideMenu]);

  const handleToggleActive = (clicked: string) => {
    setCreateActive(false);
    setAppsActive(false);
    setNotificationActive(false);
    if (clicked === "create video") {
      setCreateActive(true);
    } else if (clicked === "apps") {
      setAppsActive(true);
    } else {
      setNotificationActive(true);
    }
  };
  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <div className="bg-youtube-black-secondary h-[7.7%] flex justify-between px-4">
        <div className="flex ">
          <button
            className="p-2 border-2 border-transparent active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping"
            onClick={
              inHomePage
                ? () => setBigSideMenu((prev: boolean) => !prev)
                : () => setHideSideMenu((prev: boolean) => !prev)
            }
          >
            <MenuIcon className="text-white text-2xl" />
          </button>
          <Link to="/" className="flex items-center p-3 hover:cursor-pointer">
            <Logo className="text-youtube-red text-3xl" />
            <p className="text-white font-semibold text-xl ml-1">NoTube</p>
          </Link>
        </div>
        <div className="w-1/2 flex py-2">
          <input
            className=" w-full bg-youtube-black-primary border border-youtube-accent-grey focus:border-blue-500 px-3 outline-0 text-white placeholder-gray-500 text-sm "
            placeholder="Search"
          />
          <div className="h-full bg-youtube-accent-grey items-center flex py-3 px-4 hover:cursor-pointer">
            <SearchIcon className="text-white text-2xl" />
          </div>
          <button className="bg-youtube-black-primary rounded-full flex items-center ml-2 border-2 border-transparent active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping">
            <MicIcon className="text-white m-2" />
          </button>
        </div>
        <div className="flex py-2 pr-2 items-center gap-x-4 justify-end">
          <button
            className="h-full rounded-full px-1 border-2 border-transparent active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping"
            onClick={() => handleToggleActive("create video")}
          >
            {createActive ? (
              <CreateVideoIconActive className="text-white text-2xl m-1" />
            ) : (
              <CreateVideoIcon className="text-white text-2xl m-1" />
            )}
          </button>
          <button
            className="h-full rounded-full px-1 border-2 border-transparent active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping"
            onClick={() => handleToggleActive("apps")}
          >
            {appsActive ? (
              <AppsIconActive className="text-white text-xl m-1" />
            ) : (
              <AppsIcon className="text-white text-xl m-1" />
            )}
          </button>
          <button
            className="h-full rounded-full px-1 border-2 border-transparent active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping"
            onClick={() => handleToggleActive("notification")}
          >
            {notificationActive ? (
              <BellIconActive className="text-white text-xl m-1" />
            ) : (
              <BellIcon className="text-white text-xl m-1" />
            )}
          </button>

          <div className="h-[80%] rounded-full w-[31px] bg-pink-600 text-center hover:cursor-pointer">
            <p className="text-white text-xl h-full font-thin leading-normal">
              P
            </p>
          </div>
        </div>
      </div>
      <div className="h-full max-h-full max-w-screen bg-youtube-black-primary flex ">
        {inHomePage ? (
          bigSideMenu ? (
            <div className="w-full max-w-[16%]">
              <SideMenu />
            </div>
          ) : (
            <div className="w-full max-w-[4.7%]">
              <SmallSideMenu />
            </div>
          )
        ) : (
          <SideMenuModal
            hideSideMenu={hideSideMenu}
            setHideSideMenu={setHideSideMenu}
          />
        )}
        <div
          className={`h-full w-full ${
            inHomePage ? (bigSideMenu ? "max-w-[84%]" : "max-w-[95.3%]") : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
