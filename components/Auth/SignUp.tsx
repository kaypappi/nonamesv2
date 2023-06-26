/* import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/app'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

interface SignUpForm {
    email: string,
    password: string,
    confirmPassword: string
}

const SignUp: React.FC = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<SignUpForm>()
    const [createUserWithEmailAndPassword, user, loading, fbError] =
        useCreateUserWithEmailAndPassword(auth)

    return (
        <Box w="100%" maxW="500px" m={2} >
            <form onSubmit={handleSubmit((values) => createUserWithEmailAndPassword(values.email, values.password))}>
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
                <FormControl isInvalid={!!errors.confirmPassword}>
                    <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
                    <Input
                        id='confirmPassword'
                        placeholder='Confirm Password'
                        {...register('confirmPassword', {
                            required: 'This is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.confirmPassword && errors.confirmPassword.message}
                    </FormErrorMessage>
                </FormControl>
                {fbError && <Text>{fbError.message}</Text>}
                <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                    Submit
                </Button>
            </form>
        </Box >
    )
}

export default SignUp */