import React, { useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BaseForm, GenerateComponents, InputField } from '../Primitives'
import { useNavigate } from 'react-router'


const UserProfile = () => {
  const navigateTo = useNavigate()
  const [user, setUser] = useState("student")
  const [editMode, setEditMode] = useState(false);
  const [initialValues, setinitialValues] = useState({
    first_name: "Peter",
    last_name: "Pan",
    email: "neverworld@dreams.com",
    phone_number: "123456789",
    city: "world",
    country: "Never ",
    password: "",

  })


  const [formData, setFormData] = useState(initialValues);

  const handleToggleEditMode = () => {

    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSignUp = (e) => {
    e.preventDefault()

    // editMode ? handleSubmit(e) : handleToggleEditMode(e)
    console.log(formData);
    console.log(`switching to ${editMode ? "view mode" : "edit mode"}`)
    setEditMode(!editMode);
    /*  console.log(formData) */
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData); // Log form data to console
    console.log(editMode)
    // You can perform any additional actions here, like making an API call to update user profile
    // After submission, you may want to switch back to view mode
    setEditMode(!editMode);
  };

 /*  const inputFieldData =
  {
    id: 'email',
    type: 'text',
    placeholder: 'Enter email',
    value: email,
    onChange: (e) => setEmail(e.target.value),
    name: 'email',
    defaultChecked: false,
  } *//* ,
    {
      label: 'New Username',
      id: 'username2',
      type: 'text',
      placeholder: 'Enter your username',

      name: 'username',
      defaultChecked: false,
    },
    // Add more input field data as needed
  ]; */
  const formFields = [
    {
      label: { label: 'First Name', className: 'font-[500]' },
      id: 'firstName',
      type: 'text',
      inputClasses: 'px-4 rounded-[8px] py-[4px] mb-[10px]',
      placeholder: '',
      name: "first_name",
      onChange: handleChange
    },
    {
      label: { label: 'Last Name', className: 'font-[500]' },
      id: 'lastName',
      type: 'text',
      inputClasses: 'px-4 rounded-[8px] py-[4px] ',
      placeholder: '',
      name: "last_name",
      onChange: handleChange
    },
    {
      label: { label: 'Email', className: 'font-[500]' },
      id: 'email',
      type: 'email',
      inputClasses: 'px-4 rounded-[8px] py-[4px] ',
      placeholder: 'Enter your email',
      name: "email",
      onChange: handleChange

    },
    {
      label: { label: 'Phone Number', className: 'font-[500]' },
      id: 'phoneNumber',
      type: 'tel',
      inputClasses: 'px-4 rounded-[8px] py-[4px] ',
      placeholder: '',
      name: "phone_number",
      onChange: handleChange

    },
    {
      label: { label: 'City', className: 'font-[500]' },
      id: 'city',
      type: 'text',
      inputClasses: 'px-4 rounded-[8px] py-[4px] ',
      placeholder: '',
      name: "city",
      onChange: handleChange

    },
    {
      label: { label: 'Country', className: 'font-[500]' },
      id: 'country',
      type: 'text',
      inputClasses: 'px-4 rounded-[8px] py-[4px] ',
      placeholder: '',
      name: "country",
      onChange: handleChange

    },
    {
      label: { label: 'Password', className: 'font-worksans font-[500]' },
      id: 'password',
      type: 'password',
      inputClasses: 'px-4 rounded-[8px] py-[4px] ',
      placeholder: '',
      name: "password",
      onChange: handleChange
    },
    {
      label: { label: 'Confirm Password', className: 'font-worksans font-[500]' },
      id: 'cpassword',
      type: 'password',
      inputClasses: 'px-4 rounded-[8px] py-[4px] ',
      placeholder: 'Confirm Password',
    },
    // Add more form fields as needed
  ]

  const SignUpProps = {
    formClasses: 'grid grid-cols-2 mx-auto bg-green-600 gap-x-3 gap-y-5 p-2',
    /*    title: {
         className: 'text-[40px] font-roboto font-bold text-center',
         label: 'Join Us!',
       }, */
    /*    subtitle: {
         className: ' text-center mb-4 font-[500]',
         label: 'You are signing in as a',
       }, */
    handleFormSubmit: handleSignUp,
    formFields: [
      {
        label: { label: 'First Name', className: 'font-[500]' },
        id: 'firstName',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] mb-[10px]',
        placeholder: '',
        name: 'first_name',
        value: formData.first_name,
        disabled: !editMode, // Disable input fields when not in edit mode
        onChange: handleChange,
      },
      {
        label: { label: 'Last Name', className: 'font-[500]' },
        id: 'lastName',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px]',
        placeholder: '',
        name: 'last_name',
        value: formData.last_name,
        disabled: !editMode, // Disable input fields when not in edit mode
        onChange: handleChange,
      },
      {
        label: { label: 'Email', className: 'font-[500]' },
        id: 'email',
        type: 'email',
        inputClasses: 'px-4 rounded-[8px] py-[4px] ',
        containerClasses: 'col-span-2 ',
        placeholder: 'Enter your email',
        name: 'email',
        value: formData.email,
        disabled: !editMode, // Disable input fields when not in edit mode
        onChange: handleChange,
      },
      {
        label: { label: 'Phone Number', className: 'font-[500]' },
        id: 'phoneNumber',
        type: 'tel',
        inputClasses: 'px-4 rounded-[8px] py-[4px]',
        containerClasses: 'col-span-2 ',
        placeholder: '',
        name: 'phone_number',
        value: formData.phone_number,
        disabled: !editMode, // Disable input fields when not in edit mode
        onChange: handleChange,
      },
      {
        label: { label: 'Country', className: 'font-[500]' },
        id: 'country',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px] col-span-2',
        placeholder: '',
        name: 'country',
        value: formData.country,
        disabled: !editMode, // Disable input fields when not in edit mode
        onChange: handleChange,
      },
      {
        label: { label: 'City', className: 'font-[500]' },
        id: 'city',
        type: 'text',
        inputClasses: 'px-4 rounded-[8px] py-[4px]',
        placeholder: '',
        name: 'city',
        value: formData.city,
        disabled: !editMode, // Disable input fields when not in edit mode
        onChange: handleChange,
      },

    ],


    /*    formFields: [
         {
           label: { label: 'First Name', className: 'font-[500]' },
           id: 'firstName',
           type: 'text',
           inputClasses: 'px-4 rounded-[8px] py-[4px] mb-[10px]',
           placeholder: '',
           name: "first_name",
           value: editMode ? formData.first_name : initialValues.first_name,
           onChange: handleChange
         },
         {
           label: { label: 'Last Name', className: 'font-[500]' },
           id: 'lastName',
           type: 'text',
           inputClasses: 'px-4 rounded-[8px] py-[4px] ',
           placeholder: '',
           name: "last_name",
           onChange: handleChange
         },
         {
           label: { label: 'Email', className: 'font-[500]' },
           id: 'email',
           type: 'email',
           inputClasses: 'px-4 rounded-[8px] py-[4px] ',
           placeholder: 'Enter your email',
           name: "email",
           onChange: handleChange
   
         },
         {
           label: { label: 'Phone Number', className: 'font-[500]' },
           id: 'phoneNumber',
           type: 'tel',
           inputClasses: 'px-4 rounded-[8px] py-[4px] ',
           placeholder: '',
           name: "phone_number",
           onChange: handleChange
   
         },
         {
           label: { label: 'City', className: 'font-[500]' },
           id: 'city',
           type: 'text',
           inputClasses: 'px-4 rounded-[8px] py-[4px] ',
           placeholder: '',
           name: "city",
           onChange: handleChange
   
         },
         {
           label: { label: 'Country', className: 'font-[500]' },
           id: 'country',
           type: 'text',
           inputClasses: 'px-4 rounded-[8px] py-[4px] ',
           placeholder: '',
           name: "country",
           onChange: handleChange
   
         },
          {
            label: { label: 'Password', className: 'font-worksans font-[500]' },
            id: 'password',
            type: 'password',
            inputClasses: 'px-4 rounded-[8px] py-[4px] ',
            placeholder: '',
            name: "password",
            onChange: handleChange
          },
          {
            label: { label: 'Confirm Password', className: 'font-worksans font-[500]' },
            id: 'cpassword',
            type: 'password',
            inputClasses: 'px-4 rounded-[8px] py-[4px] ',
            placeholder: 'Confirm Password',
          }, 
         // Add more form fields as needed
       ],
    */
    formButton: {
      id: 'submit-btn',
      className: ' font-worksans bg-blue-600 text-white px-[24px] py-[8px] rounded-[8px] font-[500] col-span-2',
      label: editMode ? 'SAVE' : 'EDIT',

    }


  };
  if (setFormData) {
    useEffect(() => {
      if (editMode) {
        setFormData(initialValues)
      }
    }, [editMode, initialValues])
  }

  return (
    <div className='mx-auto w-1/2'>
      <h2 className='text-3xl text-center mx-auto dark:text-slate-200'>Profile</h2>
      <AiOutlineUser
        size={32}
        className="w-20 h-20  rounded-full border mx-auto mb-4 border-slate-700 group-hover:border-slate-200 "
      />


      {/* <form className='grid grid-cols-4 bg-green-600' onSubmit={handleSignUp}>
        <GenerateComponents componentType={InputField} data={formFields} />
      </form> */}
      <BaseForm{...SignUpProps} />






      {/* <label className=" relative block w-1/2 m-auto" onSubmit={(e) => e.preventDefault()}>
        <span className="sr-only">Search</span>

        <InputField {...inputFieldData} />
      </label > */}






    </div>
  )
}

export default UserProfile
