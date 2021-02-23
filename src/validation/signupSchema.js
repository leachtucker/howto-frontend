import * as yup from 'yup';

import { requiredMsg } from './messages';

const schema = yup.object().shape({
    username: yup.string().required(requiredMsg),
    password: yup.string().min(6, 'Please enter a password longer than 6 characters')
})

export default schema;