import style from './icon-button.module.css'

const IconButton = ({ icon, className, variant}) => {

    return (
        <button className={`${variant ? style.outline : style.primary} ${className}`}>
           {icon}
        </button>
    )
}

export default IconButton;