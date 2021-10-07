import React from "react";
import { Input, Button, Select, Box, Center, Stack, Divider } from "@chakra-ui/react"
import { Wrap, WrapItem, Text } from "@chakra-ui/react"
import { AddIcon, ArrowForwardIcon, EditIcon } from "@chakra-ui/icons"
import PetStoreCard from "./PetStoreCard";


const Results = (props) => {
    return (
        <>
            <Box ml="10px">
                <Text fontSize="2xl" color="gray.400" fontWeight="semibold">------Stores results-----------------</Text>
            </Box>
            <Box m="10px" mt="10px">
                <Wrap justify="left" spacing="15px">
                            <WrapItem>
                                <PetStoreCard />
                            </WrapItem>
                            <WrapItem>
                                <PetStoreCard />
                            </WrapItem>
                            <WrapItem>
                                <PetStoreCard />
                            </WrapItem>
                            <WrapItem>
                                <PetStoreCard />
                            </WrapItem>
                </Wrap>
            </Box>
        </>
    )
}

export default Results;