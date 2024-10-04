// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
  <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
  <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

        <h3 className='font-bold text-lg'>Login</h3>
        <div className='mt-5 spaceY-2 py-1'>
            <span >
            Email </span><br/>
            <input {...register("email", { required: true })} type='email' placeholder="Enter your email" className='bg-slate-300 w-80 px-3 border rounded-md outline-none'/>
            <br/>{errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>

        <div className='mt-5 spaceY-2 py-1'>
            <span >
            Password </span><br/>
            <input {...register("password", { required: true })} type='password' placeholder="Enter your password" className='bg-slate-300 w-80 px-3 border rounded-md outline-none'/>
            <br/>{errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>

        <div className='flex justify-around mt-4'>
        <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>Login</button>
        <p>Not registered?<Link to="/signup" className='cursor-pointer underline text-blue-500'>Signup</Link></p>
        </div>
        
        </form>
  </div>
</dialog>
    </div>
  )
}

export default Login