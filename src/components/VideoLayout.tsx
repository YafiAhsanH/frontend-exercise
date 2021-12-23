import { videos } from "../data/variables"
import VideoCard from './VideoCard';

const VideoLayout = () => {
    return (
        <div className="h-[81%] w-full py-6 px-3 flex flex-wrap gap-y-5 overflow-y-scroll">
            {videos.map(video => (
                <VideoCard video={video}/>
            ))}
        </div>
    )
}

export default VideoLayout
