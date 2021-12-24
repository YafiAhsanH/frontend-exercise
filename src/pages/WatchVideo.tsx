import { useLocation } from "react-router-dom";
import { videos } from "../data/variables";
import { VideosI } from '../data/interfaces';

const WatchVideo = () => {
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
  };
  if (id) {
    video = videos[parseInt(id)];
  }

  return <div>{video.title}</div>;
};

export default WatchVideo;
