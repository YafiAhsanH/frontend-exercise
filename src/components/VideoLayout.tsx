import { videos } from "../data/variables"
import VideoCard from './VideoCard';

const VideoLayout = () => {
    return (
        <div className="h-full w-full pt-6 mx-4">
            {videos.map(video => (
                <VideoCard video={video}/>
            ))}
        </div>
    )
}

export default VideoLayout
