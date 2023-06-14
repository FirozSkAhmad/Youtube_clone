
import "./quickLinks.css"

const quickLinks = ["All", "Music", "Live", "Universites", "Cinemas", "Computer programing", "AI", "Trailers"]

const QuickLinks = () => {
    return (
        <div className="quickLinks-con">
            {quickLinks.map((link, ind) => <div key={ind} className="quickLink">{link}</div>)}
        </div>
    )
}

export default QuickLinks