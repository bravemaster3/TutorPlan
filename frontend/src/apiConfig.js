import axios from 'axios';

//const { auth, isTutor } = useAuth();
export const coursesUrlEndpoint = '/courses'
//const userUrlEndpoint = `/${auth.roles}s/${auth.userData.id}`

export default axios.create({
  //baseURL: 'http://localhost:5000/api/v1'
  baseURL: 'https://tutorplan-3.onrender.com/api/v1'
});
const tutorplanApi = axios.create({
  /*  baseURL: 'http://localhost:5000/api/v1' */
  baseURL: 'https://tutorplan-3.onrender.com/api/v1',
})


export const getCourses = async (role, userId, userData, isTutor = false) => {
  //Add
  //let coursesUrl;

  //Remove
  let coursesWithTutorDetails;

  if (role && userId) {
    //Add
    //coursesUrl = `${role}/${userId}` + coursesUrlEndpoint;

    //Remove
     coursesWithTutorDetails = [
      {
        academic_level: null,
        browser: false,
        category: 'Fitness',
        course_type: 'online',
        created_at: '2024-04-06T15:48:57',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur error delectus blanditiis voluptates ducimus, officia aperiam reiciendis ipsa illum eius consequatur dignissimos facere repellendus officiis minima aliquid, quae maxime! Ex, amet sunt quam quod aliquam nesciunt nam, optio dignissimos quos dolorum nulla temporibus ullam quasi, possimus expedita fugit aspernatur quas! Nostrum hic inventore omnis quaerat nam similique at quo dolores iure tempore explicabo cupiditate sunt sit quasi voluptas numquam odio, accusantium consequatur, vero laborum rem ipsa ullam! Accusamus, ducimus illum molestias enim voluptates reiciendis nisi exercitationem magni sed quae eveniet in corporis! Ducimus provident, nobis ab nostrum sunt consectetur suscipit inventore, expedita, rem ex quo? Sequi ratione atque deleniti laborum placeat totam quis corrupti voluptatibus iste quae? Itaque suscipit voluptatibus, ipsa id nobis cupiditate nam praesentium numquam distinctio voluptatem est fugiat officia iure neque molestiae cu',
        duration: 120,
        fee: 80,
        id: '076d7788-a9a8-4714-b443-c51f3a27d00d',
        title: 'Goat Yoga',
        tutor: {
          bio: 'Enthusiastic software engineer',
          city: 'Nairobi',
          country: 'Kenya',
          created_at: '2024-03-25T01:26:02',
          email: 'ptest@gmail.com',
          first_name: 'Patience',
          id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
          last_name: 'Otuke',
          phone_number: '0987654321',
          updated_at: '2024-04-03T15:06:18',
          __class__: 'Tutor',
        },
        tutor_id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
        updated_at: '2024-04-07T01:34:06',
        __class__: 'Course',
      },
      {
        academic_level: null,
        browser: false,
        category: 'fitness',
        course_type: 'physical',
        created_at: '2024-04-02T13:17:16',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor corporis tempora adipisci consequuntur, in harum totam fugiat veniam sed dolores, rerum sit eius accusantium commodi, eaque blanditiis tenetur dicta alias officiis id! Est aperiam veritatis ab modi corporis sunt, tenetur laborum quisquam quidem, labore, laboriosam et doloremque eum voluptas saepe facilis eaque repudiandae. Cum nisi, vel sed cumque illo laudantium facilis eaque necessitatibus est sunt dolorum quos omnis nesciunt molestias recusandae praesentium culpa, ad ducimus laboriosam facere repellat voluptatem tempore! Ratione, porro amet ipsa incidunt beatae facere dignissimos nobis laborum minima velit corrupti corporis aliquid ad sit totam, fugit placeat ab cum ea debitis est magnam rerum. Quia veritatis quae tenetur earum voluptate modi eligendi hic quaerat suscipit amet quidem harum ducimus mollitia quam, expedita, aut velit eos impedit soluta provident nesciunt, accusamus tempore sint cumque. Provident, quidem voluptatum? Praesentium, ',
        duration: 120,
        fee: 200,
        id: '29051cb5-3f78-44b4-bbf1-aab3dce101cf',
        title: ' Physical Yoga',
        tutor: {
          bio: 'Enthusiastic software engineer',
          city: 'Nairobi',
          country: 'Kenya',
          created_at: '2024-03-25T01:26:02',
          email: 'ptest@gmail.com',
          first_name: 'Patience',
          id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
          last_name: 'Otuke',
          phone_number: '0987654321',
          updated_at: '2024-04-03T15:06:18',
          __class__: 'Tutor',
        },
        tutor_id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
        updated_at: '2024-03-25T05:49:27',
        __class__: 'Course',
      },
      {
        academic_level: null,
        browser: false,
        category: 'Wellness',
        course_type: 'online',
        created_at: '2024-05-06T08:57:00',
        description: "Calm yourself by embracing nature's beauty and gold",
        duration: 30,
        fee: 70,
        id: '75b0b291-1412-4263-a5b1-f152e5589b27',
        title: 'Floral Yoga',
        tutor: {
          bio: 'Enthusiastic software engineer',
          city: 'Nairobi',
          country: 'Kenya',
          created_at: '2024-03-25T01:26:02',
          email: 'ptest@gmail.com',
          first_name: 'Patience',
          id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
          last_name: 'Otuke',
          phone_number: '0987654321',
          updated_at: '2024-04-03T15:06:18',
          __class__: 'Tutor',
        },
        tutor_id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
        updated_at: '2024-03-25T05:49:27',
        __class__: 'Course',
      },
      {
        academic_level: null,
        browser: false,

        category: 'Fitness',
        course_type: 'both',
        created_at: '2024-03-26T16:04:39',
        description:
          'What is better than some exercice after work? Register for this course to practice some relaxing exercices, for a deep sleep night.',
        duration: 60,
        fee: 10,
        id: '8a31bb63-d82b-412d-9f72-53f56146aaea',
        title: 'Pilates',
        tutor: {
          bio: 'Enthusiastic software engineer',
          city: 'Nairobi',
          country: 'Kenya',
          created_at: '2024-03-25T01:26:02',
          email: 'ptest@gmail.com',
          first_name: 'Patience',
          id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
          last_name: 'Otuke',
          phone_number: '0987654321',
          updated_at: '2024-04-03T15:06:18',
          __class__: 'Tutor',
        },
        tutor_id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
        updated_at: '2024-03-25T05:49:27',
        __class__: 'Course',
      },
    ]; 
 
    //console.log("I have a role")
  } else {
    //Add
    //coursesUrl = coursesUrlEndpoint;

    //Remove
     coursesWithTutorDetails = [
      {
        academic_level: null,
        browser: true,
        category: 'Fitness',
        course_type: 'both',
        created_at: '2024-04-06T15:48:57',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur error delectus blanditiis voluptates ducimus, officia aperiam reiciendis ipsa illum eius consequatur dignissimos facere repellendus officiis minima aliquid, quae maxime! Ex, amet sunt quam quod aliquam nesciunt nam, optio dignissimos quos dolorum nulla temporibus ullam quasi, possimus expedita fugit aspernatur quas! Nostrum hic inventore omnis quaerat nam similique at quo dolores iure tempore explicabo cupiditate sunt sit quasi voluptas numquam odio, accusantium consequatur, vero laborum rem ipsa ullam! Accusamus, ducimus illum molestias enim voluptates reiciendis nisi exercitationem magni sed quae eveniet in corporis! Ducimus provident, nobis ab nostrum sunt consectetur suscipit inventore, expedita, rem ex quo? Sequi ratione atque deleniti laborum placeat totam quis corrupti voluptatibus iste quae? Itaque suscipit voluptatibus, ipsa id nobis cupiditate nam praesentium numquam distinctio voluptatem est fugiat officia iure neque molestiae cu',
        duration: 120,
        fee: 80,
        id: '076d7788-a9a8-4714-b443-c51f3a27d00d',
        title: 'Goat Yoga',
        tutor: {
          bio: 'Enthusiastic software engineer',
          city: 'Nairobi',
          country: 'Kenya',
          created_at: '2024-03-25T01:26:02',
          email: 'ptest@gmail.com',
          first_name: 'Patience',
          id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
          last_name: 'Otuke',
          phone_number: '0987654321',
          updated_at: '2024-04-03T15:06:18',
          __class__: 'Tutor',
        },
        tutor_id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
        updated_at: '2024-04-07T01:34:06',
        __class__: 'Course',
      },

      {
        academic_level: null,
        browser: true,
        category: 'Music',
        course_type: 'both',
        created_at: '2024-03-24T17:40:48',
        description:
          "I will help you learn piano for worship. My method is no magic. It is based on consistency and simplification of complex stuff. I promise you will get from beginner's level to advanced level if you follow my guide.",
        duration: 60,
        fee: 15,
        id: '2675a3e3-b86d-44e0-963e-ed71532b13c1',
        title: 'Piano for beginners',
        tutor: {
          bio: null,
          city: 'Umeå',
          country: 'Sweden',
          created_at: '2024-03-25T05:49:27',
          email: 'bravemaster102@gmail.com',
          first_name: 'Koffi Dodji',
          id: '4a05b7a2-1131-4293-b25f-beaf9e70ca1f',
          last_name: 'Noumonvi',
          phone_number: '+46730382216',
          updated_at: '2024-03-24T17:38:47',
          __class__: 'Tutor',
        },
        tutor_id: '4a05b7a2-1131-4293-b25f-beaf9e70ca1f',
        updated_at: '2024-03-25T05:49:27',
        __class__: 'Course',
      },
      {
        academic_level: null,
        browser: true,
        category: 'fitness',
        course_type: 'online',
        created_at: '2024-04-02T13:17:16',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor corporis tempora adipisci consequuntur, in harum totam fugiat veniam sed dolores, rerum sit eius accusantium commodi, eaque blanditiis tenetur dicta alias officiis id! Est aperiam veritatis ab modi corporis sunt, tenetur laborum quisquam quidem, labore, laboriosam et doloremque eum voluptas saepe facilis eaque repudiandae. Cum nisi, vel sed cumque illo laudantium facilis eaque necessitatibus est sunt dolorum quos omnis nesciunt molestias recusandae praesentium culpa, ad ducimus laboriosam facere repellat voluptatem tempore! Ratione, porro amet ipsa incidunt beatae facere dignissimos nobis laborum minima velit corrupti corporis aliquid ad sit totam, fugit placeat ab cum ea debitis est magnam rerum. Quia veritatis quae tenetur earum voluptate modi eligendi hic quaerat suscipit amet quidem harum ducimus mollitia quam, expedita, aut velit eos impedit soluta provident nesciunt, accusamus tempore sint cumque. Provident, quidem voluptatum? Praesentium, ',
        duration: 120,
        fee: 200,
        id: '29051cb5-3f78-44b4-bbf1-aab3dce101cf',
        title: "Yoga",
        tutor: {
          bio: 'Enthusiastic software engineer',
          city: 'Nairobi',
          country: 'Kenya',
          created_at: '2024-03-25T01:26:02',
          email: 'ptest@gmail.com',
          first_name: 'Patience',
          id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
          last_name: 'Otuke',
          phone_number: '0987654321',
          updated_at: '2024-04-03T15:06:18',
          __class__: 'Tutor',
        },
        tutor_id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
        updated_at: '2024-03-25T05:49:27',
        __class__: 'Course',
      },

      {
        academic_level: null,
        browser: true,
        category: 'Wellness',
        course_type: 'online',
        created_at: '2024-05-06T08:57:00',
        description: "Calm yourself by embracing nature's beauty and gold",
        duration: 30,
        fee: 70,
        id: '75b0b291-1412-4263-a5b1-f152e5589b27',
        title: 'Floral Yoga',
        tutor: {
          bio: 'Enthusiastic software engineer',
          city: 'Nairobi',
          country: 'Kenya',
          created_at: '2024-03-25T01:26:02',
          email: 'ptest@gmail.com',
          first_name: 'Patience',
          id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
          last_name: 'Otuke',
          phone_number: '0987654321',
          updated_at: '2024-04-03T15:06:18',
          __class__: 'Tutor',
        },
        tutor_id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
        updated_at: '2024-03-25T05:49:27',
        __class__: 'Course',
      },

      {
        academic_level: null,
        browser: true,
        category: 'Fitness',
        course_type: 'physical',
        created_at: '2024-03-26T16:04:39',
        description:
          'What is better than some exercice after work? Register for this course to practice some relaxing exercices, for a deep sleep night.',
        duration: 60,
        fee: 10,
        id: '8a31bb63-d82b-412d-9f72-53f56146aaea',
        title: 'Pilates',
        tutor: {
          bio: 'Enthusiastic software engineer',
          city: 'Nairobi',
          country: 'Kenya',
          created_at: '2024-03-25T01:26:02',
          email: 'ptest@gmail.com',
          first_name: 'Patience',
          id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
          last_name: 'Otuke',
          phone_number: '0987654321',
          updated_at: '2024-04-03T15:06:18',
          __class__: 'Tutor',
        },
        tutor_id: 'eae09725-66bc-4e9a-b2c3-3a9b13ce946e',
        updated_at: '2024-03-25T05:49:27',
        __class__: 'Course',
      },
      {
        academic_level: null,
        browser: true,
        category: 'Programming',
        course_type: 'online',
        created_at: '2024-04-07T22:37:25',
        description:
          'In this course, you will learn how to use python for automation, data analysis e.t.c',
        duration: 45,
        fee: 51.33,
        id: '43c7a7d4-07ee-42c6-91ed-c96b1a0808ab',
        title: 'Python',
        tutor: {
          bio: null,
          city: 'Ogun',
          country: 'Nigeria',
          created_at: '2024-03-25T05:49:27',
          email: 'olakunleisiaq50@gmail.com',
          first_name: 'Kunle',
          id: 'cf120f6a-a78d-4812-9934-f3bc89fb1313',
          last_name: 'Salau',
          phone_number: '07062869135',
          updated_at: '2024-03-25T05:49:27',
          __class__: 'Tutor',
        },
        tutor_id: 'cf120f6a-a78d-4812-9934-f3bc89fb1313',
        updated_at: '2024-04-07T22:38:05',
        __class__: 'Course',
      },

      {
        academic_level: null,
        browser: true,
        category: 'Programming',
        course_type: 'online',
        created_at: '2024-04-07T22:37:25',
        description:
          'In this course, you will learn how to use python for automation, data analysis e.t.c',
        duration: 70,
        fee: 534.6,
        id: 'b2da1e3e-a19b-4c1a-8d2d-7ad5fcf8b3a5',
        title: 'Python 2.0',
        tutor: {
          bio: null,
          city: 'Ogun',
          country: 'Nigeria',
          created_at: '2024-03-25T05:49:27',
          email: 'olakunleisiaq50@gmail.com',
          first_name: 'Kunle',
          id: 'cf120f6a-a78d-4812-9934-f3bc89fb1313',
          last_name: 'Salau',
          phone_number: '07062869135',
          updated_at: '2024-03-25T05:49:27',
          __class__: 'Tutor',
        },
        tutor_id: 'cf120f6a-a78d-4812-9934-f3bc89fb1313',
        updated_at: '2024-03-25T05:49:27',
        __class__: 'Course',
      },

      {
        academic_level: null,
        browser: true,
        category: 'Programming',
        course_type: 'online',
        created_at: '2024-04-07T22:37:25',
        description:
          'In this course, you will learn how to use python for automation, data analysis e.t.c',
        duration: 70,
        fee: 534.6,
        id: 'fcac0f21-e750-46c5-934a-cb8803c57e59',
        title: 'Data Science',
        tutor: {
          bio: null,
          city: 'Umeå',
          country: 'Sweden',
          created_at: '2024-03-25T05:49:27',
          email: 'bravemaster102@gmail.com',
          first_name: 'Koffi Dodji',
          id: '4a05b7a2-1131-4293-b25f-beaf9e70ca1f',
          last_name: 'Noumonvi',
          phone_number: '+46730382216',
          updated_at: '2024-03-24T17:38:47',
          __class__: 'Tutor',
        },
        tutor_id: '4a05b7a2-1131-4293-b25f-beaf9e70ca1f',
        updated_at: '2024-03-25T05:49:27',
        __class__: 'Course',
      },
      {
        academic_level: null,
        browser: true,
        category: 'Fitness',
        course_type: 'online',
        created_at: '2024-04-07T22:37:25',
        description:
          'In this course, you will learn how to use python for automation, data analysis e.t.c',
        duration: 70,
        fee: 53.6,
        id: 'b2da1e3e-a19b-4c1a-8d2d-5a3b8fcf5da7',
        title: 'Pilates by the sea',
        tutor: {
          bio: null,
          city: 'Umeå',
          country: 'Sweden',
          created_at: '2024-03-25T05:49:27',
          email: 'bravemaster102@gmail.com',
          first_name: 'Koffi Dodji',
          id: '4a05b7a2-1131-4293-b25f-beaf9e70ca1f',
          last_name: 'Noumonvi',
          phone_number: '+46730382216',
          updated_at: '2024-03-24T17:38:47',
          __class__: 'Tutor',
        },
        tutor_id: '4a05b7a2-1131-4293-b25f-beaf9e70ca1f',
        updated_at: '2024-03-25T05:49:27',
        __class__: 'Course',
      },
    ]; 
  }
  //Remove
  //console.log(coursesUrl);

  //Add
  //const response = await tutorplanApi.get(coursesUrl);

 //let coursesWithTutorDetails;

/*   if (isTutor) {
    coursesWithTutorDetails = response.data.map((course) => {
      return { ...course, tutor: userData, browser: false };
    });
  } else {
    const tutorPromises = response.data.map(async (course) => {
      const TUTOR_URL = `/tutors/${course.tutor_id}`;
      //console.log("course one",course.tutor_id)
      const tutorResponse = await tutorplanApi.get(TUTOR_URL);
      //console.log(course.title, tutorResponse.data);
      return {
        ...course,
        tutor: tutorResponse.data,
        browser: role && userId ? false : true,
      };
    });

    coursesWithTutorDetails = await Promise.all(tutorPromises);
  }
  console.log('Courses Fetched', coursesWithTutorDetails);  */

  return coursesWithTutorDetails;
};


