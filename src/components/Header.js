import hamburgerMenu from '../utils/icons/hamburger-menu.svg'
import youtubeIcon from '../utils/icons/youtube-logo.svg'
import searchIcon from '../utils/icons/search.svg'
import voiceIcon from '../utils/icons/voice-search-icon.svg'
import uploadIcon from '../utils/icons/upload.svg'
import notificationsIcon from '../utils/icons/notifications.svg'
import userIcon from '../utils/icons/userIcon.png'
import './header.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSuggestions } from '../utils/suggestionsSlice'

const Header = () => {

    const [search, setSearch] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    useEffect(() => {

        const timer = setTimeout(() => getSuggestions(search), 200)

        return (() => clearTimeout(timer))

    }, [search])

    const dispatch = useDispatch()
    const suggestionsInStore = useSelector((store) => store.suggestions)

    const getSuggestions = async (search) => {
        if (suggestionsInStore[search]) {
            setSuggestions(suggestionsInStore[search])
        }
        else {
            const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + search)
            const json = await data.json()
            setSuggestions(json[1])
            dispatch(addSuggestions({ [search]: json[1] }))
        }
    }

    const searchHandler=(suggestion)=>{
        console.log("clicked")
        setSearch(suggestion)
    }

    return (
        <div className='header'>
            <div className="youtubeLogo-con">
                <img className='hamburgerMenu' alt='hamburgerMenu' src={hamburgerMenu} />
                <img className='youtubeIcon' alt='youtubeIcon' src={youtubeIcon} />
            </div>
            <div className="search-con">
                <div className='parent-searchBox'>
                    <input className='searchBox' type='text' placeholder='Search' value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                         />
                    <img className='inSearchIcon' alt='inSearchIcon' src={searchIcon} />
                    {showSuggestions && suggestions.length > 2 ?
                        <div className='suggestions-con'>
                            {suggestions.map((suggestion, ind) => <div key={ind} className='suggestion' onClick={()=>searchHandler(suggestion)}>
                                <img className='suggSearchIcon' alt='searchIcon' src={searchIcon} />
                                <h3>{suggestion}</h3>
                            </div>)}
                        </div> : null}
                </div>
                <img className='searchIcon' alt='searchIcon' src={searchIcon} />
                <img className='voiceIcon' alt='voiceIcon' src={voiceIcon} />
            </div>
            <div className="user-con">
                <img className='uploadIcon' alt='uploadIcon' src={uploadIcon} />
                <img className='notificationsIcon' alt='notificationsIcon' src={notificationsIcon} />
                <img className='userIcon' alt='userIcon' src={userIcon} />
            </div>
        </div>
    )
}

export default Header