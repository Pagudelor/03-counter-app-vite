import  PropTypes  from 'prop-types';

const newMessage= "paola";

const example1=()=>{
    return "example"
}
function example(){
    return "example2funcion de ejemplo2"
}
export const FirstApp =( {title, subTitle} )=>{
    return (
    <>
    <div data-testid="test-title">{title}</div>
    <p> { newMessage } </p>
    <h2>{subTitle}</h2>
    <p>{example()}</p>
    <h1>{example1()}</h1>
    <p>diojito</p>
    </>
    )
    }
FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
    subTitle:'hay hola soy el subtitulo',
    title: 'Hola soy el title'
}
