import style from "./numbered-card.module.css"

const NumberedCard = ({ title, detail, number }) => {

    return (
        <div className={style.card}>
            <div className={style.badge}>{number}</div>
            <h5>{title}</h5>
            <p className="text-muted">{detail}</p>
        </div>
    )
}

export default NumberedCard;