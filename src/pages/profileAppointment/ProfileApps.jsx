import CardDoc from '../../components/cardDoc/CardDoc'
import './ProfileApps.css'
import arrow from '../../images/arrow.svg'
import Calendar from 'react-calendar'
import '../../components/calendar/Calendar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function ProfileApps(props) {

    const apps = props.apps

    const [showedApps, setShowedApps] = useState(apps)

    const showDailyApps = (e) => {
        const chosenDate = [e.getDate(),
        e.getMonth() + 1 < 10 ?
            `0${e.getMonth() + 1}` :
            e.getMonth() + 1,
        e.getFullYear()].join('.')

        setShowedApps(() => {
            return apps.filter(app =>
                app.date === chosenDate
            )
        })
    }

    const showAllApps = () => {
        setShowedApps(apps)
    }

    const deleteApp = (e) => {
        const id = e.target.getAttribute('id');
        setShowedApps(showedApps.filter(app => 
            app.id !== +id,
            ));
            props.removeApp(e)
    }

    return (
        <div className='appointments'>
            <div className='appointments__apps'>
                <Link className='apps__top' to={'/'} target='_self'>
                    <img src={arrow} alt="arrow" />
                    <p className='top__title'>
                        Мои записи
                    </p>
                </Link>
                <div className='apps__docs'>
                    {showedApps.length === apps.length ?
                        null :
                        <p className='docs__showAll' onClick={showAllApps} >
                            Показать все записи
                        </p>
                    }

                    {showedApps.length > 0 ? 
                    showedApps.map(app =>
                        <CardDoc info={app} key={app.id} removeShowedApp={deleteApp}/>
                    ) :
                    <p className='docs__noApps'>
                        Нет активных записей
                    </p>                
                }
                </div>
            </div>
            <div className='appointments__calendar'>
                <Calendar
                    onClickDay={showDailyApps}
                />
            </div>
        </div>
    )
}