import * as yup from 'yup'

export const LoginSchema = yup.object({
    username: yup.string().required('*username required'),
    password: yup.string().required('*password required')
})