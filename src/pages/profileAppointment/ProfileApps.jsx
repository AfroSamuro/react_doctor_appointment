import CardDoc from '../../components/cardDoc/CardDoc'
import './ProfileApps.css'
import arrow from '../../images/arrow.svg'
import Calendar from 'react-calendar'
import '../../components/calendar/Calendar.css'
import { useState } from 'react'

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

    return (
        <div className='appointments'>
            <div className='appointments__apps'>
                <div className='apps__top'>
                    <img src={arrow} alt="arrow" />
                    <p className='top__title'>
                        Мои записи
                    </p>
                </div>
                <div className='apps__docs'>
                    {showedApps.length === apps.length ?
                        '' :
                        <p className='docs__showAll' onClick={showAllApps}>
                            Показать все записи
                        </p>
                    }

                    {showedApps.length > 0 ? 
                    showedApps.map(app =>
                        <CardDoc info={app} />
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