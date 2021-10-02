import React, { useState } from "react"
import { Box,Badge } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Input,Button, Menu, MenuButton, MenuItem,MenuList} from "@chakra-ui/react"
import { Wrap, WrapItem } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"


const SearchBar = (props) => {
    const [location,setLocation] = useState("");
    const handleSearch = (e)=> {

      setLocation(e.target.value)
    }

    const handleClick = () => {
      localStorage.setItem("searchLocation", location);
      console.log(localStorage.getItem("searchLocation"))
      props.handleSearch(location)
    }
    return (
        <>
            <Wrap justify="right" spacing="30px">
                
                <WrapItem>
                <Input name="searchLocation" onChange={handleSearch} style={{width:"400px"}} variant="filled" placeholder="Enter your location" />
                </WrapItem>
                <WrapItem>
                <Button onClick={handleClick} leftIcon={<SearchIcon />} colorScheme="teal" variant="solid">
                  Search
                </Button>
                </WrapItem>
            </Wrap>
            
            

            
        </>
    )
}

export default SearchBar;