import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { AiFillHome as HomeIconActive } from "react-icons/ai";
import { MdOutlineExplore as ExploreIcon } from "react-icons/md";
import { MdExplore as ExploreIconActive } from "react-icons/md";
import { MdOutlineSubscriptions as SubscriptionIcon } from "react-icons/md";
import { MdSubscriptions as SubscriptionIconActive } from "react-icons/md";
import { useMatch } from "react-router-dom";

const SideMenu = () => {
  const urlMatch = {
    home: useMatch("/"),
    explore: useMatch("/explore"),
    subscription: useMatch("/subscriptions"),
  };
  return (
    <div className="h-full max-h-full pr-4 w-[19%] bg-youtube-black-secondary hover:overflow-y-scroll hover:pr-0">
      <div className="py-3 last:border-b-[1.5px] last:border-b-youtube-highlight-grey">
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.home
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.home ? (
            <HomeIconActive className="text-2xl mr-6" />
          ) : (
            <HomeIcon className="text-2xl mr-6" />
          )}
          <p
            className={`${urlMatch.home && "font-medium "} text-white text-sm `}
          >
            Home
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.explore
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.explore ? (
            <ExploreIconActive className="text-2xl mr-6" />
          ) : (
            <ExploreIcon className="text-2xl mr-6" />
          )}
          <p
            className={`${
              urlMatch.explore && "font-medium "
            } text-white text-sm `}
          >
            Explore
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.subscription
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.subscription ? (
            <SubscriptionIconActive className="text-2xl mr-6" />
          ) : (
            <SubscriptionIcon className="text-2xl mr-6" />
          )}
          <p
            className={`${
              urlMatch.subscription && "font-medium "
            } text-white text-sm `}
          >
            Subscriptions
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
