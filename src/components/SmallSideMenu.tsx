import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { AiFillHome as HomeIconActive } from "react-icons/ai";
import { MdOutlineExplore as ExploreIcon } from "react-icons/md";
import { MdExplore as ExploreIconActive } from "react-icons/md";
import { MdOutlineSubscriptions as SubscriptionIcon } from "react-icons/md";
import { MdSubscriptions as SubscriptionIconActive } from "react-icons/md";
import { MdOutlineVideoLibrary as LibraryIcon } from "react-icons/md";
import { MdVideoLibrary as LibraryIconActive } from "react-icons/md";
import { useMatch } from "react-router-dom";

const SmallSideMenu = () => {
  const urlMatch = {
    home: useMatch("/"),
    explore: useMatch("/explore"),
    subscription: useMatch("/subscriptions"),
    library: useMatch("/library"),
  };
  return (
    <div className="group flex-shrink-0 h-full max-h-full pb-[3.5rem] w-full bg-youtube-black-secondary">
      <div className="text-white py-4 items-center cursor-pointer hover:bg-youtube-highlight-grey active:bg-[rgb(70,70,70)]">
        {urlMatch.home ? (
          <HomeIconActive className="text-2xl mx-auto " />
        ) : (
          <HomeIcon className="text-2xl mx-auto" />
        )}
        <p className="text-white text-[10px] text-center mt-2">Home</p>
      </div>
      <div className="text-white py-4 items-center cursor-pointer hover:bg-youtube-highlight-grey active:bg-[rgb(70,70,70)]">
        {urlMatch.explore ? (
          <ExploreIconActive className="text-2xl mx-auto " />
        ) : (
          <ExploreIcon className="text-2xl mx-auto" />
        )}
        <p className="text-white text-[10px] text-center mt-2">Explore</p>
      </div>
      <div className="text-white py-4 items-center cursor-pointer hover:bg-youtube-highlight-grey active:bg-[rgb(70,70,70)]">
        {urlMatch.subscription ? (
          <SubscriptionIconActive className="text-2xl mx-auto " />
        ) : (
          <SubscriptionIcon className="text-2xl mx-auto" />
        )}
        <p className="text-white text-[10px] text-center mt-2">Subscriptions</p>
      </div>
      <div className="text-white py-4 items-center cursor-pointer hover:bg-youtube-highlight-grey active:bg-[rgb(70,70,70)]">
        {urlMatch.library ? (
          <LibraryIconActive className="text-2xl mx-auto " />
        ) : (
          <LibraryIcon className="text-2xl mx-auto" />
        )}
        <p className="text-white text-[10px] text-center mt-2">Library</p>
      </div>
    </div>
  );
};

export default SmallSideMenu;
