import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data);
      }
  return (
<div className="flex h-screen items-center justify-center ">
    <div className="w-[600px]">
    <div className='modal-box'>
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
        <h3 className='font-bold text-lg'>Contact Us</h3>
        <div className='mt-5 spaceY-2 py-1'>
            <span >
            Name </span><br/>
            <input {...register("name", { required: true })} type='text' placeholder="Enter your Name" className='bg-slate-300 w-80 px-3 border rounded-md outline-none'/>
            <br/>{errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        </div> 

        <div className='mt-5 spaceY-2 py-1'>
            <span >
            Email </span><br/>
            <input {...register("email", { required: true })} type='email' placeholder="Enter your email" className='bg-slate-300 w-80 px-3 border rounded-md outline-none'/>
            <br/>{errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>

        <div className='mt-5 spaceY-2 py-1'>
            <span >
            Message </span><br/>
            <input {...register("message", { required: true })} type='textarea' placeholder="Type Your Message" className='bg-slate-300 w-80 px-3 border rounded-md outline-none'/>
            <br/>{errors.message && <span className='text-sm text-red-500'>This field is required</span>}
        </div>

        <div className='flex justify-around mt-4'>
        <Link to="/" type='submit' className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-300'>Submit</Link>
        </div>
        
        </form>
    </div>
    </div>
    </div>
  )
}

export default Contact