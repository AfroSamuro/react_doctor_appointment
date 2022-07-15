import './reset.css'
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AsideMenu from './components/asideMenu/AsideMenu'
import Header from './components/header/Header'
import ProfileMain from './pages/profileMain/ProfileMain'
import doc1 from './images/doc_mal.svg'
import doc2 from './images/doc_har.svg'

export default function App() {

    const docApps = [
        {
            date: '15.06.20',
            time: '15:30',
            location: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            docPhoto: doc1,
            docFio: 'Малушко Т. Н.',
            docSpec: 'Хирургия'
        },
        {
            date: '15.06.20',
            time: '16:30',
            location: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            docPhoto: doc2,
            docFio: 'Харьков В. С.',
            docSpec: 'Терапевтическое отделение'
        },
        {
            date: '16.06.20',
            time: '17:30',
            location: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            docPhoto: doc1,
            docFio: 'Малушко Т. Н.',
            docSpec: 'Хирургия'
        },
        {
            date: '17.06.20',
            time: '18:30',
            location: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            docPhoto: doc1,
            docFio: 'Малушко Т. Н.',
            docSpec: 'Хирургия'
        },
        {
            date: '18.06.20',
            time: '19:30',
            location: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            docPhoto: doc1,
            docFio: 'Малушко Т. Н.',
            docSpec: 'Хирургия'
        },
    ]

    return (
        <BrowserRouter>
            <div className='content'>
                <AsideMenu />
                <section className='content__main'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<ProfileMain apps={docApps} />} />
                        <Route path='/apps' element={''} />
                    </Routes>
                </section>
            </div>
        </BrowserRouter>
    )
}