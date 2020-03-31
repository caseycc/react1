import React from 'react'
import courseData from './courseData'
import CourseItem from './CourseItem'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      courses: courseData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const newCourses = prevState.courses.map(course => {
        if(course.id === id){
          return{
            ...course,
            essential: !course.essential
          }
        }
        return course
      })
      return{
        courses: newCourses
      }
    })
  }

  render(){
    const courses = this.state.courses.map(item => <CourseItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return(

      <div className="tech-list">
          {courses}
      </div>
    )
  }
}

export default App;
