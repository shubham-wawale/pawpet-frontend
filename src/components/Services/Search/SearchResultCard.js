import React from "react";
import { Box,Badge } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"

const SearchResultCard = (props) => {
    return (
        <>
            <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image 
       boxSize="262px"
       objectFit="cover"
       src={props.data.imageUrl} />
      
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
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
            {props.data.category} &bull; {props.data.gender}
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Name: {props.data.name}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Location: {props.data.location}
        </Box>
        
        </Box>
        

      </Box>
        </>
    )
}

export default SearchResultCard;