import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/authSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/logo-corelia.png';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // Validation Schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Minimum eight characters, at least one letter and one number')
      .required('Password is required'),
  });

  function handleLogin(values) {
    const { email, password } = values;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
      dispatch(loginSuccess(validUser));
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      navigate('/dashboard');
    } else {
      setError("Invalid email or password! Please register first.");
    }
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <div className='bg-color flex justify-center items-start mt-14 px-4 lg:ms-48'>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-lg">
        {/* Logo */}
        <div className='text-center mb-6'>
          <img className='w-32 sm:w-48 md:w-56 lg:w-64 mx-auto' src={logo} alt="logo" />
        </div>

        {/* Login Form */}
        <form className="p-0" onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className="mb-5">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              name="email"
              className="w-full bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 ps-7"
              placeholder="Email address"
              required
            />
            {formik.touched.email && formik.errors.email && <p className='text-red-500 mt-1'>{formik.errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-5">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              name="password"
              className="w-full bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 ps-7"
              placeholder="Password"
              required
            />
            {formik.touched.password && formik.errors.password && <p className='text-red-500 mt-1'>{formik.errors.password}</p>}
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 mt-4 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800 min-w-fit"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="flex justify-center pt-4 text-sm">
            <h4 className='text-black'>Don’t have an account?</h4>
            <Link to={'/register'} className='text-purple-600 underline ps-2'>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
