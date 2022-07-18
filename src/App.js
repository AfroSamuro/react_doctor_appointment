import './reset.css'
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AsideMenu from './components/asideMenu/AsideMenu'
import Header from './components/header/Header'
import ProfileMain from './pages/profileMain/ProfileMain'
import doc1 from './images/doc_mal.svg'
import doc2 from './images/doc_har.svg'
import ProfileApps from './pages/profileAppointment/ProfileApps'
import { useState } from 'react'

export default function App() {

    const apps = [
        {
            id: 1,
            date: '15.07.2022',
            time: '15:30',
            location: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            docPhoto: doc1,
            docFio: 'Малушко Т. Н.',
            docSpec: 'Хирургия'
        },
        {
            id: 2,
            date: '15.07.2022',
            time: '16:30',
            location: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            docPhoto: doc2,
            docFio: 'Харьков В. С.',
            docSpec: 'Терапевтическое отделение'
        },
        {
            id: 3,
            date: '16.07.2022',
            time: '17:30',
            location: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            docPhoto: doc1,
            docFio: 'Малушко Т. Н.',
            docSpec: 'Хирургия'
        },
        {
            id: 4,
            date: '17.07.2022',
            time: '18:30',
            location: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            docPhoto: doc1,
            docFio: 'Малушко Т. Н.',
            docSpec: 'Хирургия'
        },
        {
            id: 5,
            date: '18.07.2022',
            time: '19:30',
            location: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            docPhoto: doc1,
            docFio: 'Малушко Т. Н.',
            docSpec: 'Хирургия'
        },
    ]

    const [docApps, setDocApps] = useState(apps)

    const deleteApp = (e) => {
        const id = e.target.getAttribute('id');
        setDocApps(docApps.filter(app => 
            app.id !== +id,
            ))
    }

    return (
        <BrowserRouter>
            <div className='content'>
                <AsideMenu />
                <section className='content__main'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<ProfileMain apps={docApps} removeApp={deleteApp}/>} />
                        <Route path='/apps' element={<ProfileApps apps={docApps} removeApp={deleteApp}/>} />
                    </Routes>
                </section>
            </div>
        </BrowserRouter>
    )
}