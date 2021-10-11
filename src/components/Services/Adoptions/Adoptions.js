import { WrapItem, Wrap, Box, HStack, Center, Text } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import SearchBar from "../Search/SearchBar";
import SearchResultCard from "../Search/SearchResultCard";
import Filters from "../Search/Filters";
import Results from "./Results";
import axios from "axios"
import "./Adoption.css";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"

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

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJaeUJpYlFreEdSdGlmTG9zSDZlM3hOd2Q2aEZ5ZDN6RWRvVW1ZZXJxSGlzbkFvUHRCOCIsImp0aSI6ImZmNmJiNDNiMDc0NmVmNDQ4Y2JjNDQxOTZkNTM3YzdmMmUzMDM2YzU0YTVhNjRjZDg5YmNmZmNjMTAyZmYzNTBkMjVjZmM0Y2JiMjBlNGNmIiwiaWF0IjoxNjMzOTQ1NzI1LCJuYmYiOjE2MzM5NDU3MjUsImV4cCI6MTYzMzk0OTMyNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.l2_Ak-QVoeDjqp4r8CWQdnBWCrZRZOgLQZORhHZQUZh3mWK_zIaV8dnED1ku-X4Vk75xFqBbEOo2sCa14HTnXSY9eAOhPIPhPiWN4CW2nmu6lWTCYWs4YBUnUTc1xlTQvdMLBgymrjstIKXWfdGN-GepJYOnUx8A9HxHzxeY4zofLfLM5CNlsr5LdlH3NkbPCkbVFYuozrhuPYAnMyfbzkHFdULL_tQdgB_e7AU209QBmvkzGK29mjSsUc54asfD6S4MCblicxaRKii9cfU2VO1cIj4vrXORtokGuxm50rBJckpLOsoMlwQHeBLfHGVjYIOJn-GBZP8wbr2FhTomMg"
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
            <Results data={data} />
          </Box>
        )
        }


      </Box>



    </>
  )
}

export default Adoptions;