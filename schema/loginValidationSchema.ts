import * as Yup from 'yup'

const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email address').required('Email address is required'),
    password: Yup.string().min(6, 'Must be 6 characters or more').required('Password is required')
})

export default loginValidationSchema