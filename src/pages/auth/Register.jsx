import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axiosClient from '../../axios-client';


const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            terms: false
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(255, 'Name must be 255 characters or less')
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
            password_confirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
            terms: Yup.boolean()
                .oneOf([true], 'You must accept the terms and conditions')
        }),
        
        onSubmit: async (values) => {
            try {
                await axiosClient.post(`/register`, values)
                //   setSubmissionMessage('Registration Successfully');
                alert('Registration Successfully');
                formik.resetForm();
                // window.location.reload();
            } catch (error) {
                //   setSubmissionMessage('Error Submitting Form');
                alert('Error Submitting Form', error);
            }
        },
    });
    return (
        <>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Flowbite
                    </a> */}
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800   
                     dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form class="space-y-2 md:space-y-4" onSubmit={formik.handleSubmit}>
                                <div>
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" id="name" class="bg-gray-50 h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required=""
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name} />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="text-red-500 text-xs italic ml-1">{formik.errors.name}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@gmail.com" required=""
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email} />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-500 text-xs italic ml-1">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password} />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="text-red-500 text-xs italic ml-1">{formik.errors.password}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label for="password_confirmation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="confirm-password" name="password_confirmation" id="password_confirmation" placeholder="••••••••" class="bg-gray-50 h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password_confirmation} />
                                    {formik.touched.password_confirmation && formik.errors.password_confirmation ? (
                                        <div className="text-red-500 text-xs italic ml-1">{formik.errors.password_confirmation}</div>
                                    ) : null}
                                </div>
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            checked={formik.values.terms} />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                        {formik.touched.terms && formik.errors.terms ? (
                                            <div className="text-red-500 text-xs italic mt-1">{formik.errors.terms}</div>
                                        ) : null}
                                    </div>

                                </div>
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
