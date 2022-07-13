import './reset.css'
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AsideMenu from './components/asideMenu/AsideMenu'
import Header from './components/header/Header'
import ProfileMain from './pages/profileMain/ProfileMain'

export default function App() {



    return (
        <BrowserRouter>
            <div className='content'>
                <AsideMenu />
                <section className='content__main'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<ProfileMain />} />
                        <Route path='/apps' element={''} />
                    </Routes>
                </section>
            </div>
        </BrowserRouter>
    )
}