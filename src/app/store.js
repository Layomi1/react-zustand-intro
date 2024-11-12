import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },

  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  // toggleCourseStatus: (courseId) => {
  //   set((state) => ({
  //     courses: state.courses.map((course) =>
  //       course.id === courseId
  //         ? { ...course, completed: !course.completed }
  //         : course
  //     ),
  //   }));
  // },
  toggleCourseStatus: (courseId) => {
    set((state) => {
     const updatedCourses= state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      );
      if(JSON.stringify(state.courses) !== JSON.stringify(updatedCourses)){
        return {courses: updatedCourses}
      }
      return state;
    });
  },
});

const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "courses",
      intialState: { course: [] },
    })
  )
);

export default useCourseStore;
