
const Caret = ({angle = ''}) => {

    return (
        <img src={`./caret-${angle}.png`} width="20px" alt="caret"/>
    )
}

export default Caret;