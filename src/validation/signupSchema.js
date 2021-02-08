import * as yup from 'yup';

const requiredMsg = "Required"

const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address'),
    username: yup.string().required(requiredMsg),
    password: yup.string().min(6, 'Please enter a password longer than 6 characters')
})

export default schema;