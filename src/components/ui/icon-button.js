import { Button } from 'react-bootstrap';
import style from './icon-button.module.css'

const IconButton = ({ children, className = '' }) => {

    return (
        <Button size="lg" className={className}>
            {children}
            <img
                className="ms-2"
                width="20px"
                src='./right.png'
                alt="button" />
        </Button>
    )
}

export default IconButton;