import './CardDoc.css'


export default function CardDoc(props) {

    const {
        date,
        time,
        location,
        docPhoto,
        docFio,
        docSpec
    } = props.info

    return (
        <article className='doc__card'>
            <div className='card__details'>
                <div className='details__date'>
                    <div className='date__day'>
                        {date} |&nbsp;
                    </div>
                    <div className='date__time'>
                        {time}
                    </div>
                </div>
                <div className='details__location'>
                    {location}
                </div>
                <div className='details__doc'>
                    <div className='doc__photo'>
                        <img src={docPhoto} alt="doc" />
                    </div>
                    <div className='doc__person'>
                        <div className='person__fio'>
                            {docFio}
                        </div>
                        <div className='person__spec'>
                            {docSpec}
                        </div>
                    </div>
                </div>
            </div>
            <div className='card__cancel'>
                <button className='cancel__button'>
                    Отменить
                </button>
            </div>

        </article>
    )
}