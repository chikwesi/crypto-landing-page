import style from "./padded-outline.module.css"

const PaddedOutline = ({ children, className }) => {

    return (
        <div className={`${className || ''} ${style.outline}`}>
            {children}
        </div>
    )
}

export default PaddedOutline;