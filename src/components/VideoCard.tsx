import { VideosI } from "../data/interfaces";
import { IoMdCheckmarkCircle as VerifiedIcon } from "react-icons/io";
import { AiOutlineClockCircle as WatchLaterIcon } from "react-icons/ai";
import { CgPlayList as QueueIcon } from "react-icons/cg";
import { FiMoreVertical as MoreIcon } from "react-icons/fi";
import { Link } from "react-router-dom";

interface VideoCardI {
  video: VideosI;
}

const VideoCard = ({ video }: VideoCardI) => {
  const bigSideMenu: HTMLElement | null = document.getElementById("sideMenu");
  return (
    <Link
      to={`/video?id=${video.id}`}
      className="relative w-1/4 h-auto px-2 cursor-pointer group-scope "
    >
      <div
        className={`relative w-full ${
          bigSideMenu ? "h-[11.8rem]" : "h-[10.3rem]"
        } bg-gray-500`}
      >
        <div className="absolute hidden top-2 right-2 group-scope-hover:block group">
          <div className=" flex justify-end group-scope hover:bg-youtube-black-primary opacity-90 hover:opacity-100 items-center ">
            <p className=" select-none leading-relaxed pl-2 pr-1 text-sm font-medium text-transparent transition-all ease-linear duration-200  scale-x-0 origin-right group-scope-hover:scale-x-100 group-scope-hover:text-white">
              WATCH LATER
            </p>
            <WatchLaterIcon className="text-2xl text-white bg-youtube-black-primary p-[2px] " />
          </div>
          <div className=" mt-1 flex justify-end group-scope hover:bg-youtube-black-primary opacity-90 hover:opacity-100 items-center ">
            <p className=" select-none leading-relaxed pl-2 pr-1 text-sm font-medium text-transparent transition-all ease-linear duration-200  scale-x-0 origin-right group-scope-hover:scale-x-100 group-scope-hover:text-white">
              ADD TO QUEUE
            </p>
            <QueueIcon className="text-2xl text-white bg-youtube-black-primary p-[2px]" />
          </div>
        </div>
        <p className="absolute bottom-2 right-2 py-[1px] px-[3px] text-white bg-youtube-black-primary text-xs font-medium">{video.duration}</p>
      </div>

      <div className="flex w-full pt-3">
        <div className="w-[13%] flex-shrink-0">
          <div className="w-9 h-9 bg-gray-200 rounded-full "></div>
        </div>
        <div className="max-w-[77%] text-sm ml-2">
          <p className="text-white line-clamp-2">{video.title}</p>
          <div className="mt-2 text-xs text-[rgb(140,140,140)]">
            <div className="flex items-center">
              <p className="hover:text-white mr-1">{video.channel}</p>
              {video.verified && <VerifiedIcon className="text-sm" />}
            </div>
            <p>
              {video.views} &bull; {video.published}
            </p>
          </div>
        </div>
        <div className="max-w-[10%] hidden group-scope-hover:block ">
          <button className="p-1 border-2 border-transparent rounded-full active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping">
            <MoreIcon className="text-xl text-white " />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
