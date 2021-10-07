import React from "react";
import { Box,Badge, Center } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { transform } from "@chakra-ui/styled-system";
import { scaleFadeConfig } from "@chakra-ui/transition";

const SearchResultCard = (props) => {
    
    return (
        <>
            <Box className="adoptionCard" boxShadow="lg" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image 
       boxSize="200px"
       objectFit="cover"
       src={props.data.imageUrl} />
      
      <Box p="4" pb="2">
        <Box ml="3" d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="green">
            {props.data.type}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
           <Center>
            {props.data.category} &bull; {props.data.gender}
            </Center>
          </Box>
        </Box>
        {/* <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Name: {props.data.name}
        </Box> */}
        <Box
          mt="3"
          fontWeight="semibold"
          as="h6"
          lineHeight="tight"
          isTruncated
          color="blackAlpha.700"
          fontFamily="sans-serif"
          letterSpacing="wide"

        >
        <Center>
          {props.data.name},{props.data.location}
          </Center>
        </Box>
        
        </Box>
        

      </Box>
        </>
    )
}

export default SearchResultCard;