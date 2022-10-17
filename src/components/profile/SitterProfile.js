import React,{useState} from "react";
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

function SitterProfile() {
  const toast = useToast()
  const [sitter, setSitter] = useState({
    name:"wtf",
    location:"Dombivli",
    charges:"250",
    number_of_pets:"1",
    days_available:["Monday", "Tuesday", "Wednesday"],
    timing_from:"10",
    timing_to:"4",
    am_or_pm:"am",

});

const bookings = [{
      name_of_sitter:"Sonam",
      amount:"500",
      date: new Date(),
      number_of_pets: "2"
    },{
      name_of_sitter:"Hailey",
      amount:"750",
      date: new Date(),
      number_of_pets: "3"
    },{
      name_of_sitter:"Ash",
      amount:"250",
      date: new Date(),
      number_of_pets: "1"
}]

const transaction = [{
  transaction_id:"2344",
  transaction_amount:"500",
  transaction_date:new Date()
},
{
  transaction_id:"2345",
  transaction_amount:"250",
  transaction_date:new Date()
},
{
  transaction_id:"2346",
  transaction_amount:"750",
  transaction_date:new Date()
}]

function handleChange(e) {
  const { name, value } = e.target;
  setSitter(prevValue => {
      return {
          ...prevValue,
          [name]: value
      }
  });
}

function myFunction(e) {
  e.preventDefault()
  document.getElementById("myForm").reset();
}
  return (
    <>
    <Wrap spacing="100px" m="100px" mt="30px">
      <Box width="285px" height="650px" borderWidth="10px" borderRadius="lg" p="20px">
        <Stack direction="column">
          <Avatar size="2xl" name="John"
            src="" ml="46px"/>
          <Heading textAlign="center" color="gray">{sitter.name} </Heading>
          <Text textAlign="center" color="gray">{sitter.location}</Text>
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
                  {sitter.timing_from + " to " + sitter.timing_to + " " + sitter.am_or_pm}
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
                  {sitter.charges}
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
                  {sitter.days_available.map(d => {
                    return (
                      d + ","
                    )
                  })}
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
                  {sitter.number_of_pets}
                </Box>
              </Box>
            </Stack>
            <Stack>
            <Stat>
  <StatLabel>Total Earnings</StatLabel>
  <StatNumber>Rs 00.00</StatNumber>
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
  <Link to="/">  Logout</Link>
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

        {transaction.map((transactions,index) => {
           return (
            <Tr>
            <Td>{index+1}</Td>
            <Td>{transactions.transaction_id}</Td>
            <Td>{transactions.transaction_amount}</Td>
            <Td>{transactions.transaction_date.toLocaleDateString("en-US",{
                weekday: "long",
                day: "numeric",
                month: "long"
            })}</Td>
            </Tr> 
           )   
          })}


          {/* <Tr>
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
            
          </Tr> */}
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

{bookings.map((booking,index) => {
           return (
            <Tr>
            <Td>{index+1}</Td>
            <Td>{booking.name_of_sitter}</Td>
            <Td>{booking.amount}</Td>
            <Td>{booking.date.toLocaleDateString("en-US",{
                weekday: "long",
                day: "numeric",
                month: "long"
            })}</Td>
            <Td>{booking.number_of_pets}</Td>
            </Tr> 
           )   
          })}

        </Tbody>
      </Table> 
    </TabPanel>


    <TabPanel>

    <form id="myForm" onSubmit={myFunction}>
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
                  <Input name="name" variant="filled" onChange={handleChange} size="md" placeholder="Enter new name" width="645px" />
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
                  <Input name="location" variant="filled" onChange={handleChange} size="md" placeholder="Enter new location" width="615px" />
                </Box>
                </Box>
            </Stack>
        </Stack>

        <Stack direction="row">
              <Box display="flex" alignItems="baseline" mt="10" mb="8">
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
                  <Text fontSize="xl">From</Text><Input name="timing_from" onChange={handleChange} variant="filled" size="sm" width="62px" placeholder="Time" borderRadius="10px"/>
                  <Text fontSize="xl">To</Text><Input name="timing_to" onChange={handleChange} variant="filled" size="sm" width="62px" placeholder="Time" borderRadius="10px"/>
                  <Select name="am_or_pm" onChange={handleChange} variant="filled" size="sm" width="30%">
                  <option value="AM">A.M</option>
                  <option value="PM">P.M</option>
                  </Select>
                  </Stack>
                </Box>
              </Box>
            </Stack>
{/* 
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
                  <Input name="charges" onChange={handleChange} variant="filled" size="md" placeholder="Enter new charges" width="745px" />
                </Box>
              </Box>
            </Stack> */}
            {/* <Stack>
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
            </Stack> */}

              {/* <Stack direction="row">
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
            </Stack> */}
  
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
                  <Select onChange={handleChange} name="number_of_pets" placeholder="Select the number of pets" size="md" variant="filled" width="690px">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  </Select>
                  </Stack>
    <Button mt="25px" ml="620px" type="submit" status="success" colorScheme= "green" onClick={() => {
        let inp = document.querySelectorAll("input")
        
        toast({
          title: "Changes saved",
          description: "Your profile has been edited",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
      }
    >
      SAVE
    </Button>

    
                </Box>
              </Box>
            </Stack>
            
      </Box>
      </Wrap> 
      </form>   
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

