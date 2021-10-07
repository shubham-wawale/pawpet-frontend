import React from "react";
import { Input, Button, Select, Box, Center, Stack } from "@chakra-ui/react"
import { Wrap, WrapItem, Text } from "@chakra-ui/react"
import { AddIcon, ArrowForwardIcon, EditIcon } from "@chakra-ui/icons"


const Filters = (props) => {
    return (
        <>
            <Box borderTopLeftRadius="lg" borderTopRightRadius="lg" color="white" display="flex" alignItems="baseline" p="10px" pl="20px" bg="teal.400" variant="solid">
                <EditIcon boxSize="5" />
                <Text ml="3" fontSize="2xl" fontWeight="semibold">Filters</Text>
            </Box>
            <Box p="20px">
                <Wrap direction="column" spacing="30px">
                {props.filters.map(filter => (
                    <Stack>
                        <Text fontWeight="semibold" color="blackAlpha.700" fontFamily="sans-serif">{filter}:</Text>
                        <Input boxShadow="md" variant="filled" placeholder="Enter value" />
                    </Stack>
                ))}
                    
                    
                </Wrap>
            </Box>
            <Wrap justify="right" p="20px">
                    <Button boxShadow="md" w="120px" rightIcon={<AddIcon boxSize="3" />} colorScheme="teal" variant="solid">
                        Apply
                    </Button>
                </Wrap>
        </>
    )
}

export default Filters;