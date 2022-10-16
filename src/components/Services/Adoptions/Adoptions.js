import { WrapItem, Wrap, Box, HStack, Center, Text } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import SearchBar from "../Search/SearchBar";
import SearchResultCard from "../Search/SearchResultCard";
import Filters from "../Search/Filters";
import Results from "./Results";
import axios from "axios"
import "./Adoption.css";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import notFound from "./browser2.png"

const Adoptions = () => {

  const [data, setData] = useState([
    {
      imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      name: "Capella",
      type: "Dog",
      location: "mumbai",
      category: "adult",
      gender: "female",
      photos: [
        {
          full: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
        }
      ]
    },
    {
      imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      name: "Capella",
      type: "Dog",
      location: "mumbai",
      category: "adult",
      gender: "female",
      photos: [
        {
          full: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
        }
      ]
    },
    {
      imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      name: "Capella",
      type: "Dog",
      location: "mumbai",
      category: "adult",
      gender: "female",
      photos: [
        {
          full: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
        }
      ]
    },
    {
      imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      name: "Capella",
      type: "Dog",
      location: "mumbai",
      category: "adult",
      gender: "female",
      photos: [
        {
          full: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
        }
      ]
    },
    {
      imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      name: "Capella",
      type: "Dog",
      location: "mumbai",
      category: "adult",
      gender: "female",
      photos: [
        {
          full: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
        }
      ]
    },

  ])
  const [parameters, setParameters] = useState({})
  const [isLoading, setLoading] = useState(true);
  const [location,setLocation] = useState("")

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJaeUJpYlFreEdSdGlmTG9zSDZlM3hOd2Q2aEZ5ZDN6RWRvVW1ZZXJxSGlzbkFvUHRCOCIsImp0aSI6IjIzNjZmN2JkOTc4OTQzYTkwYmI2MTBjZDYyMWM1ZDZkNGVlZjBiNDJlNmUzMjFkNDk5ZjliZWNkMWUwMmJlOWI4MGY1YWEyMmMyMzhkYzVjIiwiaWF0IjoxNjY1OTE0Njg2LCJuYmYiOjE2NjU5MTQ2ODYsImV4cCI6MTY2NTkxODI4Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.fcMZaI_eGIrplqrq4yh8S7haCVbYPtC99IKFiNfqRiaZmt2viPIwwBDJ7LMCZDl_TPXUd3fueh-7o6hBbMy-djQ-A6JXaik7hIT34HAYbF_nZJ5fHPkayMvlBzbijllFmE_Fob_ynps_qgN_Wuau-RJL9JA-6-L1kk4QuH5tYTDgQEsxY7BXU1ob7UrCZP_tjawORrBRIdTFt14fQFGh6VFQmqwvf5clwRJbjw_JfayZBBEOEkYXZH1FFl0w9F9Q7OpCB6kcpMLFsc026VDPuGT-S_65dAwQJBmfF9SBHhKtNPpp4vTGFQN5zyabXgLkCzKq8GnrswScOZN8MjmESQ"
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    params: {

    }
  };

  useEffect(() => {
    axios.get('https://api.petfinder.com/v2/types/dog',
      config,
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })



    axios.get('https://api.petfinder.com/v2/animals',
      config,
    )
      .then(function (response) {
        console.log(response.data.animals);
        setData(response.data.animals);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        setLoading(false)
      })
  }, []);

  const [newData, setNewData] = useState([]);
  const filters = ["Type"]

  const handleSearch = (location) => {
    const updatedData = data.filter(property => property.location === location);
    setNewData(updatedData);
  }

  const handleParameters = async (data) => {
    const {location} = data;
    setLocation(location)
    setLoading(true)
    await setParameters(data);
    axios.get('https://api.petfinder.com/v2/animals',
      {
        headers: { Authorization: `Bearer ${token}` },
        params: data
      })
      .then(function (response) {
        console.log(response.data.animals);
        setData(response.data.animals);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        setLoading(false)
      })
  }

  const handleFilters = (data) => {
    data["location"] = location
    console.log(data)
    setLoading(true)
    axios.get('https://api.petfinder.com/v2/animals',
      {
        headers: { Authorization: `Bearer ${token}` },
        params: data
      })
      .then(function (response) {
        console.log(response.data.animals);
        setData(response.data.animals);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        setLoading(false)
      })
  }
  return (
    <>
      <SearchBar sendSearchData={handleParameters} data={data} />


      <Box display="flex" >
        <Box boxShadow="lg" mt="60px" w="20.5%" h="578px" borderWidth="1px" borderRadius="lg" >
          <Filters incomingFilters={handleFilters} filters={filters} />
        </Box>
        {isLoading ? (
          <>
          <Box className="adoptionResultScroll" ml="30px" mt="20px" h="620px" w="79.5%" borderRadius="lg" overflowX="hidden" overflowY="scroll" >
            <Box ml="10px">
              <Text fontSize="2xl" color="gray.400" fontWeight="semibold">------Loading results-----------------</Text>
            </Box>
            <Box m="10px" mt="10px">
            <Wrap justify="left" spacing="15px">
            {Array(10)
              .fill("")
              .map((_, i) => (
                
                  <Box boxShadow="lg" borderWidth="1px" borderRadius="lg" overflow="hidden"
                    padding="6" w={"200px"} bg="white">
                    <Center><SkeletonCircle size="20" /></Center>
                    <SkeletonText w={115} mt="4" noOfLines={6} spacing="4" />
                  </Box>
              ))}
              </Wrap>
              </Box>
            </Box>
          </>
        ) : (
          <Box className="adoptionResultScroll" ml="30px" mt="20px" h="620px" w="79.5%" borderRadius="lg" overflowX="hidden" overflowY="scroll" >
            {data.animals ? 
            <Results data={data} /> :
            <Box ml="10px" mt="20px">
                <Text fontSize="2xl" color="gray.400" fontWeight="semibold">------Sorry, we couldn't process the request-----------------</Text>
            
            <Image
            marginTop="150px"
            marginLeft="400px"
            width="250px"
            height="250px"
             src={notFound}
            />
            
            </Box>
            }
            
          </Box>
        )
        }


      </Box>



    </>
  )
}

export default Adoptions;