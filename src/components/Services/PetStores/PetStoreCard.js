import React from "react";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
import { PhoneIcon } from "@chakra-ui/icons";

const PetStoreCard = () => {
    return (
        <>
            <Center py={2}>
                <Box
                    maxW={'320px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={3}
                    textAlign={'center'}
                    overflow={"hidden"}>
                    <Box
                        h={'130px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}>
                        <Image
                            src={
                                'https://i.pinimg.com/474x/08/46/71/0846717a62954c4c78c64244d3306e98--pet-store-display-store-displays.jpg'
                            }
                            layout={'fill'}
                        />
                    </Box>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        Lindsey James
                    </Heading>
                    <Text
                        isTruncated={true}
                        textAlign={'center'}
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                        Actress, musician, songwriter and artist.
                    
                    </Text>

                

                    <Stack mt={4} direction={'row'} spacing={4}>
                        <Button
                        size={'sm'}
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            _focus={{
                                bg: 'gray.200',
                            }}>
                            4 stars
                        </Button>
                        <Button
                            size={'sm'}
                            rightIcon={<PhoneIcon />}
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}>
                            Call
                        </Button>
                    </Stack>
                </Box>
            </Center>

        </>
    )
}

export default PetStoreCard;