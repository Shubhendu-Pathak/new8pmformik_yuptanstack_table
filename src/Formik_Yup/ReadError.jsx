import { ErrorMessage } from 'formik'
import React from 'react'

function ReadError({name}) {
  return (
    <div className='text-danger  fst-italic fw-bolder'>
<ErrorMessage name={name}/>
    </div>
  )
}

export default ReadError