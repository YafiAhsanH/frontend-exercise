import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { AiFillHome as HomeIconActive } from "react-icons/ai";
import { MdOutlineExplore as ExploreIcon } from "react-icons/md";
import { MdExplore as ExploreIconActive } from "react-icons/md";
import { MdOutlineSubscriptions as SubscriptionIcon } from "react-icons/md";
import { MdSubscriptions as SubscriptionIconActive } from "react-icons/md";
import { MdOutlineVideoLibrary as LibraryIcon } from "react-icons/md";
import { MdVideoLibrary as LibraryIconActive } from "react-icons/md";
import { RiHistoryFill as HistoryIcon } from "react-icons/ri";
import { RiVideoLine as YourVideosIcon } from "react-icons/ri";
import { AiOutlineClockCircle as WatchLaterIcon } from "react-icons/ai";
import { AiFillClockCircle as WatchLaterIconActive } from "react-icons/ai";
import { AiOutlineLike as LikeIcon } from "react-icons/ai";
import { AiFillLike as LikeIconActive } from "react-icons/ai";
import { IoChevronDown as ShowMoreIcon } from "react-icons/io5";
import { IoChevronUp as ShowLessIcon } from "react-icons/io5";
import { CgPlayList as PlaylistIcon } from "react-icons/cg";
import { BsDot as DotIcon } from "react-icons/bs";
import { BsCircleFill as CircleIcon } from "react-icons/bs";
import { AiOutlinePlusCircle as BrowseChannelsIcon } from "react-icons/ai";
import { AiFillPlusCircle as BrowseChannelsIconActive } from "react-icons/ai";
import { BsPlayBtn as PremiumIcon } from "react-icons/bs";
import { BsPlayBtnFill as PremiumIconActive } from "react-icons/bs";
import { IoFilmOutline as MoviesIcon } from "react-icons/io5";
import { IoFilm as MoviesIconActive } from "react-icons/io5";
import { IoGameControllerOutline as GamesIcon } from "react-icons/io5";
import { IoGameController as GamesIconActive } from "react-icons/io5";
import { MdWifiTethering as LiveIcon } from "react-icons/md";
import { AiOutlineTrophy as SportsIcon } from "react-icons/ai";
import { AiFillTrophy as SportsIconActive } from "react-icons/ai";
import { IoSettingsOutline as SettingsIcon } from "react-icons/io5";
import { IoSettingsSharp as SettingsIconActive } from "react-icons/io5";
import { BsFlag as ReportIcon } from "react-icons/bs";
import { BsFlagFill as ReportIconActive } from "react-icons/bs";
import { MdHelpOutline as HelpIcon } from "react-icons/md";
import { RiFeedbackLine as FeedbackIcon } from "react-icons/ri";

import { useMatch } from "react-router-dom";
import { useState } from "react";
import { playlists, subbedChannels } from "../data/variables";

