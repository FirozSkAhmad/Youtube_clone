import homeIcon from "../utils/icons/home.svg"
import shortsIcon from "../utils/icons/shorts.svg"
import subscriptionsIcon from "../utils/icons/subscriptions.svg"
import libraryIcon from "../utils/icons/library.svg"
import histroyIcon from "../utils/icons/histroy.svg"
import watchLaterIcon from "../utils/icons/watchLater.svg"
import likeIcon from "../utils/icons/likedVideos.svg"
import trendingIcon from "../utils/icons/trending.svg"
import shoppingIcon from "../utils/icons/shopping.svg"
import musicIcon from "../utils/icons/music.svg"
import moviesIcon from "../utils/icons/movies.svg"
import liveIcon from "../utils/icons/live.svg"
import gamingIcon from "../utils/icons/gaming.svg"
import newsIcon from "../utils/icons/news.svg"
import sportsIcon from "../utils/icons/sports.svg"
import learningIcon from "../utils/icons/learning.svg"
import fashionIcon from "../utils/icons/fashion.svg"
import "./sideBar.css"

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="frequentlyUsedBox">
                <div className="linkBox">
                    <img className="icon" alt="homeIcon" src={homeIcon} />
                    <h4>Home</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="shortsIcon" src={shortsIcon} />
                    <h4>Shorts</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="subscriptionsIcon" src={subscriptionsIcon} />
                    <h4>Subscriptions</h4>
                </div>
            </div>

            <div className="histroyBox">
                <div className="linkBox">
                    <img className="icon" alt="libraryIcon" src={libraryIcon} />
                    <h4>Library</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="histroyIcon" src={histroyIcon} />
                    <h4>Histroy</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="watchLaterIcon" src={watchLaterIcon} />
                    <h4>Watch later</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="likeIcon" src={likeIcon} />
                    <h4>Liked videos</h4>
                </div>
            </div>

            <div className="exploreBox">
                <div className="linkBox">
                    <img className="icon" alt="trendingIcon" src={trendingIcon} />
                    <h4>Trending</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="shoppingIcon" src={shoppingIcon} />
                    <h4>Shopping</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="musicIcon" src={musicIcon} />
                    <h4>Music</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="moviesIcon" src={moviesIcon} />
                    <h4>Movies</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="liveIcon" src={liveIcon} />
                    <h4>Live</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="gamingIcon" src={gamingIcon} />
                    <h4>Gaming</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="newsIcon" src={newsIcon} />
                    <h4>News</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="sportsIcon" src={sportsIcon} />
                    <h4>Sports</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="learningIcon" src={learningIcon} />
                    <h4>Learning</h4>
                </div>
                <div className="linkBox">
                    <img className="icon" alt="fashionIcon" src={fashionIcon} />
                    <h4>Fashion & Beauty</h4>
                </div>
            </div>
        </div>
    )
}

export default SideBar