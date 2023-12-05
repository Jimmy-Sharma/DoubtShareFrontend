import React, { useState } from 'react';
import {
    ChakraProvider,
    CSSReset,
    Box,
    Flex,
    Heading,
    Select,
    Container,
    Input, Button
} from '@chakra-ui/react';
import { MdArrowDropDown } from "react-icons/md";
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate=useNavigate()

    const handleLogOut=()=>{
        localStorage.removeItem('Revly.io');
        navigate("/")
    }

    return (
        <><Navbar />
            <ChakraProvider>
                <CSSReset />
                <Flex h="100vh" flexDirection="column">
                    <Container maxW="container.lg" mt={8} diplay="flex" justifyContent="center" alignItems="center">
                        <Button colorScheme="teal" mb={8} onClick={handleLogOut} >
                            Log Out
                        </Button>
                    </Container>
                </Flex>
            </ChakraProvider>
        </>
    )
}

export default Profile