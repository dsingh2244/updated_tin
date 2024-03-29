import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/OnBoarding'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useCookies} from 'react-cookie'

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const authToken = cookies.AuthToken

    return (
        <BrowserRouter>
            <Routes>
                <Route path="updated_tin/" element={<Home/>}/>
                {authToken && <Route path="updated_tin/dashboard" element={<Dashboard/>}/>}
                {authToken && <Route path="updated_tin/onboarding" element={<OnBoarding/>}/>}

            </Routes>
        </BrowserRouter>
    )
}

export default App