const SideMenu = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMoreSubbed, setShowMoreSubbed] = useState(false);
  const urlMatch = {
    home: useMatch("/"),
    explore: useMatch("/explore"),
    subscription: useMatch("/subscriptions"),
    library: useMatch("/library"),
    history: useMatch("/history"),
    yourVideos: useMatch("/yourVideos"),
    watchLater: useMatch("/watchLater"),
    liked: useMatch("/liked"),
    browseChannels: useMatch("/browse"),
    premium: useMatch("/premium"),
    movies: useMatch("/movies"),
    gaming: useMatch("/gaming"),
    live: useMatch("/live"),
    sport: useMatch("/sport"),
    settings: useMatch("/settings"),
    report: useMatch("/report"),
  };
  return (
    <div id="sideMenu" className="group flex-shrink-0 h-full max-h-full pb-[3.5rem] w-full bg-youtube-black-secondary overflow-y-scroll scrollbar-hide hover:scrollbar-default ">
      <div className="py-3 border-b-[1.5px] border-b-youtube-highlight-grey pr-4 group-hover:pr-0">
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.home
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.home ? (
            <HomeIconActive className="text-2xl mr-6 " />
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
            <SubscriptionIcon className="text-2xl mr-6 " />
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
      <div className="py-3 border-b-[1.5px] border-b-youtube-highlight-grey pr-4 group-hover:pr-0">
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.library
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.library ? (
            <LibraryIconActive className="text-2xl mr-6" />
          ) : (
            <LibraryIcon className="text-2xl mr-6" />
          )}
          <p
            className={`${
              urlMatch.library && "font-medium "
            } text-white text-sm `}
          >
            Library
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.history
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          <HistoryIcon
            className={`text-2xl mr-6 ${urlMatch.history && "font-bold"}`}
          />
          <p
            className={`${
              urlMatch.history && "font-medium "
            } text-white text-sm `}
          >
            History
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.yourVideos
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          <YourVideosIcon className="text-2xl mr-6" />
          <p
            className={`${
              urlMatch.yourVideos && "font-medium "
            } text-white text-sm `}
          >
            Your videos
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.watchLater
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.watchLater ? (
            <WatchLaterIconActive className="text-2xl mr-6" />
          ) : (
            <WatchLaterIcon className="text-2xl mr-6" />
          )}
          <p
            className={`${
              urlMatch.watchLater && "font-medium "
            } text-white text-sm `}
          >
            Watch later
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.liked
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.liked ? (
            <LikeIconActive className="text-2xl mr-6" />
          ) : (
            <LikeIcon className="text-2xl mr-6" />
          )}
          <p
            className={`${
              urlMatch.liked && "font-medium "
            } text-white text-sm `}
          >
            Liked videos
          </p>
        </div>
        {showMoreMenu &&
          playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch hover:bg-youtube-highlight-grey "
            >
              <PlaylistIcon className="text-2xl mr-6" />
              <p className="text-white text-sm">{playlist.title}</p>
            </div>
          ))}
        {playlists.length !== 0 && (
          <div
            className="flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch hover:bg-youtube-highlight-grey "
            onClick={() => setShowMoreMenu((prev) => !prev)}
          >
            {showMoreMenu ? (
              <ShowLessIcon className="text-2xl mr-6" />
            ) : (
              <ShowMoreIcon className="text-2xl mr-6" />
            )}
            <p className="text-white text-sm">
              {showMoreMenu ? "Show Less" : "Show More"}
            </p>
          </div>
        )}
      </div>
      <div className="py-3 border-b-[1.5px] border-b-youtube-highlight-grey pr-4 group-hover:pr-0">
        <div className="flex py-1 items-center px-6 justify-items-stretch">
          <p className="text-[rgb(160,160,160)] font-semibold text-sm">
            SUBSCRIPTIONS
          </p>
        </div>
        {subbedChannels.length > 7 ? (
          <>
            {subbedChannels.slice(0, 7).map((channel) => (
              <div
                key={channel.id}
                className="flex py-2 text-white items-center pl-6 cursor-pointer justify-items-stretch hover:bg-youtube-highlight-grey "
              >
                <CircleIcon className={`text-2xl mr-6 ${channel.picture}`} />
                <p className="text-white text-sm">{channel.name}</p>
                {channel.newVideos && (
                  <div className="flex justify-end flex-grow">
                    <DotIcon className="text-2xl mr-2 text-[rgb(61,164,252)]" />
                  </div>
                )}
              </div>
            ))}
            {showMoreSubbed && (
              <>
                {subbedChannels.slice(7).map((channel) => (
                  <div
                    key={channel.id}
                    className="flex py-2 text-white items-center pl-6 cursor-pointer justify-items-stretch hover:bg-youtube-highlight-grey "
                  >
                    <CircleIcon
                      className={`text-2xl mr-6 ${channel.picture}`}
                    />
                    <p className="text-white text-sm">{channel.name}</p>
                    {channel.newVideos && (
                      <div className="flex justify-end flex-grow">
                        <DotIcon className="text-2xl mr-2 text-[rgb(61,164,252)]" />
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex py-2 text-white items-center pl-6 cursor-pointer justify-items-stretch hover:bg-youtube-highlight-grey ">
                  {urlMatch.browseChannels ? (
                    <BrowseChannelsIconActive className="text-2xl mr-6" />
                  ) : (
                    <BrowseChannelsIcon className="text-2xl mr-6" />
                  )}
                  <p
                    className={`${
                      urlMatch.browseChannels && "font-medium "
                    } text-white text-sm `}
                  >
                    Browse channels
                  </p>
                </div>
              </>
            )}
            <div
              className="flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch hover:bg-youtube-highlight-grey "
              onClick={() => setShowMoreSubbed((prev) => !prev)}
            >
              {showMoreSubbed ? (
                <ShowLessIcon className="text-2xl mr-6" />
              ) : (
                <ShowMoreIcon className="text-2xl mr-6" />
              )}
              <p className="text-white text-sm">
                {showMoreSubbed
                  ? "Show Less"
                  : `Show ${subbedChannels.slice(7).length} More`}
              </p>
            </div>
          </>
        ) : (
          <>
            {subbedChannels.map((channel) => (
              <div
                key={channel.id}
                className="flex py-2 text-white items-center pl-6 cursor-pointer justify-items-stretch hover:bg-youtube-highlight-grey "
              >
                <CircleIcon className={`text-2xl mr-6 ${channel.picture}`} />
                <p className="text-white text-sm">{channel.name}</p>
                {channel.newVideos && (
                  <div className="flex justify-end flex-grow">
                    <DotIcon className="text-2xl mr-2 text-[rgb(61,164,252)]" />
                  </div>
                )}
              </div>
            ))}
            <div className="flex py-2 text-white items-center pl-6 cursor-pointer justify-items-stretch hover:bg-youtube-highlight-grey ">
              {urlMatch.browseChannels ? (
                <BrowseChannelsIconActive className="text-2xl mr-6" />
              ) : (
                <BrowseChannelsIcon className="text-2xl mr-6" />
              )}
              <p
                className={`${
                  urlMatch.browseChannels && "font-medium "
                } text-white text-sm `}
              >
                Browse channels
              </p>
            </div>
          </>
        )}
      </div>
      <div className="py-3 border-b-[1.5px] border-b-youtube-highlight-grey pr-4 group-hover:pr-0">
        <div className="flex py-1 items-center px-6 justify-items-stretch">
          <p className="text-[rgb(160,160,160)] font-semibold text-sm">
            MORE FROM NOTUBE
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.premium
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.premium ? (
            <PremiumIconActive className="text-2xl mr-6 " />
          ) : (
            <PremiumIcon className="text-2xl mr-6" />
          )}
          <p
            className={`${
              urlMatch.premium && "font-medium "
            } text-white text-sm `}
          >
            NoTube Premium
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.movies
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.movies ? (
            <MoviesIconActive className="text-2xl mr-6" />
          ) : (
            <MoviesIcon className="text-2xl mr-6" />
          )}
          <p
            className={`${
              urlMatch.movies && "font-medium "
            } text-white text-sm `}
          >
            Movies
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.gaming
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.gaming ? (
            <GamesIconActive className="text-2xl mr-6" />
          ) : (
            <GamesIcon className="text-2xl mr-6 " />
          )}
          <p
            className={`${
              urlMatch.gaming && "font-medium "
            } text-white text-sm `}
          >
            Gaming
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.live
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          <LiveIcon
            className={`text-2xl mr-6 ${urlMatch.live && "font-bold"}`}
          />
          <p
            className={`${urlMatch.live && "font-medium "} text-white text-sm `}
          >
            Live
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.sport
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.sport ? (
            <SportsIconActive className="text-2xl mr-6" />
          ) : (
            <SportsIcon className="text-2xl mr-6 " />
          )}
          <p
            className={`${
              urlMatch.sport && "font-medium "
            } text-white text-sm `}
          >
            Sports
          </p>
        </div>
      </div>
      <div className="py-3 border-b-[1.5px] border-b-youtube-highlight-grey pr-4 group-hover:pr-0">
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.settings
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.settings ? (
            <SettingsIconActive className="text-2xl mr-6 " />
          ) : (
            <SettingsIcon className="text-2xl mr-6" />
          )}
          <p
            className={`${
              urlMatch.settings && "font-medium "
            } text-white text-sm `}
          >
            Settings
          </p>
        </div>
        <div
          className={`flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch ${
            urlMatch.report
              ? "bg-youtube-highlight-grey hover:bg-[rgb(70,70,70)] "
              : "hover:bg-youtube-highlight-grey "
          }`}
        >
          {urlMatch.report ? (
            <ReportIconActive className="text-2xl mr-6" />
          ) : (
            <ReportIcon className="text-2xl mr-6" />
          )}
          <p
            className={`${
              urlMatch.report && "font-medium "
            } text-white text-sm `}
          >
            Report history
          </p>
        </div>
        <div className="flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch hover:bg-youtube-highlight-grey">
          <HelpIcon className="text-2xl mr-6 " />
          <p className=" text-white text-sm">Help</p>
        </div>
        <div className="flex py-2 text-white items-center px-6 cursor-pointer justify-items-stretch hover:bg-youtube-highlight-grey">
          <FeedbackIcon className="text-2xl mr-6 " />
          <p className=" text-white text-sm">Send feedback</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
