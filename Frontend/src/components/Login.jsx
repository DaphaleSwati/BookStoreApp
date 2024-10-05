// eslint-disable-next-line no-unused-vars
import axios from "axios";
import React from 'react';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    // console.log(data);
    const userInfo = {
      email:data.email,
      password:data.password
  }
  await axios.post("http://localhost:3001/user/login",userInfo)
  .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Login Successful');
        document.getElementById('my_modal_3').close();
        setTimeout(()=>{
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        },1000);
      }
      })
  .catch((err)=>{
     if(err.response){
      console.log(err);
      // alert("Error:"+err.response.data.message);
      toast.error("Error:"+err.response.data.message);
      setTimeout(()=>{},2000);
     }
  })
  };
  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
  <form onSubmit={handleSubmit(onSubmit)}>
  {/* <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> */}
  <button type="button" onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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