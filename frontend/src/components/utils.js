import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../apiConfig";

export function stringToColor(str) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    let color = "#"
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      color += ("00" + value.toString(16)).substr(-2)
    }
    return color
  }

export function  handleAddCourse (e, toggleModal) {
    e.preventDefault()
    // console.log(accountTypeSignUp) // Add this line
    const url = `${API_BASE_URL}/courses`
    console.log(url)
    const data = {
      ...formData,
      tutor_id: localStorage.getItem("userId"),
    }

    console.log("Here is the data being posted", data)
    axios
      .post(url, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        alert("An error has occured. Read more in the console")
        console.log(error)
      })

    // navigateTo(-1)
    toggleModal()
  }


// export const addCourseFormUtils = ({toggleModal, setFormData}) => {
//   const navigateTo = useNavigate();

//   const handleChange = (e, formData, setFormData) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleCourseTypeChoice = (e, formData, setFormData) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       course_type: e.target.value,
//     }));
//   };

//   const handleAddCourse = (e, formData, toggleModal) => {
//     e.preventDefault();
//     const url = `${API_BASE_URL}/courses`;
//     const data = {
//       ...formData,
//       tutor_id: localStorage.getItem("userId"),
//     };

//     console.log("Here is the data being posted", data);
//     axios
//       .post(url, data, {
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         alert("An error has occurred. Read more in the console");
//         console.log(error);
//       });

//     toggleModal();
//   };

//   const initializeFormData = () => {
//     return {
//       title: "",
//       category: "",
//       description: "",
//       course_type: "online",
//       duration: 0,
//       fee: 0,
//     };
//   };

//   return {
//     navigateTo,
//     handleChange,
//     handleCourseTypeChoice,
//     handleAddCourse,
//     initializeFormData,
//   };
// };


// useCourseForm.js

export const useCourseForm = (toggleModal) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    course_type: "online",
    duration: 0,
    fee: 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCourseTypeChoice = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      course_type: e.target.value,
    }))
  }

  const handleAddCourse = (e) => {
    e.preventDefault()
    const data = {
      ...formData,
      tutor_id: localStorage.getItem("userId"),
    }

    axios
      .post(`${API_BASE_URL}/courses`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        alert("An error has occurred. Read more in the console")
        console.log(error)
      })

    toggleModal()
  }

  const handleEditCourse = (e, course_id) => {
    e.preventDefault()
    const data = {
      ...formData,
    }

    const {id, updated_at, created_at, tutor, tutor_id, __class__, ...dataForPut}= data

    const url = `${API_BASE_URL}/courses/${course_id}`
    console.log("URL for PUT request", url)
    console.log("Data being sent", dataForPut)
    axios
      .put(url, dataForPut, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        alert("An error has occurred. Read more in the console")
        console.log(error)
      })

    toggleModal()
  }

  return { formData, setFormData, handleChange, handleCourseTypeChoice, handleAddCourse, handleEditCourse }
}


// export const useCourseDetails = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCourse, setSelectedCourse] = useState({});
//   const [editCourse, setEditCourse] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     // setSelectedCourse({});
//     setEditCourse(false);
//     setIsModalOpen(!isModalOpen);
//   };

//   const toggleEdit = () => {
//     setEditCourse(!editCourse);
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/courses`);
//       const coursesWithTutor = await Promise.all(
//         response.data.map(async (course) => {
//           const tutorResponse = await axios.get(
//             `${API_BASE_URL}/tutors/${course.tutor_id}`
//           );
//           return { ...course, tutor: tutorResponse.data };
//         })
//       );
//       setCourses(coursesWithTutor);
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return { isLoading: true, courses: [], selectedCourse, toggleModal, toggleEdit };
//   }

//   if (error) {
//     return { isLoading: false, courses: [], selectedCourse, toggleModal, toggleEdit, error: true };
//   }

//   return { isLoading: false, courses, selectedCourse, setSelectedCourse, toggleModal, toggleEdit, editCourse, isModalOpen };
// };

export const useFetchCourses = (student_id = null, tutor_id = null) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("data fetched again")
    let url
    try {
      if (!student_id && !tutor_id) {
        url =`${API_BASE_URL}/courses`
      } else if (student_id) {
        url =`${API_BASE_URL}/students/${student_id}/courses`
      } else if (tutor_id) {
          url =`${API_BASE_URL}/tutors/${tutor_id}/courses`
      }
      const response = await axios.get(url);
      const coursesWithTutor = await Promise.all(
        response.data.map(async (course) => {
          const tutorResponse = await axios.get(
            `${API_BASE_URL}/tutors/${course.tutor_id}`
          );
          return { ...course, tutor: tutorResponse.data };
        })
      );
      setCourses(coursesWithTutor);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);//Using courses as dependency array makes the request refresh and renders courses again, but it has a side effect, on the calendar

  return { isLoading: loading, courses, error };
};


export const useCourseDetails = () => {
  const [selectedCourse, setSelectedCourse] = useState({});
  const [editCourse, setEditCourse] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setEditCourse(false);
    setIsModalOpen(!isModalOpen);
  };

  const toggleEdit = () => {
    setEditCourse(!editCourse);
  };

  return { selectedCourse, setSelectedCourse, toggleModal, toggleEdit, editCourse, isModalOpen };
};



// export const isStudentRegistered = async (selectedCourse) => {
//   let idExists
//   useEffect(() => {
//     axios
//       .get(`${API_BASE_URL}/courses/${selectedCourse.id}/students`)
//       .then((response) => {
//         const studentsInCourse = response.data
//         idExists = studentsInCourse.some(
//           (student) => student.id === localStorage.getItem("userId")
//         )
//         // console.log(selectedCourse)
//       })
//   }, [])

//   return idExists
// }