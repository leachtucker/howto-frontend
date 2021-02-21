import * as yup from 'yup';

const requiredMsg = "Required"
const urlEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;

const schema = yup.object().shape({
    title: yup.string().required(requiredMsg),
    description: yup.string().min(20, 'Enter a description above ten characters'),
    materials: yup.string().required(requiredMsg),
    video: yup.string().test('is-empty-or-url', 'Invalid URL', value => value.length === 0 || value.match(new RegExp(urlEx)))
})

export default schema;