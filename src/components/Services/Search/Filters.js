import React, { useEffect, useState } from "react";
import { Input, Button, Select, Box, Center, Stack, Radio, RadioGroup } from "@chakra-ui/react"
import { Wrap, WrapItem, Text } from "@chakra-ui/react"
import { AddIcon, ArrowForwardIcon, EditIcon } from "@chakra-ui/icons"
import axios from "axios";


const Filters = (props) => {
    const [filters, setFilters] = useState([]);
    const [search, setSearch] = useState({
        type: "",
        color: "",
        gender: "",
        house_trained: "false"
    })
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJaeUJpYlFreEdSdGlmTG9zSDZlM3hOd2Q2aEZ5ZDN6RWRvVW1ZZXJxSGlzbkFvUHRCOCIsImp0aSI6ImZmNmJiNDNiMDc0NmVmNDQ4Y2JjNDQxOTZkNTM3YzdmMmUzMDM2YzU0YTVhNjRjZDg5YmNmZmNjMTAyZmYzNTBkMjVjZmM0Y2JiMjBlNGNmIiwiaWF0IjoxNjMzOTQ1NzI1LCJuYmYiOjE2MzM5NDU3MjUsImV4cCI6MTYzMzk0OTMyNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.l2_Ak-QVoeDjqp4r8CWQdnBWCrZRZOgLQZORhHZQUZh3mWK_zIaV8dnED1ku-X4Vk75xFqBbEOo2sCa14HTnXSY9eAOhPIPhPiWN4CW2nmu6lWTCYWs4YBUnUTc1xlTQvdMLBgymrjstIKXWfdGN-GepJYOnUx8A9HxHzxeY4zofLfLM5CNlsr5LdlH3NkbPCkbVFYuozrhuPYAnMyfbzkHFdULL_tQdgB_e7AU209QBmvkzGK29mjSsUc54asfD6S4MCblicxaRKii9cfU2VO1cIj4vrXORtokGuxm50rBJckpLOsoMlwQHeBLfHGVjYIOJn-GBZP8wbr2FhTomMg"
    const config = {
        headers: { Authorization: `Bearer ${token}` },
        params: {
        }
    };
    const handleChange = (e) => {

        console.log(e.target);
        const {name, value} = e.target;
        console.log(name, value)
        setSearch(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
        console.log(search)
    }

    const handleApply = ()=> {
        props.incomingFilters(search)
    }

    useEffect(() => {
        axios.get('https://api.petfinder.com/v2/types',
            config,
        )
            .then(function (response) {
                console.log(response.data.types);
                setFilters(response.data.types)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                console.log(filters)
            })

    }, []);
    return (
        <>
            <Box borderTopLeftRadius="lg" borderTopRightRadius="lg" color="white" display="flex" alignItems="baseline" p="10px" pl="20px" bg="orange.400" variant="solid">
                <EditIcon boxSize="5" />
                <Text ml="3" fontSize="2xl" fontWeight="semibold">Filters</Text>
            </Box>
            <Box p="20px">
                <Wrap direction="column" spacing="30px">

                    <Stack>
                        <Text fontWeight="semibold" color="blackAlpha.700" fontFamily="sans-serif">Type:</Text>
                        <Select onChange={handleChange} name="type" placeholder="select type">
                            {filters.map((filter) => (
                                <option value={filter.name}>{filter.name}</option>
                            ))}
                        </Select>
                    </Stack>
                    <Stack>
                        <Text fontWeight="semibold" color="blackAlpha.700" fontFamily="sans-serif">Color:</Text>
                        <Select onChange={handleChange} name="color" placeholder="select type">
                            {filters.length !== 0 ? (search.type === "Dog" ? (
                                <>
                                    {filters[0].colors.map(color => (
                                        <option value={color}>{color}</option>
                                    ))}
                                </>
                            ) : search.type === "Cat" ? (
                                <>
                                    {filters[1].colors.map(color => (
                                        <option value={color}>{color}</option>
                                    ))}
                                </>
                            ) : (
                                <>
                                    {filters[2].colors.map(color => (
                                        <option value={color}>{color}</option>
                                    ))}
                                </>
                            )) : null}


                        </Select>
                    </Stack>
                    <Stack>
                        <Text fontWeight="semibold" color="blackAlpha.700" fontFamily="sans-serif">Gender:</Text>
                        <Select onChange={handleChange} name="gender" placeholder="select type">
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </Select>
                    </Stack>
                    <Stack>
                        <Text fontWeight="semibold" color="blackAlpha.700" fontFamily="sans-serif">House Trained:</Text>
                        <Select onChange={handleChange} name="house_trained" placeholder="select yes/no">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </Select>
                    </Stack>



                </Wrap>
            </Box>
            <Wrap justify="right" p="20px">
                <Button onClick={handleApply} boxShadow="md" w="120px" rightIcon={<AddIcon boxSize="3" />} colorScheme="orange" variant="solid">
                    Apply
                </Button>
            </Wrap>
        </>
    )
}

export default Filters;