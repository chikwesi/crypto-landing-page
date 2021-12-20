import style from './icon-button-round.module.css'

const IconButtonRound = ({ icon, className, variant}) => {

    return (
        <button className={`${variant ? style.outline : style.primary} ${className}`}>
           {icon}
        </button>
    )
}

export default IconButtonRound;