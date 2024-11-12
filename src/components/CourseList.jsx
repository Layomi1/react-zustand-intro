import React, { Fragment } from "react";
import useCourseStore from "../app/store";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    }),

    (prev, next) => {
      console.log("Prev courses:", prev.courses);
      console.log("Next courses:", next.courses);
      return prev.courses === next.courses;
    }
  );

  return (
    <ul>
      {courses.map((course) => (
        <Fragment key={course.id}> 
          <li
            className="course-item"
            style={{ backgroundColor: course.completed ? "#00ff0044" : "#fff" }}
          >
            <span className="course-col-1">
              <input
                type="checkbox"
                checked={course.completed}
                onChange={() => toggleCourseStatus(course.id)} 
              />
            </span>
            <span>{course?.title}</span>
            <button
              onClick={() => removeCourse(course.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default CourseList;
