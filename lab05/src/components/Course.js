import Part from './Part'
import Header from './Header'
import Content from './Content'

function Course(props) {
    return (
        <div>
           <Header titulo={props.course.name}/>
           <Content partes={props.course.parts}/>
        </div>
    )
}

export default Course
