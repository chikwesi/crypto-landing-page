
import { Container } from 'react-bootstrap';
import style from './frame.module.css';

const Frame = ({ children, className = ''}) => {
    return (
        <Container fluid className={`${className} ${style.frame}`}>
            {children}
        </Container>
    )
}

export default Frame;