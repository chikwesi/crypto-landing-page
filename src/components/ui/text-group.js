import style from './text-group.module.css'

const TextGroup = ({ title, shortTitle,  subTitle, detail, className }) => {

    return (
        <div className={className}>
            <h5>
                {shortTitle &&
                    <span
                        className="me-4">
                        {shortTitle}
                    </span>
                }
                <span className={style.line}></span></h5>
            <h2 className='fs-1'>{title}</h2>
            <p>{subTitle}</p>
            <p className="text-muted mt-5">{detail}</p>
        </div>
    )
}

export default TextGroup;