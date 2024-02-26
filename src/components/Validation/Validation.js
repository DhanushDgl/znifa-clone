import * as yup from 'yup'

const userValidation = yup.object().shape({
  name: yup.string().required('The Name field is required'),
  email: yup.string().email('Enter Valid Email Address').required('The Email field is required'),
  phone: yup
    .string()
    .required('Please enter your phone number'), 
  message: yup.string().required('Please enter your message'),
  captcha: yup.string().required('Please enter Captcha'),
});

export { userValidation };