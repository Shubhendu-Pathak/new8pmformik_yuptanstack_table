import * as Yup from 'yup'

export const FormSchema = Yup.object({
    name:Yup.string().min(3,'At Least 3').max(6,'Max Upto 6').required('Empty UserName'),
    email:Yup.string().email().required('Empty UserEmail'),
    age:Yup.number().min(20).max(60).required('Empty Age'),
    password:Yup
    .string()
    .min(8)
    .max(50)
    .required('Password Is empty')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters'),
    cpass:Yup
    .string()
    .required('Confirm Password is MUST')
    .oneOf([Yup.ref('password'),null],'Both Password Does not match')

})