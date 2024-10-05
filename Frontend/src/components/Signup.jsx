import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';

function Signup() {
    const location=useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        // console.log(data);
        const userInfo = {
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
        await axios.post("http://localhost:3001/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                // alert("Signup Successful");
                toast.success('Signup Successful');
                // <Navigate to="/"/>
                navigate(from,{replace:true});
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user));
        })
        .catch((err)=>{
           if(err.response){
            console.log(err);
            // alert("Error:"+err.response.data.message);
            toast.error("Error:"+err.response.data.message);
           }
        })
    };
  return (
    
<div className="flex h-screen items-center justify-center ">
    <div className="w-[600px]">
    <div className='modal-box'>
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
        <h3 className='font-bold text-lg'>Signup</h3>
        <div className='mt-5 spaceY-2 py-1'>
            <span >
            Name </span><br/>
            <input {...register("fullname", { required: true })} type='text' placeholder="Enter your Name" className='bg-slate-300 w-80 px-3 border rounded-md outline-none'/>
            <br/>{errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
        </div> 

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
        <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>Signup</button>
        <p className='text-xl'>Have account?{" "}<button className=' cursor-pointer underline text-blue-500' 
            onClick={()=>
                document.getElementById("my_modal_3").showModal()
            }
        >Login</button>{" "}
        <Login/></p>
        </div>
        
        </form>
    </div>
    </div>
    </div>
  )
}

export default Signup