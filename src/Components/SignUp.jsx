import React, { useState } from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    Switch,
    useColorMode,
    useColorModeValue,
    Select,
} from '@chakra-ui/react';
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-hot-toast";

const SignUp = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');

    const toggleLogin = () => {
        setTimeout(function () {
            navigate("/")
        }, 300);
    };
    const formBackground = useColorModeValue('gray.400');

    const handleSignUp = async () => {
        // if (!userName || !email || !password || !userType) {
        //     toast.error("Please enter the inputs correctly.");
        // } else {
            try {
                const userData = {
                    userName,
                    email,
                    password,
                    userType,
                };

                const response = await axios.post('https://doubtshare-ai75.onrender.com/users/register', userData);
                console.log('SignUp successful:', response.data);
                toast.success("Signed up successfully.");
                navigate('/');
            } catch (error) {
                console.error('Error SignUp:', error);
            }
        //}
    };

    return (
        <Flex h="100vh" alignItems="center" justifyContent="center" bg="gray.700">
            <Flex
                flexDirection="column"
                bg={formBackground}
                p={12}
                borderRadius={8}
                boxShadow="lg"
            >
                <Heading mb={6}>Sign Up</Heading>
                <Input
                    placeholder="Enter User Name"
                    type="text"
                    variant="filled"
                    mb={3}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
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
                <Select icon={<MdArrowDropDown />} variant="filled" placeholder="User Type" value={userType}
                    onChange={(e) => setUserType(e.target.value)}>
                    <option value="Student">Student</option>
                    <option value="Tutor">Tutor</option>
                </Select>
                <Button colorScheme="teal" mb={8} onClick={handleSignUp}>
                    SignUp
                </Button>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="dark_mode" mb="0">
                        Existing user Login
                    </FormLabel>
                    <Switch
                        id="dark_mode"
                        colorScheme="teal"
                        size="lg"
                        onChange={toggleLogin}
                    />
                </FormControl>
            </Flex>
        </Flex>
    );
};

export default SignUp;
