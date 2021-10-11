import React from "react";
import {Table,Thead,Tbody,Tr,Th,Td,TableCaption,} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Wrap, WrapItem,Tab,Tabs,TabList,TabPanel,TabPanels} from "@chakra-ui/react";
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

function SitterProfile() {
  const toast = useToast()
  return (
    <>
    <Wrap spacing="100px" m="100px" mt="30px">
      <Box width="285px" height="650px" borderWidth="10px" borderRadius="lg" p="20px">

        <Stack direction="column">
          <Avatar size="2xl" name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo" ml="34px"/>
          <Heading textAlign="center" color="gray">Akansha</Heading>
          <Text textAlign="center" color="gray">Nerul,Navi Mumbai</Text>
        </Stack>
        
        <Box mt="7">
          <Stack spacing="32px">
            <Stack direction="row">
              <Box display="flex" alignItems="baseline">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Timings:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="sm"
                  ml="2">
                  10 a.m to 6 p.m
                </Box>
              </Box>
            </Stack>
            <Stack>
              <Box display="flex" alignItems="baseline">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Charges:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="sm"
                  ml="2">
                  2000 per pet
                </Box>
              </Box>
            </Stack>
            <Stack>
              <Box display="flex" alignItems="baseline">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Days Available:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="sm"
                  ml="2"
                >
                  Monday, Wednesday, Saturday, Sunday
                </Box>
              </Box>
            </Stack>
            <Stack>
              <Box display="flex" alignItems="baseline">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Number of Pets:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="sm"
                  ml="2"
                >
                  2
                </Box>
              </Box>
            </Stack>
            <Stack>
            <Stat>
  <StatLabel>Total Earnings</StatLabel>
  <StatNumber>Rs 500.00</StatNumber>
  <StatHelpText>Sep 12 - Sep 27</StatHelpText>
    </Stat>
    </Stack>
          </Stack>
        </Box>
        </Box>
        
              
      <WrapItem>
        <Box>
          
        <Tabs variant="solid-rounded" colorScheme="orange">
  <TabList>
    <Tab>Transaction</Tab>
    <Tab>Bookings</Tab>
    <Tab>Edit Profile</Tab>
    <Stack direction="row">
  <Button leftIcon={<DeleteIcon/>} ml="270px" colorScheme="orange" variant="solid">
    Delete Account
  </Button>
  <Button leftIcon={<ArrowBackIcon/>} ml="470px" colorScheme="orange" variant="solid">
    Logout
  </Button>
</Stack>
  </TabList>
  
  <TabPanels>
    <TabPanel>
    <Table variant="striped" colorScheme="orange" mt="30px">
        <TableCaption>Transaction History</TableCaption>
        <Thead>
          <Tr>
            <Th>Serial Number</Th>
            <Th>Transaction ID</Th>
            <Th>Amount</Th>
            <Th>Date</Th>
           
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Shubham</Td>
            <Td>2500</Td>
            <Td>15/03/2021</Td>
            
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Amit</Td>
            <Td>3800</Td>
            <Td>27/08/2021</Td>
            
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Raj</Td>
            <Td>1000</Td>
            <Td>12/12/2020</Td>
           
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>Neha</Td>
            <Td>6500</Td>
            <Td>02/05/2021</Td>
            
          </Tr>
        </Tbody>
      </Table>
    </TabPanel>


    <TabPanel>
    <Table variant="striped" colorScheme="orange" mt="30px">
        <TableCaption>Bookings</TableCaption>
        <Thead>
          <Tr>
            <Th>Serial Number</Th>
            <Th>Name of the User</Th>
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
    <Wrap spacing="500px" mt="10px">
      <Box width="902px" borderWidth="1px" borderRadius="lg" p="20px">

    <Stack direction="column">
            <Stack direction="row">
              <Box display="flex" alignItems="baseline" mt="5">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Change your name:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  ml="2">
                  <Input variant="filled" size="md" placeholder="Enter new name" width="645px" />
                </Box>
                </Box>
            </Stack>
            <Stack direction="row">
              <Box display="flex" alignItems="baseline" mt="5">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Change your location:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  ml="2">
                  <Input variant="filled" size="md" placeholder="Enter new location" width="615px" />
                </Box>
                </Box>
            </Stack>
        </Stack>

        <Stack direction="row">
              <Box display="flex" alignItems="baseline" mt="8" mb="8">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Timings:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  ml="2">
                    <Stack direction="row">
                  <Text fontSize="xl">From</Text><Input variant="filled" size="sm" width="62px" placeholder="Time" borderRadius="10px"/>
                  <Text fontSize="xl">To</Text><Input variant="filled" size="sm" width="62px" placeholder="Time" borderRadius="10px"/>
                  <Select variant="filled" size="sm" width="30%">
                  <option value="option1">A.M</option>
                  <option value="option2">P.M</option>
                  </Select>
                  </Stack>
                </Box>
              </Box>
            </Stack>

            <Stack>
              <Box display="flex" alignItems="baseline" mt="2" mb="6">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Charges:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  ml="2">
                  <Input variant="filled" size="md" placeholder="Enter new charges" width="745px" />
                </Box>
              </Box>
            </Stack>
            <Stack>
              <Box display="flex" alignItems="baseline" mt="4" mb="6">
                <Badge fontSize="md" borderRadius="full" px="2" colorScheme="orange">
                  Days Available:
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  ml="2"
                >
                  <Text fontSize="xl">Choose your working days</Text>
                </Box>
              </Box>
            </Stack>

              <Stack direction="row">
            <Checkbox colorScheme="green" spacing="0.3rem" onClickCapture>
              Monday
            </Checkbox>
            <Checkbox colorScheme="green" spacing="0.3rem" onClickCapture>
              Tuesday
            </Checkbox>
            <Checkbox colorScheme="green" spacing="0.3rem" onClickCapture>
              Wednesday
            </Checkbox>
            <Checkbox colorScheme="green" spacing="0.3rem" onClickCapture>
              Thursday
            </Checkbox>
            <Checkbox colorScheme="green" spacing="0.3rem" onClickCapture>
              Friday
            </Checkbox>
            <Checkbox colorScheme="green" spacing="0.3rem" onClickCapture>
              Saturday
            </Checkbox>
            <Checkbox colorScheme="green" spacing="0.3rem" onClickCapture>
              Sunday
            </Checkbox>
            </Stack>
  
            <Stack>
              <Box display="flex" alignItems="baseline" mt="8">
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
                  <Select placeholder="Select the number of pets" size="md" variant="filled" width="690px">
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                  <option value="option3">4</option>
                  </Select>
                  </Stack>
    <Button mt="25px" ml="620px" status="success" colorScheme= "green" onClick={() =>
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
export default SitterProfile;
