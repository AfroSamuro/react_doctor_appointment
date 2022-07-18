import './CardDoc.css'


export default function CardDoc(props) {

    const {
        id,
        date,
        time,
        location,
        docPhoto,
        docFio,
        docSpec
    } = props.info

    const {removeShowedApp} = props


    return (
        <article className='doc__card' id={id}>
            <div className='card__details'>
                <div className='details__date'>
                    <div className='date__day'>
                        {date.slice(0, 6) + date.slice(-2)} |&nbsp;
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
            <div className='card__cancel' >
                <button className='cancel__button' onClick={removeShowedApp} id={id}>
                    Отменить
                </button>
            </div>

        </article>
    )
}