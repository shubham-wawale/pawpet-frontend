import { WrapItem,Wrap,Box, HStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import SearchBar from "../Search/SearchBar";
import SearchResultCard from "../Search/SearchResultCard";
import Filters from "../Search/Filters";
import Results from "./Results";

const Veterinaries = () => {
    
    const [data,setData] = useState([])
    const [newData, setNewData] = useState([]);
    const filters = [
        "Rating",
        "Cost",
        "Years of experience",
    ]

    const handleSearch = (location) => {
        const updatedData = data.filter(property => property.location === location);
        setNewData(updatedData);
    }
    return (
        <>
            <SearchBar />
            
          
          <Box display="flex" >
            <Box boxShadow="lg" mt="70px" w="20.5%" h="578px" borderWidth="1px" borderRadius="lg" >
                <Filters filters={filters} />
            </Box>

            <Box className="adoptionResultScroll"  ml="30px" mt="20px" h="620px" w="79.5%" borderRadius="lg" overflowX="hidden" overflowY="scroll" >
                <Results />
            </Box>
            
          </Box>
            

            
        </>
    )
}

export default Veterinaries;