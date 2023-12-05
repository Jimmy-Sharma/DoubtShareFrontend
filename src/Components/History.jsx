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

const History = () => {
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
                    {/* <Container maxW="container.lg" mt={8} diplay="flex" justifyContent="center" alignItems="center">
                        <Flex justifyContent="space-between" maxW="30%" mb={14} margin="auto">
                            <Select icon={<MdArrowDropDown />} variant="filled" placeholder="Please select the type of doubt">
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
                            />
                        </Flex>
                        <Button colorScheme="teal" mb={8} >
                            Search for Answers
                        </Button>
                    </Container> */}
                </Flex>
            </ChakraProvider>
        </>
    )
}

export default History