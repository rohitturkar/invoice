"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff } from "lucide-react";

import { FaGoogle,FaGithub } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <div className="flex  justify-center items-center h-screen ">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is Required"),
          password: Yup.string().required("Password is Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col w-full  max-w-[450px] bg-white shadow-2xl gap-4 border border-gray-200 px-10 pt-2 pb-6  rounded-3xl mx-auto   ">
          <div className="flex flex-col mb-6 gap-2 items-center justify-center ">
            <h1 className="text-2xl font-bold text-gray-900">Invoicfy</h1>
            <p className="text-sm ">Please Enter Your User Information to Regsiter.</p>
          </div>

          <div className="flex flex-col gap-2  ">
            <Field
              name="email"
              type="email"
              className="p-2 rounded-xl text-sm h-10 border w-[100%]"
              placeholder="John Doe"
            />
            <div className="text-red-500 text-xs mt-1">
              <ErrorMessage name="email" />
            </div>
          </div>


          <div className="flex flex-col gap-2  ">
            <Field
              name="email"
              type="email"
              className="p-2 rounded-xl text-sm h-10 border w-[100%]"
              placeholder="JohnDoe@email.com"
            />
            <div className="text-red-500 text-xs mt-1">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="flex flex-col gap-2 relative mb-6  ">
            <div className="relative">
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                className="p-2 rounded-xl h-10 text-xs border w-[100%] "
                placeholder="*******"
              />
              <div className="top-[30%] right-2  absolute">
                {showPassword ? (
                  <EyeOff
                    className="w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <Eye
                    className="w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
            <div className="absolute -bottom-4 text-xs text-[#F29F58] right-0 cursor-pointer">
              Forget Password?
            </div>

            <div className="text-red-500 text-xs mt-1">
              <ErrorMessage name="password" />
            </div>
          </div>

          <button
            type="submit"
            className="bg-violet-400  font-semibold text-white py-2.5  rounded-xl"
          >
            Sign Up
          </button>


          
                    <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
            <span className="flex-1 border-t border-gray-300"></span>
            <span className="px-3">Or Sign up with</span>
            <span className="flex-1 border-t border-gray-300"></span>
          </div>
          
          <div className='grid grid-cols-2 gap-2 mt-4'>
          <div
                      
                      className="text-black flex items-center justify-center gap-4 font-semibold border border-gray-400 cursor-pointer  py-2.5  rounded-xl"
                    >
                      <FaGoogle size={22} />
                      Google
                    </div>
          
                    <div
                      
                      className="text-black flex items-center justify-center gap-4 font-semibold border border-gray-400 cursor-pointer  py-2.5  rounded-xl"
                    >
                      <FaGithub size={22}/>
                        Github
                    </div>
          </div>
          <div className="text-gray-700 mt-2 text-center font-medium text-sm">
            Already have an account? <a className='text-gray-900 font-semibold' href='/login'>Login</a>
          </div>
                 

        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
