import React, { useEffect, useState } from 'react';
import {
    ChakraProvider,
    CSSReset,
    Box,
    Flex,
    Heading,
    Select,
    Container,
    Input, Button, Card, Text
} from '@chakra-ui/react';
import { MdArrowDropDown } from "react-icons/md";
import axios from 'axios';
import Navbar from './Navbar';

const History = () => {


    const [hist, setHist] = useState([])

    const activeUser = JSON.parse(localStorage.getItem('Revly.io'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://doubtshare-ai75.onrender.com/doubts/history');
                const data = await response.json();
                setHist(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <><Navbar />
            <ChakraProvider>
                <CSSReset />
                <Flex h="100vh" flexDirection="column">
                    <Box bg="teal" color="white" p={4}>
                        <Heading as="h1" size="xl">
                            History
                        </Heading>
                    </Box>
                    {
                     hist.map((el) => {
                            <Card maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                                <Box p="6">
                                    <Flex align="baseline">
                                        <Heading as="h2" size="md" fontWeight="semibold" mb="2">
                                            {el.doubtType == 'non' ? "Non-Technical" : "Technical"}
                                        </Heading>
                                    </Flex>
                                    <Text color="gray.500">{el.doubts}</Text>
                                </Box>
                            </Card>
                        })
                    }
                </Flex>
            </ChakraProvider>
        </>
    )
}

export default History