import * as Yup from 'yup'

const registerValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    accountType: Yup.string().required('Account type is required').oneOf(['Agent', 'User'], 'Invalid account type'),
    phone: Yup.string().required('Phone number is required'),
    email: Yup.string().email().required('Email address is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Please confirm password').oneOf([Yup.ref<string>('password')], 'Passwords must match'),
})

export default registerValidationSchema