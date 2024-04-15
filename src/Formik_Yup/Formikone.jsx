import React from 'react'
import {useFormik} from 'formik'
import { FormSchema } from './Yupone';

function Formikone() {

let initialData = {
    name:'',email:'',age:0,password:'',cpass:''
}

let formik = useFormik({
    initialValues:initialData,
    validationSchema:FormSchema,
    onSubmit:(para)=>{
        console.log(para);
    }
})
console.log(formik);

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>

<div className="">
    <label htmlFor="">UserName =</label>
    <input 
    type="text" 
    name='name'
    value={formik.values.name}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    />
    {
        formik.errors.name &&  formik.touched.name
         ? <h1>{formik.errors.name}</h1>:''
    }
</div>

<div className="">
    <label htmlFor="">UserEmail =</label>
    <input 
    type="text"
    name="email"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    />
     {
        formik.errors.email  &&  formik.touched.email
         ? 
         <h1>{formik.errors.email}</h1> : ''
    }
</div>

<div className="">
    <label htmlFor="">UserAge =</label>
    <input 
    type="number"
    name="age"
    value={formik.values.age}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    />
     {
        formik.errors.age  &&  formik.touched.age
         ? 
         <h1>{formik.errors.age}</h1> : ''
    }
</div>

<div className="">
    <label htmlFor="">UserPassword =</label>
    <input 
    type="text"
    name="password"
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    />
     {
        formik.errors.password  &&  formik.touched.password
         ? 
         <h1>{formik.errors.password}</h1> : ''
    }
</div>

<div className="">
    <label htmlFor="">ConfirmPassword =</label>
    <input 
    type="text"
    name="cpass"
    value={formik.values.cpass}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    />
     {
        formik.errors.cpass  &&  formik.touched.cpass
         ? 
         <h1>{formik.errors.cpass}</h1> : ''
    }
</div>

<input type="submit" value="SUBMIT" />
        </form>
    </div>
  )
}

export default Formikone