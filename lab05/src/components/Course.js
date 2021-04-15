import Part from './Part'
import Header from './Header'
import Content from './Content'



function Course(props) {

    const total = props.course.parts.reduce((s, {exercises}) => s + exercises,0 )
    return (
        <div>
           <Header titulo={props.course.name}/>
           <Content partes={props.course.parts}/>
           <p>Total de los Exercises: {total}</p>
        </div>
    )
}

export default Course
