import style from './text-group.module.css'

const TextGroup = ({ title, shortTile, detail, className }) => {

    return (
        <div className={className}>
            <h5>
                {shortTile &&
                    <span
                        className="me-4">
                        {shortTile}
                    </span>
                }
                <span className={style.line}></span></h5>
            <h2 className='fs-1'>{title}</h2>
            <p className="text-muted mt-5">{detail}</p>
        </div>
    )
}

export default TextGroup;