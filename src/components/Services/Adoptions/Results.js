import React from "react";
import { Input, Button, Select, Box, Center, Stack, Divider } from "@chakra-ui/react"
import { Wrap, WrapItem, Text } from "@chakra-ui/react"
import { AddIcon, ArrowForwardIcon, EditIcon } from "@chakra-ui/icons"
import SearchResultCard from "../Search/SearchResultCard";


const Results = (props) => {
    return (
        <>
            <Box ml="10px">
                <Text fontSize="2xl" color="gray.400" fontWeight="semibold">------Adoption results-----------------</Text>
            </Box>
            <Box m="10px" mt="10px">
                <Wrap justify="left" spacing="15px">
                    {props.data.map(property => {
                        return (
                            <WrapItem>
                                <SearchResultCard data={property} />
                            </WrapItem>
                        )
                    })}
                </Wrap>
            </Box>
        </>
    )
}

export default Results;