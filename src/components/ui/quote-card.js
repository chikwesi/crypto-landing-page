import style from "./quote-card.module.css"

const QuoteCard = ({ title, detail, number }) => {

    return (
        <div className={style.card}>
            <span className={`${style.quote} text-muted`}>
                "
            </span>
            <p className={style.quoteText}>

                Everv now and then.
                something comes along to make you realise how
                poorly designed everything
                is. Turnev one of the most intentionally deisgned products i have seen
            </p>
            <div className='d-flex align-items-center mt-3'>
                <div className="me-4 text-center">
                    <img
                        className={style.image}
                        src='/testimonial-image-1.jpeg'
                        alt="man smiling" />
                    <div className={style.ring}></div>
                </div>

                <div>
                    <p className="fw-bold m-0 p-0">Javed N</p>
                    <span className="text-muted">BTC Holder</span>
                </div>
            </div>
        </div>
    )
}

export default QuoteCard;