import * as yup from 'yup';

const requiredMsg = "Required"

const schema = yup.object().shape({
    title: yup.string().required(requiredMsg),
    description: yup.string().required(requiredMsg),
    materials: yup.string().required(requiredMsg),
    videoURL: yup.string().test('Empty-or-Valid-URL', 'URL must be empty or valid', url => !url || yup.string().url())
})

export default schema;