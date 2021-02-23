import * as yup from 'yup';

import { requiredMsg } from './messages';

export default yup.object().shape({
    stepName: yup.string().min(5, "Name must be longer (>=5 characters)"),
    stepNumber: yup.number().required(requiredMsg),
    postId: yup.number().required(requiredMsg)
})