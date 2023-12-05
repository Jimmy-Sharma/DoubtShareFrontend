import React, { useState } from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    Switch,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleSignUp = () => {
        setTimeout(function () {
            navigate("/register")
        }, 300);
    };

    const formBackground = useColorModeValue('gray.400');

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Please enter the inputs correctly.");
        } else {
            try {
                const loginData = {
                    email,
                    password,
                };

                const response = await axios.post('https://doubtshare-ai75.onrender.com/users/login', loginData);
                console.log('Login successful:', response.data);
                localStorage.setItem('Revly.io', JSON.stringify(response.data))
                toast.success("Logged in successfully.");
                navigate('/dashboard');
            } catch (error) {
                console.error('Error during login:', error);
            }
        }
    };

    return (
        <Flex h="100vh" alignItems="center" justifyContent="center" bg="gray.700">
            <Flex flexDirection="column" bg={formBackground} p={12} borderRadius={8} boxShadow="lg">
                <Heading mb={6}>Log In</Heading>
                <Input
                    placeholder="Enter Email"
                    type="email"
                    variant="filled"
                    mb={3}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Enter Password"
                    type="password"
                    variant="filled"
                    mb={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button colorScheme="teal" mb={8} onClick={handleLogin}>
                    Log In
                </Button>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="dark_mode" mb="0">
                        Not an Existing User, Sign Up
                    </FormLabel>
                    <Switch size="lg" onChange={toggleSignUp} />
                </FormControl>
            </Flex>
        </Flex>
    );
};

export default Login;
