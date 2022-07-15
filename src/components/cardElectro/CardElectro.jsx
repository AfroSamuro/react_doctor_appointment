import './CardElectro.css'

export default function CardElectro(props) {
    const { title, description, list, logo } = props.data;

    return (
        <article className='electro__card'>
            <div className='card__logo'>
                <img src={logo} alt="" />
            </div>
            <div className='card__info'>
                <div className='info__title'>
                    {title}
                </div>
                <div className='info__desc'>
                    {description}
                </div>
                <div className='info__list'>
                    <ul className='list__roster'>
                        {list.map(para =>
                            <li className='roster__para'>
                                {para}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </article>
    )
}