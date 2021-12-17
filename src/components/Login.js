import React, {useState} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`



const Login = () => {
    const { push } = useHistory();
    const [error, setError] = useState()
    const [credentials, setCredentials] = useState({
        username: 'Lambda',
        password: 'School'
    })

    const handleChange = (e) => {
        console.log(e)
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token)
                push('/friends');
            })
            .catch(err => {
                setError(err.response.data.error)
            })
    }


    
    return(
        <ComponentContainer>
            <ModalContainer>
                <h1>Welcome to Blogger Pro</h1>
                <h2>Please enter your account information.</h2>
                <FormGroup>
                    <Label>
                        <h4>Username:</h4>                            
                        <Input 
                            input='text'
                            id='username'
                            name='username'
                            onChange={handleChange}
                        >
                        </Input>
                    </Label>
                    <Label>
                        <h4>Password:</h4>                
                        <Input 
                            input='text'
                            id='password'
                            name='password'
                            onChange={handleChange}
                        >
                        </Input>
                    </Label>
                        <Button id='submit' onClick={handleSubmit}>Submit</Button>
                </FormGroup>
                <p id='error'>{error}</p>
            </ModalContainer>
        </ComponentContainer>
        );
    };

export default Login;