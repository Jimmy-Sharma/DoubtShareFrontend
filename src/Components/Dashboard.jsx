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

const Dashboard = () => {

    const [doubts, setDoubts] = useState('');
    const [doubtType, setDoubtType] = useState('tech');

    const activeUser = JSON.parse(localStorage.getItem('Revly.io'));
    console.log(activeUser.email);

    const data = {
        email: activeUser.email,
        doubts,
        doubtType,
    };

    const handleDoubtSearch = () => {

        axios.post('https://doubtshare-ai75.onrender.com/doubts/register', data)
            .then((response) => {
                console.log('Doubt submitted successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error submitting doubt:', error);
            });
    };

    return (
        <><Navbar />
            <ChakraProvider>
                <CSSReset />
                <Flex h="100vh" flexDirection="column" bg="">
                    <Box bg="teal" color="white" p={4}>
                        <Heading as="h1" size="xl">
                            Doubt Box
                        </Heading>
                    </Box>
                    <Container maxW="container.lg" mt={8} diplay="flex" justifyContent="center" alignItems="center">
                        <Flex justifyContent="space-between" maxW="30%" mb={14} margin="auto">
                            <Select icon={<MdArrowDropDown />} variant="filled" placeholder="Please select the type of doubt" value={doubtType}
                                onChange={(e) => setDoubtType(e.target.value)}>
                                <option value="tech">Technical</option>
                                <option value="non">Non-Technical</option>
                            </Select>
                        </Flex>
                        <Flex>
                            <Input
                                placeholder="Drop Your Doubt Here"
                                variant="filled"
                                bg="gray.100"
                                p={4}
                                borderRadius="md"
                                boxShadow="md"
                                mb={4}
                                wrap="wrap"
                                value={doubts}
                                onChange={(e) => setDoubts(e.target.value)}
                            />
                        </Flex>
                        <Button colorScheme="teal" mb={8} onClick={handleDoubtSearch}>
                            Search for Answers
                        </Button>
                    </Container>
                </Flex>
            </ChakraProvider>
        </>
    );
};

export default Dashboard;
