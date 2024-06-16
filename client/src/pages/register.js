import {gql} from "graphql-tag";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/react-hooks";
import {AuthContext} from "../context/authContext"
import {useForm} from "../utility/hooks";
import {Alert, Button, Container, Stack, TextField} from "@mui/material";


const REGISTER_USER = gql`
    mutation Mutation($registerInput: RegisterInput){
        registerUser(registerInput: $registerInput){
            email
            username
            token
        }
    }
`

function Register(props) {
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    const [errors, setErrors] = useState([])

    function registerUserCallback(){
        console.log("Register User Callback Hit");
        registerUser();
    }

    const {onChange, onSubmit, values} = useForm(registerUserCallback, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [registerUser, {loading}] = useMutation(REGISTER_USER, {
        update(proxy, {
            data: {
                registerUser: userData
            }
        }) {
            context.login(userData);
            navigate('/');
        },
        onError({graphQLErrors}) {
            setErrors(graphQLErrors);
        },
        variables: {registerInput: values}
    })

    return (
        <Container spacing={2} maxWidth="sm">
            <h3>Register</h3>
            <p>This is the register page! Register below to create an account!</p>
            <Stack>
                <TextField
                label="Username"
                name="username"
                onChange={onChange}
                ></TextField>

                <TextField
                    label="Email"
                    name="email"
                    onChange={onChange}
                ></TextField>

                <TextField
                    label="Password"
                    name="password"
                    onChange={onChange}
                ></TextField>

                <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    onChange={onChange}
                ></TextField>
            </Stack>
            {errors.map(function(error){
                return (
                    <Alert severity="error">{error.message}</Alert>
                );
            })}
            <Button variant="contained" onClick={onSubmit}>Register</Button>
        </Container>)
}
export default Register;