import React from "react";
import {Table,Thead,Tbody,Tr,Th,Td,TableCaption,} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Wrap, WrapItem,Tab,Tabs,TabList,TabPanel,TabPanels} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  Avatar, useToast ,statuses,Button,toast,
  Heading,
  Text,Input} from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText
} from "@chakra-ui/react"
import { Stack, Box, Badge } from "@chakra-ui/react";
import {DeleteIcon,ArrowBackIcon} from "@chakra-ui/icons";

function UserProfile() {
  const toast = useToast()
  return (
    <>
    <Wrap spacing="100px" m="60px" > 
      <Box width="290px" height="320px" borderWidth="10px" borderRadius="lg"p="50px">

        <Stack direction="column">
          <Avatar size="2xl" name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo" ml="20px"/>
          <Heading textAlign="center" color="gray">Akansha</Heading>
          <Text fontWeight="bold" textAlign="center" color="gray">Nerul,Navi Mumbai</Text>
        </Stack>
        </Box>

        
        
          <WrapItem>
        <Box>
        <Tabs variant="solid-rounded" colorScheme="orange">
  <TabList>
    <Tab>Details</Tab>
    <Tab>Bookings</Tab>
    <Tab>Edit Profile</Tab>
    <Stack direction="row">
  <Button leftIcon={<DeleteIcon/>} ml="270px" colorScheme="orange" variant="solid">
    Delete Account
  </Button>
   <Button leftIcon={<ArrowBackIcon/>} ml="470px" colorScheme="orange" variant="solid">
   <Link to="/">  Logout</Link>
  </Button>
</Stack>
  </TabList>
  
  <TabPanels>
    <TabPanel>
  <Stack>
        <Wrap spacing="100px" mt="45px" height="450px" width="700px" borderRadius="lg" borderWidth="10px" >
          <Stack direction="column" p="35px">
        <Box display="flex" alignItems="baseline" width="400px" >
                <Badge fontSize="xl" borderRadius="full" px="2" colorScheme="orange">
                  Name:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="sm"
                  ml="2"
                  width="100%"
                  borderWidth="3px"
                  borderRadius="md"
                >
                  <Text textAlign="center" fontSize="xl" color="gray">Akansha</Text>
                </Box>
              </Box>

              <Box display="flex" alignItems="baseline" width="400px">
                <Badge fontSize="xl" borderRadius="full" px="2" colorScheme="orange" mt="2rem">
                  Location:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="sm"
                  ml="2"
                  width="100%"
                  borderWidth="3px"
                  borderRadius="md">
                  <Text textAlign="center" fontSize="xl" color="gray">Nerul,Navi Mumbai</Text>
                </Box>
              </Box>

              <Box display="flex" alignItems="baseline" width="400px">
                <Badge fontSize="xl" borderRadius="full" px="2" colorScheme="orange" mt="2rem">
                  Email:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="sm"
                  ml="2"
                  width="700px"
                  borderWidth="3px"
                  borderRadius="md">
                  <Text textAlign="center" fontSize="xl" color="gray">akansha101@gmail.com</Text>
                </Box>
              </Box>

              <Box display="flex" alignItems="baseline" width="400px">
                <Badge fontSize="xl" borderRadius="full" px="2" colorScheme="orange" mt="2rem">
                  Phone Number:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="sm"
                  ml="2"
                  width="100%"
                  borderWidth="3px"
                  borderRadius="md">
                  <Text textAlign="center" fontSize="xl" color="gray">9323991525</Text>
                </Box>
                </Box>

                <Box display="flex" alignItems="baseline" width="400px">
                <Badge fontSize="xl" borderRadius="full" px="2" colorScheme="orange" mt="2rem">
                  Number of pets:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="sm"
                  ml="2"
                  width="700px"
                  borderWidth="3px"
                  borderRadius="md">
                  <Text textAlign="center" fontSize="xl" color="gray">1</Text>
                </Box>
              
              </Box>
              </Stack>
              </Wrap>
        </Stack>
      </TabPanel>
    <TabPanel>
    <Table variant="striped" colorScheme="orange" mt="70px">
        <TableCaption>Bookings</TableCaption>
        <Thead>
          <Tr>
            <Th>Serial Number</Th>
            <Th>Name of the Sitter</Th>
            <Th>Amount</Th>
            <Th>Date</Th>
            <Th>Number of pets</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Akansha</Td>
            <Td>2500</Td>
            <Td>25/12/2021</Td>
            <Td>1</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Rohan</Td>
            <Td>3500</Td>
            <Td>19/11/2021</Td>
            <Td>2</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Eshaan</Td>
            <Td>8700</Td>
            <Td>18/10/2020</Td>
            <Td>4</Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>Shania</Td>
            <Td>5000</Td>
            <Td>21/10/2021</Td>
            <Td>3</Td>
          </Tr>
        </Tbody>
      </Table> 
    </TabPanel>


    <TabPanel>
    <Wrap spacing="500px" mt="40px">
      <Box width="970px" borderWidth="1px" borderRadius="lg" p="20px">

    <Stack direction="column">
            <Stack direction="row">
              <Box display="flex" alignItems="baseline" mt="4">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Change your name:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  ml="2">
                  <Input variant="filled" size="md" placeholder="Enter new name" width="680px" />
                </Box>
                </Box>
            </Stack>
            <Stack direction="row">
              <Box display="flex" alignItems="baseline" mt="20px">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Change your location:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  ml="2">
                  <Input variant="filled" size="md" placeholder="Enter new location" width="650px" />
                </Box>
                </Box>
            </Stack>
        </Stack>

        <Stack>
              <Box display="flex" alignItems="baseline" mt="30px" mb="2px">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Change your email:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  ml="2">
                  <Input variant="filled" size="md" placeholder="Enter new charges" width="685px" />
                </Box>
              </Box>
            </Stack>

            <Stack>
              <Box display="flex" alignItems="baseline" mt="30px">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Change your phone number:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  ml="2">
                  <Input variant="filled" size="md" placeholder="Enter new charges" width="607px" />
                </Box>
              </Box>
            </Stack>
            
            <Stack>
              <Box display="flex" alignItems="baseline" mt="35px">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Number of Pets:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  ml="2"
                >
                  <Stack>
                  <Select placeholder="Select the number of pets" size="md" variant="filled" width="720px">
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                  <option value="option3">4</option>
                  </Select>
                  </Stack>
    <Button mt="25px" ml="680px" status="success" colorScheme= "green" onClick={() =>
        toast({
          title: "Changes saved",
          description: "Your profile has been edited",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      SAVE
    </Button>


                </Box>
              </Box>
            </Stack>
      </Box>
      </Wrap>    
    </TabPanel>
  </TabPanels>
</Tabs>


        </Box>
      </WrapItem>
      </Wrap>
    </>
  );
}
export default UserProfile;
