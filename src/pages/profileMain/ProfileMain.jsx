import CardElectro from '../../components/cardElectro/CardElectro'
import './ProfileMain.css'
import infoLogo from '../../images/report (2) 1.svg'
import resultLogo from '../../images/lab 1.svg'
import addLogo from '../../images/add (1) 1.svg'
import historyLogo from '../../images/clock 1.svg'
import CardDoc from '../../components/cardDoc/CardDoc'
import { Link } from 'react-router-dom'

export default function ProfileMain(props) {

    let electroCardData = [
        {
            logo: infoLogo,
            title: 'Информация о пациенте',
            description: 'Просмотрите интересующую вас информацию о своем здоровье',
            list: [
                'Ваши личные данные',
                'Рекомендации врачей',
                'История болезней'
            ],
        },
        {
            logo: resultLogo,
            title: 'Результаты анализов',
            description: 'Вы можете узнать здесь результаты своих анализов',
            list: [
                'Ваши личные данные',
                'Рекомендации врачей',
                'История болезней'
            ],
        },
        {
            logo: addLogo,
            title: 'Добавить  информацию',
            description: 'Добавляйте в свою электронную медицинскую карту новые данные',
            list: [
                'Ваши личные данные',
                'Рекомендации врачей',
                'История болезней'
            ],
        },
        {
            logo: historyLogo,
            title: 'История приемов',
            description: 'Вся информация о полученных услугах за все время хранится здесь',
            list: [
                'Ваши личные данные',
                'Рекомендации врачей',
                'История болезней'
            ],
        },
    ];


    return (
        <div className='main__info'>
            <section className='info__apps'>
                <p className='apps__title'>
                    Записи на прием
                </p>
                <div className='apps__cards'>
                    {props.apps.slice(0,2).map(app =>
                        <CardDoc info={app} />
                    )
                    }
                    {props.apps.length > 0 ?
                        <div className='cards__more'>
                            <p className='more__title'>
                                {
                                    props.apps.length < 3 ?
                                        `У вас ${props.apps.length} 
                                        ${props.apps.length < 2 ?
                                            'запись' :
                                            'записи'
                                        }`
                                        :
                                        `Еще ${props.apps.length - 2} 
                                    ${props.apps.length - 2 > 1 ?
                                            props.apps.length - 2 < 5 ?
                                                'записи' :
                                                'записей' :
                                            'запись'
                                        }`

                                }
                            </p>
                            <Link className='more__link' to={'/apps'} target='_self'>
                                Подробнее
                            </Link>
                        </div> :
                        <p className='cards__empty'>
                            Нет активных записей
                        </p>
                    }
                </div>
            </section>

            <section className='info__electro'>
                <p className='electro__title'>
                    Электронная карта
                </p>
                <div className='electro__cards'>
                    {
                        electroCardData.map(card =>
                            <CardElectro data={card} key={card.title} />
                        )
                    }
                </div>
            </section>
        </div>
    )
}