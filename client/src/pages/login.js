import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../context/authContext";
import {useForm} from "../utility/hooks";
import {useMutation} from "@apollo/react-hooks";
import {Alert, Button, Container, Stack, TextField} from "@mui/material";
import {gql} from "graphql-tag";

const LOGIN_USER = gql`
    mutation login($loginInput:LoginInput){
        loginUser(loginInput:$loginInput){
            email
            username
            token
        }
    }
`

function Login(props) {
    let navigate = useNavigate();
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState([]);

    function loginUserCallback() {
        loginUser();
    }

    const {onChange, onSubmit, values} = useForm(loginUserCallback, {
        email: '',
        password: ''
    })

    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(proxy, {
            data: {
                loginUser: userData
            }
        }) {
            context.login(userData);
            navigate('/');
        },
        onError({graphQLErrors}) {
            setErrors(graphQLErrors);
        },
        variables: {loginInput: values}
    })

    return (
        <Container spacing={2} maxWidth="sm">
            <h3>Login</h3>
            <Stack>
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
            </Stack>
            {errors.map(function (error) {
                return (
                    <Alert severity="error">{error.message}</Alert>
                );
            })}
            <Button variant="contained" onClick={onSubmit}>Login</Button>
        </Container>)
}

export default Login;