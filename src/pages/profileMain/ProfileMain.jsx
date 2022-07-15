import CardElectro from '../../components/cardElectro/CardElectro'
import './ProfileMain.css'
import infoLogo from '../../images/report (2) 1.svg'
import resultLogo from '../../images/lab 1.svg'
import addLogo from '../../images/add (1) 1.svg'
import historyLogo from '../../images/clock 1.svg'

export default function ProfileMain() {

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
            <article>
                <p>
                    Записи на прием
                </p>
                <div>

                </div>
            </article>

            <article className='info__electro'>
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
            </article>
        </div>
    )
}