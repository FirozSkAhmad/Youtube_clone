import { useState } from "react"
import { useSelector } from "react-redux"
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import "./quickLinks.css"

const quickLinks = ["All", "Music", "Live", "Universites", "Cinemas", "Computer programing", "AI", "Trailers", "All", "Music", "Live", "Universites", "Cinemas", "Computer programing", "AI", "Trailers", "All", "Music", "Live", "Universites", "Cinemas", "Computer programing", "AI", "Trailers", "All", "Music", "Live", "Universites", "Cinemas", "Computer programing", "AI", "Trailers"]


const QuickLinks = () => {
    
    const rightArrowHandler = () => {
        const box = document.querySelector('.quickLinks-con')
        const width = box.clientWidth
        box.scrollLeft = box.scrollLeft + width
    }

    const leftArrowHandler = () => {
        const box = document.querySelector('.quickLinks-con')
        const width = box.clientWidth
        box.scrollLeft = box.scrollLeft - width
    }

    const isVisible = useSelector(store => store.toggle.isVisible)

    return (
        <div className={isVisible ? "small-carouselCon" : "large-carouselCon"}>
            <div className="quickLinks-con">
                {quickLinks.map((link, ind) => <div key={ind} className="quickLink">{link}</div>)}
            </div>
            < div className="rightArrow" onClick={rightArrowHandler}><AiOutlineRight /></div>
            <div className="leftArrow" onClick={leftArrowHandler}><AiOutlineLeft /></div>
        </div >


    )
}

export default QuickLinks