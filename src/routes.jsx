import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultPage from './pages/DefaultPage/DefaultPage'
import Home from './pages/Home/Home'
import SneakerForm from './pages/SneakerForm/SneakerForm'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultPage />} >
                    <Route index element={<Home />}></Route>
                    <Route path="/register-sneaker" element={<SneakerForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router