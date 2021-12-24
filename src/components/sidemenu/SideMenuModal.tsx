import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { BsPlayBtnFill as Logo } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useOutsideAlerter from "../../utils/UseOutsideAlerter";
import SideMenu from './SideMenu';
interface SideMenuModalI {
  hideSideMenu: boolean;
  setHideSideMenu: Function;
}
const SideMenuModal = ({ hideSideMenu, setHideSideMenu }: SideMenuModalI) => {
  const modalRef = useRef(null);
  useOutsideAlerter(modalRef, () => {
    setHideSideMenu(true);
  });

  return (
    <div
      className={`absolute top-0 left-0 w-full backdrop-filter bg-opacity-40 transition duration-200 ${
        hideSideMenu ? "bg-transparent pointer-events-none" : "bg-black"
      }`}
    >
      <div
        className={`transition ${
          hideSideMenu ? "-translate-x-full" : "translate-x-0"
        } max-w-[16%] h-screen`}
        ref={modalRef}
      >
        <div className="bg-youtube-black-secondary h-[7.7%] flex justify-between px-4">
          <div className="flex ">
            <button
              className="p-2 border-2 border-transparent active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping"
              onClick={() => setHideSideMenu((prev: boolean) => !prev)}
            >
              <MenuIcon className="text-white text-2xl" />
            </button>
            <Link to="/" className="flex items-center p-3 hover:cursor-pointer">
              <Logo className="text-youtube-red text-3xl" />
              <p className="text-white font-semibold text-xl ml-1">NoTube</p>
            </Link>
          </div>
        </div>
        <div className="h-[92.3%]">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default SideMenuModal;
