import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import ReadError from './ReadError'

function Formiktwo() {

    let formvalidation = yup.object({
        name:yup.string().required('Username is empty'),
        pass:yup.string()
        .required()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters'),
        age:yup.number().min(20,'Min age should be 20').max(60,'Max age should be 60').required(),
        gender:yup.string().required('Gender is must' ),
        skills:yup.array().min(1,'At least One Skill').required(),
        country:yup.string().required(),
        comment:yup.string().max(20).required()
    })

  return (
    <div>
        <Formik
        validationSchema={formvalidation}
        initialValues={{name:'',pass:'',age:'',gender:'',skills:[],country:'',comment:''}}
        onSubmit={(values)=>{
            console.log(values);
        }}
        >
            <Form>
                {/* name */}
<div className="my-4">
    <label htmlFor="">Name = </label>
    <Field type='text' name='name'/>
    {/* <ErrorMessage name='name' /> */}
    <ReadError name='name'/>
</div>

                {/* password */}
                <div className="my-4">
    <label htmlFor="">Password = </label>
    <Field type='text' name='pass'/>
    <ReadError name='pass'/>
</div>
                {/* age */}
     <div className="my-4">
    <label htmlFor="">AGE = </label>
    <Field type='number' name='age'/>
    <ReadError name='age'/>
</div>
                {/* grnder */}
<div className="my-4">
    <label htmlFor="">Gender = </label>
    <Field type='radio' name='gender' value='male' />
    <label htmlFor="">Male</label>
    <Field type='radio' name='gender' value='female' className='ms-5' />
    <label htmlFor="">Female</label>

    <ReadError name='gender'/>
</div>
                {/* select country */}
<div className="my-4">
    <label htmlFor="">Country = </label>
    <Field as='select' name='country'>
        <option value=''>Selct Any One</option>
        <option value='usa'>USA</option>
        <option value='japan'>Japan</option>
        <option value='southkorea'>South Korea</option>
    </Field>
    <ReadError name='country'/>
</div>
                {/* Skills */}
<div className="my-4">
    <label htmlFor="">Skills =  </label>
    <Field type='checkbox' value='web dev' name='skills' />
    <label htmlFor="" className='me-3'>WEB DEV</label>
    <Field type='checkbox' value='app dev' name='skills' />
    <label htmlFor="" className='me-3'>APP DEV</label>
    <Field type='checkbox' value='seo' name='skills' />
    <label htmlFor="" className='me-3'>SEO</label>
<ReadError name='skills'/>
</div>
{/* textarea */}
<div className="">
    <label htmlFor="">Comments</label>
    <Field as='textarea' cols='40' rows='7' name='comment' />
    <ReadError name='comment'/>
</div>

                <button type='submit' className="btn btn-primary">SUBMIT</button>


            </Form>
        </Formik>
    </div>
  )
}

export default Formiktwo