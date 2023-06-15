import { useEffect, useState } from "react"
import "./videosCon.css"
import { CHANNEL_IMG_URL, YOUR_API_KEY, YOUTUBE_VIDEOS_URL } from '../utils/urls'
import userIcon from '../utils/icons/userIcon.png'
import tickMarckIcon from '../utils/icons/tickMarck.svg'
import { useSelector } from "react-redux"

const VideosCon = () => {

    const [videosData, setVideosData] = useState([])

    const [channelImgs, setChannelImgs] = useState([])

    useEffect(() => {
        getVideosData()
    }, [])

    const getVideosData = async () => {

        const data = await fetch(YOUTUBE_VIDEOS_URL)
        const json = await data.json()
        setVideosData(json.items)
        json.items.map(async (videoData) => {
            const imgData = await fetch(CHANNEL_IMG_URL + videoData.snippet.channelId + '&key=' + YOUR_API_KEY)
            const imgJson = await imgData.json()
            const channelImgUrl = imgJson.items[0].snippet.thumbnails.default.url
            setChannelImgs((prevState) => [...prevState,channelImgUrl])
        })
    }

    const isVisible = useSelector(store => store.toggle.isVisible)


    return (
        <div className={isVisible ? 'smallVideos-Con' : 'largeVideos-con'}>
            {videosData.length > 0 && channelImgs.length === videosData.length ? videosData.map((videoData,ind) =>
                <div key={videoData.id} className="video-con">
                    <div className="thumbnail-con">
                        <img className="thumbnail-img" src={videoData.snippet.thumbnails.medium.url} />
                    </div>
                    <div className="about-con">
                        <div className="channelIcon-con">
                            <img className='userIcon' alt='userIcon' src={channelImgs[ind]} />
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
