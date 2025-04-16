import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/logo-corelia.png';

export default function Register() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(55).required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^01[0125][0-9]{8}$/, 'Enter a valid Egyptian number').required('Phone is required'),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'At least 8 characters, one letter, one number').required('Password is required'),
    rePassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
  });

  function handleRegister(values) {
    const { name, email, phone, password } = values;
  
    // جلب المستخدمين من localStorage أو مصفوفة فاضية لو مفيش
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // التحقق لو الإيميل مسجل قبل كدا
    if (users.some(user => user.email === email)) {
      setError('Email already registered! Please use a different email.');
      return;
    }
  
    // إضافة المستخدم
    users.push({ name, email, phone, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    setSuccess('Registration successful! Redirecting to login...');
    setTimeout(() => {
      setSuccess('');
      window.location.href = "/"; // توجيه لصفحة تسجيل الدخول
    }, 2000);
  }

  const formik = useFormik({
    initialValues: { name: '', email: '', phone: '', password: '', rePassword: '' },
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <div className='bg-color flex justify-center items-center lg:ms-48'>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-4">
        <div className='flex justify-center mb-6'>
          <img src={logo} alt="logo" className="w-32 sm:w-48 md:w-56 lg:w-64" />
        </div>

        <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
          {/* Name */}
          <input 
            type="text" 
            name='name' 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            placeholder="Name" 
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-white dark:border-gray-300 dark:text-black p-4 mt-2" 
          />
          {formik.touched.name && formik.errors.name && <p className='text-red-500'>{formik.errors.name}</p>}

          {/* Email */}
          <input 
            type="email" 
            name='email' 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            placeholder="Email" 
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-white dark:border-gray-300 dark:text-black p-4 mt-2" 
          />
          {formik.touched.email && formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>}

          {/* Phone */}
          <input 
            type="tel" 
            name='phone' 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            placeholder="Phone" 
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-white dark:border-gray-300 dark:text-black p-4 mt-2" 
          />
          {formik.touched.phone && formik.errors.phone && <p className='text-red-500'>{formik.errors.phone}</p>}

          {/* Password */}
          <input 
            type="password" 
            name='password' 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            placeholder="Password" 
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-white dark:border-gray-300 dark:text-black p-4 mt-2" 
          />
          {formik.touched.password && formik.errors.password && <p className='text-red-500'>{formik.errors.password}</p>}

          {/* Confirm Password */}
          <input 
            type="password" 
            name='rePassword' 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            placeholder="Confirm Password" 
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-white dark:border-gray-300 dark:text-black p-4 mt-2" 
          />
          {formik.touched.rePassword && formik.errors.rePassword && <p className='text-red-500'>{formik.errors.rePassword}</p>}

          {/* Error and Success Messages */}
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 mt-4 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800 min-w-fit"
          >
            Register
          </button>

          {/* Login Link */}
          <div className="flex justify-center pt-3">
            <h4 className='text-center text-black'>Already have an account?</h4>
            <Link to={'/'} className='text-purple-600 underline ps-2'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
