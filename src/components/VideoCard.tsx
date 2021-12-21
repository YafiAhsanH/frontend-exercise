import { VideosI } from "../data/interfaces";

interface VideoCardI {
  video: VideosI;
}

const VideoCard = ({ video }: VideoCardI) => {
  return (
    <div className="w-80 bg-gray-800">
      <div className="w-full h-[10.3rem] bg-gray-500"></div>
      <div className="flex">
        <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
        <div>
          <p className="text-white">{video.title}</p>
          <p className="text-[rgb(90,90,90)]">{video.channel}</p>
          <p className="text-[rgb(90,90,90)]">{video.views} &bull; {video.published}</p>
          
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
