import React from 'react'
import QuickLinks from "./QuickLinks"
import VideosCon from './VideosCon'
import "./body.css"

const Body = () => {
    return (
        <div className='body'>
            <QuickLinks />
            <VideosCon/>
        </div>
    )
}

export default Body
