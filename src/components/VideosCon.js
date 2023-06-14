import { useEffect, useState } from "react"
import "./videosCon.css"
import { YOUTUBE_VIDEOS_URL } from '../utils/urls'
import userIcon from '../utils/icons/userIcon.png'
import tickMarckIcon from '../utils/icons/tickMarck.svg'

const VideosCon = () => {

    const [videosData, setVideosData] = useState([])

    useEffect(() => {
        getVideosData()
    }, [])

    const getVideosData = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_URL)
        const json = await data.json()
        setVideosData(json.items)
    }

    return (
        <div className='videos-Con'>
            {console.log(videosData.length)}
            {videosData.length > 0 ? videosData.map((videoData) =>
                <div key={videoData.id} className="video-con">
                    <div className="thumbnail-con">
                        <img className="thumbnail-img" src={videoData.snippet.thumbnails.medium.url} />
                    </div>
                    <div className="about-con">
                        <div className="channelIcon-con">
                            <img className='userIcon' alt='userIcon' src={userIcon} />
                        </div>
                        <div className="details-con">
                            <div className="title-con">
                                <h3>{videoData.snippet.title}</h3>
                            </div>
                            <div className="channelName">
                                <h4>{videoData.snippet.channelTitle}</h4>
                                <img className="tickMarckIcon" alt="tickMarckIcon" src={tickMarckIcon} />
                            </div>
                            <div className="viewCount-con">
                                <h4>{videoData.statistics.viewCount} views</h4>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div >
    )
}

export default VideosCon
