import { FC, memo, useCallback } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../../services/fireabase'
import {
  Form,
  FormButton,
  FormContainer,
  Input,
  Label,
  Error,
  InputContainer,
} from './styles'
import { Formik, Field } from 'formik'
import { initialValues, validationSchema } from './constants'
import { BackButton } from '../../../components/Navbar/styles'
import { setToken } from '../../../services/storage'

//const LoginForm: FC = () => {
//   const navigate = useNavigate()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState<string | null>(null)

// //   const handleLogin = async (values: typeof initialValues) => {
// //     try {
// //       const {email, password} = values
// //      const userCredentials =  await signInWithEmailAndPassword(auth, email, password)
// //      const token = await userCredentials.user.getIdToken()
// //      setToken(token)
// //       navigate('/home')
// //     } catch (error) {
// //       // console.log(error)
// //       setError('Algo no fue bien')
// //     }
// //   }

//   const goToBack = useCallback(() => {
 
//     navigate('/')
//   }, [navigate])

//   return (
// //     <FormContainer>
// //       <Formik
// //         validationSchema={validationSchema}
// //         onSubmit={handleLogin}
// //         initialValues={initialValues}
// //       >
// //         <Form>
// //           <Field name="email">
// //             {({ field, meta }: { field: any; meta: any }) => (
// //               <InputContainer>
// //                 <Label>Email</Label>
// //                 <Input $hasError={!!meta?.error} type="text" {...field} />
// //                 {meta?.error && <Error>{meta.error}</Error>}
// //               </InputContainer>
// //             )}
// //           </Field>
// //           <Field name="password">
// //             {({ field, meta }: { field: any; meta: any }) => (
// //               <InputContainer>
// //                 <Label>Password</Label>
// //                 <Input $hasError={!!meta?.error} {...field} type="password" />
// //                 {meta?.error && <Error>{meta.error}</Error>}
// //               </InputContainer>
// //             )}
// //           </Field>
// //           <FormButton type="submit">Login</FormButton>
// //           <BackButton onClick={goToBack}>🔙</BackButton>
// //         </Form>
// //       </Formik>
// //     </FormContainer>
// //   )
// }

// export default memo(LoginForm)
