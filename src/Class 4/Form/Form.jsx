import React from 'react'
import { useForm } from 'react-hook-form';
import './Form.css'

const Form = () => {
     const { register, handleSubmit, watch, formState: { errors , isSubmitting } } = useForm();

     async function formData(data){
        await new Promise((resolve)=>{setTimeout(resolve,3000)} )
        console.log("Is submitting data",data)
     }
  return (
    <div>
      <form onSubmit={handleSubmit(formData)}>
        <label htmlFor="">First Name</label>
        <input type="text" placeholder='Enter Your First Name' {...register("firstname",{
            required:true,
            minLength:{value:3,message:"Min length is 3"},
            maxLength:{value:6,message:"Max Length is 6"}
        })}/>
        <br />
        {errors.firstname && <> <br /> <span className='error-msg'>{errors.firstname.message}</span></>}
        <label htmlFor="">Last Name</label>
        <input type="text" placeholder='Enter Your Last Name' {...register("lastname",{
            required:true,
            minLength:{value:3,message:"Min length is 3"},
            maxLength:{value:6,message:"Max Length is 6"}
        })}/>
        {errors.lastname && <> <br />  <span className='error-msg'>{errors.lastname.message}</span></>}
        <br />
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Enter Your Email' {...register("email",{
            required:true,
            minLength:{value:3,message:"Min length is 3"},
        })}/>
        <br />
        <input type="submit" disabled={isSubmitting} value={isSubmitting?"Sumbitting...":"Submit"} />
      </form>
    </div>
  )
}

export default Form
