import { Link } from 'react-router-dom'
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
import { SUGGESTIONS_URL } from '../utils/urls'
import { setIsVisible } from '../utils/toggleSlice'

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
            const data = await fetch(SUGGESTIONS_URL + search)
            const json = await data.json()
            setSuggestions(json[1])
            dispatch(addSuggestions({ [search]: json[1] }))
        }
    }

    const isVisibleHandler = () => {
        dispatch(setIsVisible())
    }

    return (
        <div className='header'>
            <div className="youtubeLogo-con">
                <img className='hamburgerMenu' alt='hamburgerMenu' src={hamburgerMenu} onClick={isVisibleHandler} />
                <Link className='youtubeIcon-box' to='/'><img className='youtubeIcon' alt='youtubeIcon' src={youtubeIcon} /></Link>
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
                            {suggestions.map((suggestion, ind) => <div key={ind} className='suggestion'>
                                <img className='suggSearchIcon' alt='searchIcon' src={searchIcon} />
                                <h3>{suggestion}</h3>
                            </div>)}
                        </div> : null}
                </div>
                <div className='searchIcon-box'>
                    <img className='searchIcon' alt='searchIcon' src={searchIcon} />
                    <h4>Search</h4>
                </div>

                <div className='voiceIcon-box'>
                    <img className='voiceIcon' alt='voiceIcon' src={voiceIcon} />
                    <h4>Search with voice</h4>
                </div>
            </div>
            <div className="user-con">
                <div className='uploadIcon-box'>
                    <img className='uploadIcon' alt='uploadIcon' src={uploadIcon} />
                    <h4>Create</h4>
                </div>
                <div className='notificationsIcon-box'>
                    <img className='notificationsIcon' alt='notificationsIcon' src={notificationsIcon} />
                    <h4>Notifications</h4>
                </div>
                <img className='userIcon' alt='userIcon' src={userIcon} />
            </div>
        </div>
    )
}

export default Header