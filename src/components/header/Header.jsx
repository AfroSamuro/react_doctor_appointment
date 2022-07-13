import './Header.css'
import glass from '../../images/search.svg'
import bell from '../../images/bell 1.svg'
import eye from '../../images/eye 1.svg'
import profile from '../../images/profile.svg'
import uncover from '../../images/uncover.svg'


export default function Header() {


    return (
        <header className='header'>
            <p className='header__title'>
                Мой профиль
            </p>
            <div className='header__func'>
                <div className='func__glass'>
                    <img src={glass} alt="" />
                </div>
                <div className='func__bell'>
                    <img src={bell} alt="" />
                </div>
                <div className='func__eye'>
                    <img src={eye} alt="" />
                </div>
                <div className='func__profile'>
                    <img src={profile} alt="" />
                </div>
                <div className='func__uncover'>
                    <img src={uncover} alt="" />
                </div>
            </div>
        </header>
    )
}