import './AsideMenu.css'
import logo from '../../images/logo.svg'
import hearth from '../../images/heart (2) 1.svg'
import stethoscope from '../../images/Vector.svg'
import speak from '../../images/speak 1.svg'
import test from '../../images/test 1.svg'
import book from '../../images/book 1.svg'
import help from '../../images/help 1.svg'

export default function AsideMenu() {

    return (
        <aside className='aside__menu'>
            <nav className='menu__nav'>
                <div className='nav__logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='nav__profile' >
                    <div className='profile__img'>
                        <img src={hearth} alt="" />
                    </div>
                    <p className='profile__text'>
                        Профиль
                    </p>
                </div>
                <div className='nav__docs'>
                    <div className='docs__img'>
                        <img src={stethoscope} alt="" />
                    </div>
                    <p className='docs__text'>
                        Врачи и клиники
                    </p>
                </div>
                <div className='nav__messages'>
                    <div className='messages__img'>
                        <img src={speak} alt="" />
                    </div>
                    <p className='messages__text'>
                        Сообщения
                    </p>
                </div>
                <div className='nav__tests'>
                    <div className='tests__img'>
                        <img src={test} alt="" />
                    </div>
                    <p className='tests__text'>
                        Тестирование
                    </p>
                </div>
                <div className='nav__gtk'>
                    <div className='gtk__img'>
                        <img src={book} alt="" />
                    </div>
                    <p className='gtk__text'>
                        Полезно знать
                    </p>
                </div>
                <button className='nav__request'>
                    Подать заявку
                </button>
            </nav>

            <div className='menu__bottom'>
                <div className='bottom__help'>
                    <div className='help__img'>
                        <img src={help} alt="" />
                    </div>
                    <p className='help__text'>
                        Помощь
                    </p>
                </div>
                <div className='bottom__logo'>
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </aside>
    )
}