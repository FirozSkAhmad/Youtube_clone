import React from 'react'
import QuickLinks from "./QuickLinks"
import VideosCon from './VideosCon'
import "./body.css"
import { useSelector } from 'react-redux'

const Body = () => {

    const isVisible = useSelector(store => store.toggle.isVisible)

    return (
        <div className={isVisible ? 'smallBody' : 'largeBody'}>
            <QuickLinks />
            <VideosCon />
        </div>
    )
}

export default Body
