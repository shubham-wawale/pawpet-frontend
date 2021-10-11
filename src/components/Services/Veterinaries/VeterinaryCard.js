import React from 'react';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';

const VeterinaryCard = () => {
    return (
        <Center mt={2}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>


                <Flex justify={'center'} mt="2" >
                    <Avatar
                        size={'xl'}
                        src={
                            'https://media.istockphoto.com/photos/young-happy-veterinary-nurse-smiling-while-playing-with-a-dog-high-picture-id1303362255?b=1&k=20&m=1303362255&s=170667a&w=0&h=ebm7UoUmaCTxepZ9NoyPRTK2WC-5TmTlk6PyXou_NFg='
                        }
                        alt={'Author'}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={5}>
                    <Stack spacing={0} align={'center'} mb={3}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            John Doe
                        </Heading>
                        <Text color={'gray.500'}>Veterinary</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'}>
                        <Text fontWeight={400}>Turbhe,Navi Mumbai</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'right'} spacing="7" mt={1}>
                        <Text  fontSize="md" color={'gray.500'}>4.5 stars</Text>
                        <Button   
                            rightIcon={<ViewIcon />}    
                            size="sm"
                            mt={4}
                            bg="orange.400"
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}>
                            View
                        </Button>
                    </Stack>

                </Box>
            </Box>
        </Center>
    );
}

export default VeterinaryCard;