/* "use client";

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from "@/config/firebase"
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

interface signInForm {
    email: string,
    password: string
}

const SignIn = () => {
    const [signInWithEmailAndPassword, user, loading, fbError] =
        useSignInWithEmailAndPassword(auth)

    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<signInForm>()


    return (
        <form onSubmit={handleSubmit((values) => signInWithEmailAndPassword(values.email, values.password))}>
            <FormControl isInvalid={!!errors.email}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                    id='email'
                    placeholder='Email'
                    {...register('email', {
                        required: 'This is required',

                    })}
                />
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input
                    id='password'
                    placeholder='Password'
                    {...register('password', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                />
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            {fbError && <Text>{fbError.message}</Text>}
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
            </Button>
        </form>
    )
}

export default SignIn */