import { useState } from "react";
import useCourseStore from "../app/store";

const CourseForm = () => {
 const [courseTitle, setCourseTitle] = useState('');

 const addCourse = useCourseStore((state) => state.addCourse);
 
 function handleCourseSubmit() {

    if(!courseTitle) return alert('Pls, enter course title');
    addCourse({
        id: Math.ceil(Math.random()*100000),
        title: courseTitle
    })
    setCourseTitle('')
 }

  return (
    <form className="form-com=ntainer">
        <input 
        type="text"
        value={courseTitle}
        onChange={(e)=> setCourseTitle(e.target.value)}
        className="form-input"
         />
         <button 
         className="form-submit-btn"
         onClick={()=> handleCourseSubmit()}
         >
            Add Course
         </button>
    </form>
  )
}

export default CourseForm