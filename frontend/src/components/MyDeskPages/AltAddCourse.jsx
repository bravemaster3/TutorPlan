import React, { useEffect, useRef, useState } from 'react'
import { BaseForm, GenerateComponents, InputField2, RadioOptions, TempForm } from '../Primitives';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth'
import axios from '../../apiConfig'
import useFormContext from '../../hooks/useFormContext';
import useFormCoursesContext from '../../hooks/useFormCoursesContext';

const AddCourse = ({ courseData }) => {
  const errRef = useRef();
  const titleRef = useRef();

  const { isTutor } = useAuth();
  const { data, setData } = useFormCoursesContext();
  const { currentFormData, setCurrentFormData, handleChange, editMode, setEditMode } = useFormContext()
  //  console.log("In add course the edit mode is:", editMode)



  const [errMsg, setErrMsg] = useState('');
  const [numWords, setNumWords] = useState(0);
  const [validDescription, setValidDescription] = useState(false);

  //const initialValues = data;
  //console.log(initialValues)
  //console.log("Current course type is>>>",data.course_type)
  /*   const initialValues = {
      title: '',
      category: '',
      academic_level: '',
      course_type: 'online',
      duration: null,
      fee: null,
      description: ''
    } */


  useEffect(() => {
    setCurrentFormData(data);
    if (editMode) {
      titleRef.current.focus();      
    }


    //initializeForm()
    /*     if (courseData) {
          setCurrentFormData(data);
          console.log("using course data")
    
        }
        else {
          setCurrentFormData(initialValues);
          console.log("using default values")
        } */


  }, [])

  //console.log("form data>>>", currentFormData)
  useEffect(() => {
    setErrMsg('');
  }, [currentFormData])

  useEffect(() => {
    const words = (currentFormData.description ? currentFormData.description.trim().split(' ').length : 0)
    setNumWords(words)
    setValidDescription(words >= 150);
  }, [currentFormData.description])
  /*   const handleChange = (e) => {
      const type = e.target.type;
      const name = e.target.name;
      const value = type === 'checkbox' ? e.target.checked : e.target.value;
  
      setCurrentFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }; */

  const radioGroup = {
    className: ` ${editMode ? ' font-[500] ' : ' font-[600] '} `,
    label: ` ${editMode ? ' How will you conduct your lessons? ' : ' Your lessons will be: '} `,
    optionsClassName: ' flex gap-4 justify-center mt-1 ',
    options: [
      {
        id: 'online',
        label: 'Online',
        name: 'course_type',
        value: 'online',
        checked: currentFormData.course_type === 'online',
        onChange: handleChange
      },
      {
        id: 'physical',
        label: 'In Person (Physical)',
        name: 'course_type',
        value: 'physical',
        onChange: handleChange,
        checked: currentFormData.course_type === 'physical',
      },
      {
        id: 'both',
        label: 'Both',
        name: 'course_type',
        value: 'both',
        onChange: handleChange,
        checked: currentFormData.course_type === 'both',
      },
    ]
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted", currentFormData)
    setEditMode(false)
    /* const v1 = numWords <= 0;
    const v2 = duration >= 20;
    if (!v1 || !v2) {
      console.log(v1, v2);
      setErrMsg(" Fill out the fields correctly - Missing Fields ");
      return;
    } */
    //const tutor_id = auth.userData.id
    //console.log(auth.userData.id, title, category, duration, description, fee, course_type)
    /* try {
      const response = await axios.post('/courses', JSON.stringify({ tutor_id, title, category, duration, description, fee, course_type }),
        {
          headers: { 'Content-Type': 'application/json' }
  
        });
      console.log(JSON.stringify(response?.data));
  
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 404) {
        setErrMsg('wrong user');
      } else {
        setErrMsg('Missing Data')
      }
      errRef.current.focus();
  
    } */
  }
  return (
    <>


      <section > {/* section className='flex font-worksans w-3/4 flex-col border bg-slate-400 border-slate-700 mx-auto justify-center  p-8 rounded-md gap-2' */}
        {/* <p ref={errRef} className={errMsg ? "text-red-500 block font-bold text-3xl text-center" : "sr-only"} aria-live="assertive">{errMsg}</p> */}


        <TempForm
          children={<>
            <p ref={errRef} className={errMsg ? "text-red-500 block font-bold text-2xl text-center" : "sr-only"} aria-live="assertive">{errMsg}</p>
            <h1 className='text-center text-[40px] hidden font-bold font-roboto mb-1'>
              {isTutor ?
                editMode ? 'You are editing a course!' : 'Add course'
                : 'Course Details'}
            </h1>


            <div className={`${editMode? 'flex gap-2':' flex flex-col'}`}>
              <InputField2
                type="text"
                name='title'
                id="title"
                label={{ label: "Course Name", className: "  text-nowrap font-sky-500" }}
                myRef={titleRef}
                autoComplete="off"
                onChange={handleChange}
                required
                disabled={!editMode}
                maxLength='55'
                value={currentFormData.title}
                placeholder="e.g. Yoga"
              />
              <InputField2
                type="text"
                id="category"
                name='category'
                label={{ label: "Category", className: "  text-nowrap font-sky-500" }}
                onChange={handleChange}
                required
                disabled={!editMode}
                pattern='^[A-Za-z]+$'
                value={currentFormData.category}
                placeholder='e.g. Wellness'
              />
            </div>

            <div className={`${editMode ? 'flex gap-2' : ' flex flex-col'}`}>


              <InputField2
                type="number"
                id="duration"
                name='duration'
                label={{ label: `Duration${editMode ? '(min) ' : ''} `, className: " text-nowrap  font-sky-500" }}
                autoComplete="off"
                onChange={handleChange}
                required
                disabled={!editMode}
                min="20"
                title='A session should be 20 mins or more'
                value={currentFormData.duration}
                placeholder='20'
              />

              <InputField2
                type={"number"}
                id="fee"
                name='fee'
                label={{ label: `Fee ${editMode ? '($) ' : ''}`, className: "  text-nowrap font-sky-500 " }}
                autoComplete="off"
                onChange={handleChange}
                disabled={!editMode}
                required
                value={currentFormData.fee}
                placeholder='50'
              />
            </div>


            <fieldset className={`${editMode ? '' : ' text-slate-300 '}`}>

              <label htmlFor="description" className={`text-nowrap  ${editMode ? '  font-[500] block ' : ' font-[600] block '} `}>
                Description{editMode ? ' (150 words minimum) ' : ':'}
              </label>

              {editMode ? (
                <>
                  <textarea
                    className={`my-auto h-80 resize-none w-full rounded-md focus:outline-none ${validDescription ? ' focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ' : '  text-red-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 '} disabled:ml-2 p-2`}
                    name="description"
                    id="decription"
                    placeholder='Provide a description of your course'
                    value={currentFormData.description}
                    required
                    onChange={handleChange}>
                  </textarea>

                  <span className='block text-right '>
                    {numWords}/150
                  </span>
                </>) : (
                <span>
                  {" "} {currentFormData.description}
                </span>)}
            </fieldset>

            {!editMode && (<hr /* className='w-3/4 mx-auto' */ />)}

            {radioGroup && (
              <fieldset className={`  ${editMode ? '' : ' flex gap-1 text-slate-300  '} `}>
                <label className={`${radioGroup.className} `}>
                  {radioGroup.label}
                </label>

                {editMode ? (
                  <div className={radioGroup.optionsClassName}>
                    <GenerateComponents componentType={RadioOptions} data={radioGroup.options} />
                  </div>) : (
                  <span className=''>
                    {currentFormData.course_type === 'both' ? 'Online and in person' : currentFormData.course_type}
                  </span>)}

              </fieldset>
            )}

            {isTutor && <button onClick={handleSubmit} className='bg-blue-800 block p-2 mx-auto  mt-3 disabled:bg-zinc-600 text-slate-200' >Add</button>}


          </>
          } />
        {/* :
          (<TempForm
            children=
            {<>
              <p>{currentFormData.title}</p>
              <p>{currentFormData.category}</p>
              <p>{currentFormData.duration}</p>
              <p>{currentFormData.fee}</p>
              <p>{currentFormData.description}</p>
              <p>{currentFormData.course_type}</p>
            </>}
          />) */}


      </section>

    </>
  )

}
export default AddCourse