export const getOtherUser = async (role, userId, isTutor) => {
  //Add
  /* const response = await tutorplanApi.get(
    `${role}/${userId}${isTutor ? '/students' : '/tutors'}`
  );
  console.log("Api response>>", response.data)
  return response.data; */
  //Remove
  let response
  if (isTutor){
   response = [
    {
      city: 'Nairobi',
      country: 'Kenya',
      created_at: '2024-03-25T01:26:02',
      email: 'pstudent@gmail.com',
      first_name: 'Mary',
      id: 'ccbc40f5-3fa3-416a-baca-435749f6b84d',
      last_name: 'Mary',
      phone_number: '0987654321',
      updated_at: '2024-04-29T11:49:30',
      __class__: 'Student',
    },
  ];}
  else{
    response = [
      {
        bio: 'Enthusiastic software engineer',
        city: 'Nairobi',
        country: 'Kenya',
        created_at: '2024-03-25T01:26:02',
        email: 'pstudent@gmail.com',
        first_name: 'Pesh',
        id: 'ccbc40f5-3fa3-416a-baca-435749f6b84d',
        last_name: 'Student',
        phone_number: '0987654321',
        updated_at: '2024-04-29T11:49:30',
        __class__: 'Student',
      },
      {
        bio: null,
        city: 'Umeå',
        country: 'Sweden',
        created_at: '2024-03-24T17:38:47',
        email: 'bravemaster102@gmail.com',
        first_name: 'Koffi Dodji',
        id: '4a05b7a2-1131-4293-b25f-beaf9e70ca1f',
        last_name: 'Noumonvi',
        phone_number: '+46730382216',
        updated_at: '2024-03-24T17:38:47',
        __class__: 'Tutor',
      },
      {
        bio: null,
        city: 'Ogun',
        country: 'Nigeria',
        created_at: '2024-03-25T05:49:27',
        email: 'olakunleisiaq50@gmail.com',
        first_name: 'Kunle',
        id: 'cf120f6a-a78d-4812-9934-f3bc89fb1313',
        last_name: 'Salau',
        phone_number: '07062869135',
        updated_at: '2024-03-25T05:49:27',
        __class__: 'Tutor',
      },
    ];

  }
  return response;
};

export const updateUser = async (role, userId, newData) => {
  const response = await tutorplanApi.put(
    `${role}/${userId}`,
    newData
  );
  return response.data;
};
export const getCourseStudents = async ( courseId, userId, isTutor) => {
  
  let enrolled = false
  if (userId){
const url = coursesUrlEndpoint + '/' + courseId + '/students';
const response = await tutorplanApi.get(url);
enrolled = response.data.some((student) => student.id === userId);
console.log(enrolled, response.data);

  }
  return enrolled;
 
 
  //return response.data;
};
