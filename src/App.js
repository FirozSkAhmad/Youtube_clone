import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import "../index.css"
import SideBar from './components/SideBar'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'


const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <SideBar />
            <Body />
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)