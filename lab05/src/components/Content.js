import Part from './Part'
import Header from './Header'

function Content(props) {
    return (
        <div>
            {props.partes.map((parte,index)=> <Part partes={parte} key={index}/>)}  
        </div>
    )
}

export default Content

