import React from "react"
import Search from "./Search/Search"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const ServicesTabs = () => {
    return (
        <>
            <Tabs defaultIndex={1} style={{margin: "1rem"}} variant="soft-rounded" colorScheme="teal">
              <TabList>
                <Tab>PET SITTNG</Tab>
                <Tab>ADOPTIONS</Tab>
                <Tab>VETERINARY</Tab>
                <Tab>PET STORES</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  
                </TabPanel>
                <TabPanel>
                  <p><Search /></p>
                </TabPanel>
              </TabPanels>
            </Tabs>
        </>
    )
}

export default ServicesTabs;