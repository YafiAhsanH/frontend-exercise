import { useLocation } from "react-router-dom";
import { videos } from "../data/variables";
import { VideosI } from "../data/interfaces";
import { AiOutlineLike as LikeIcon } from "react-icons/ai";
import { AiFillLike as LikeIconActive } from "react-icons/ai";
import { AiOutlineDislike as DislikeIcon } from "react-icons/ai";
import { AiFillDislike as DislikeIconActive } from "react-icons/ai";
import { RiShareForwardLine as ShareIcon } from "react-icons/ri";
import { MdPlaylistAdd as SaveIcon } from "react-icons/md";
import { BsThreeDots as MenuIcon } from "react-icons/bs";
import { useState } from "react";

const WatchVideo = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const query = useLocation().search;
  const id = new URLSearchParams(query).get("id");
  let video: VideosI = {
    id: "",
    title: "",
    channel: "",
    verified: false,
    views: "",
    published: "",
    duration: "",
    hashtag: [],
  };
  if (id) {
    video = videos[parseInt(id)];
  }

  return (
    <div className="flex py-6 px-24 ">
      <div>
        <div className="w-[56.25rem] h-[31.5rem] bg-gray-300"></div>
        <div className=" border-b-[1px] border-b-youtube-highlight-grey mt-5">
          {video.hashtag && video.hashtag?.length > 0 && (
            <div className="flex">
              {video.hashtag.map((tag) => (
                <p className="text-[rgb(61,164,252)] mr-1 text-xs cursor-pointer">{`#${tag} `}</p>
              ))}
            </div>
          )}
          <p className="text-white w-max text-lg">{video.title}</p>
          <div className="flex justify-between text-sm mt-1 mb-2">
            <p className="text-[rgb(140,140,140)] self-center">
              {`${video.views} views`} &bull; {video.date}
            </p>
            <div className="flex text-white justify-end items-center gap-x-3">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setLiked((prev) => !prev);
                  if (disliked) {
                    setDisliked(false);
                  }
                }}
              >
                <button className="rounded-full py-1 border-2 border-transparent active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping">
                  {liked ? (
                    <LikeIconActive className="text-2xl mx-2" />
                  ) : (
                    <LikeIcon className="text-2xl mx-2" />
                  )}
                </button>
                <p className="font-medium ">{video.likes}</p>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setDisliked((prev) => !prev);
                  if (liked) {
                    setLiked(false);
                  }
                }}
              >
                <button className="rounded-full py-1 border-2 border-transparent active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping">
                  {disliked ? (
                    <DislikeIconActive className="text-2xl mx-2" />
                  ) : (
                    <DislikeIcon className="text-2xl mx-2" />
                  )}
                </button>
                <p className="font-medium ">DISLIKE</p>
              </div>
              <div className="flex items-center cursor-pointer">
                <button className="rounded-full py-1 border-2 border-transparent active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping">
                  <ShareIcon className="text-2xl mx-2" />
                </button>
                <p className="font-medium ">SHARE</p>
              </div>
              <div className="flex items-center cursor-pointer">
                <button className="rounded-full py-1 border-2 border-transparent active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping">
                  <SaveIcon className="text-2xl mx-2" />
                </button>
                <p className="font-medium ">SAVE</p>
              </div>
              <button className="rounded-full py-1 border-2 border-transparent active:bg-youtube-accent-grey active:border-youtube-accent-grey focus:animate-click-ping">
                <MenuIcon className="text-xl mx-2 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default WatchVideo;
