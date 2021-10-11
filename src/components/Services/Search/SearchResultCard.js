import React from "react";
import { Box,Badge, Center, Text } from "@chakra-ui/layout"
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
       src={props.data.photos.length !== 0 ? props.data.photos[0].full : "https://static.wikia.nocookie.net/nopixel/images/b/b4/Not-found-image-15383864787lu.jpg/revision/latest?cb=20200910062142" } />
      
      <Box p="4" pb="2">
        <Box ml="3" d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="orange">
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
            {props.data.age} &bull; {props.data.gender}
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
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated

        >
          <Center>{props.data.name.length > "10" ? (props.data.name.substring(0,10) + "..") : props.data.name },{props.data.contact.address.state} </Center>  
         
        </Box>
        
        </Box>
        

      </Box>
        </>
    )
}

export default SearchResultCard;