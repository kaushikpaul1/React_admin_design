import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axiosClient from '../axios-client';


function CaseRegistration() {
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [dist, setDistricts] = useState([]);


  const formik = useFormik({
    initialValues: {
      firstname: '',
      middlename: '',
      lastname: '',
      email: '',
      phone: '',
      desc: '',
      dist: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First name is required'),
      lastname: Yup.string().required('Last name is required'),
      email: Yup.string().email('Email address is invalid').required('Email is required'),
      phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
      dist: Yup.string().required('Dist is required'),
    }),
    onSubmit: async (values) => {

      try {
        await axiosClient.post(`/case-reg`, values)
        setSubmissionMessage('Form Submitted Successfully');
        // alert('Form Submitted Successfully');
        formik.resetForm();
        // window.location.reload();
      } catch (error) {
        setSubmissionMessage('Error Submitting Form'.error);
        // alert('Error Submitting Form');
      }
    },
  });

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await axiosClient.get(`/dist`);
        if (response.status === 200) {
          setDistricts(response.data);
        } else {
          console.error('Error fetching districts:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching districts:', error);
      }
    };

    fetchDistricts();
  }, []);

  return (
    <section className="text-gray-600 body-font relative">
      <style>
        {`
          .banner {
            background-color: #28a745; 
            color: white; 
            padding: 8px 20px;
            border-radius: 5px; 
            margin-top: 5px; 
            margin-bottom:10px;
            text-align: center;
            position: relative; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            width: 100%;
            max-width: 600px; 
            margin-left: auto; 
            margin-right: auto; 
          }
        `}
      </style>



      <div className="container px-2 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-2">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Register Your Case!</h1>
        </div>

        <div className="lg:w-[95%] md:w-1/2 mx-auto ">

          {submissionMessage && (
            <div className="banner">
              {submissionMessage}
            </div>
          )}
          <form onSubmit={formik.handleSubmit}>

            <div className="bg-white shadow-md p-4 w-full max-w-6xl mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/6">
                  <div className="relative">
                    <label htmlFor="firstname" className="leading-7 ml-1 text-sm text-gray-600">First Name:<span className="text-red-700">*</span></label>
                    <input type="text" id="firstname" name="firstname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out"
                      value={formik.values.firstname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                    {formik.touched.firstname && formik.errors.firstname && (
                      <p className="text-red-500 text-xs italic">{formik.errors.firstname}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/6">
                  <div className="relative">
                    <label htmlFor="middlename" className="leading-7 ml-1 text-sm text-gray-600">Middle Name:</label>
                    <input type="text" id="middlename" name="middlename" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out"
                      value={formik.values.middlename}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                  </div>
                </div>
                <div className="p-2 w-1/6">
                  <div className="relative">
                    <label htmlFor="lastname" className="leading-7 ml-1 text-sm text-gray-600">Last Name:<span className="text-red-700">*</span></label>
                    <input type="text" id="lastname" name="lastname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out"
                      value={formik.values.lastname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                    {formik.touched.lastname && formik.errors.lastname && (
                      <p className="text-red-500 text-xs italic">{formik.errors.lastname}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/4">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 ml-1 text-sm text-gray-600">Email:<span className="text-red-700">*</span></label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/5">
                  <div className="relative">
                    <label htmlFor="phone" className="leading-7 ml-1 text-sm text-gray-600">Phone:<span className="text-red-700">*</span></label>
                    <input type="text" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-red-500 text-xs italic">{formik.errors.phone}</p>
                    )}
                  </div>
                </div>
                
                <div className="p-2 w-1/5">
                  <div className="relative">
                    <label htmlFor="dist" className="leading-7 ml-1 text-sm text-gray-600">
                      Choose District:<span className="text-red-700">*</span>
                    </label>
                    <select
                      id="dist"
                      name="dist"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out"
                      value={formik.values.dist}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Select District</option>
                      {dist.map((dist) => (
                        <option key={dist.id} value={dist.id}>
                          {dist.dist_name}
                        </option>
                      ))}
                    </select>
                    {formik.touched.dist && formik.errors.dist && (
                      <p className="text-red-500 text-xs italic">{formik.errors.dist}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label htmlFor="desc" className="leading-7 ml-1 text-sm text-gray-600">Description:</label>
                  <textarea id="desc" name="desc" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-4 transition-colors duration-200 ease-in-out"
                    value={formik.values.desc}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base" type='submit'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CaseRegistration;
