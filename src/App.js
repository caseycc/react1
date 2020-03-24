import React from 'react'
import courseData from './courseData'
import CourseItem from './CourseItem'
import './App.css';

function App() {
  const courses = courseData.map(item => <CourseItem key={item.id} item={item}/>)
  
  return (
      <div className="tech-list">
          {courses}
      </div>
  )
}


export default App;
