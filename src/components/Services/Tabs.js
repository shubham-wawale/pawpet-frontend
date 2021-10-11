import React from "react"
import Adoptions from "./Adoptions/Adoptions"
import PetStores from "./PetStores/PetStores"
import Veterinaries from "./Veterinaries/Veterinaries"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const ServicesTabs = () => {
    return (
        <>
            <Tabs defaultIndex={0} style={{margin: "1rem"}} variant="solid-rounded" colorScheme="orange">
              <TabList>
                <Tab>ADOPTIONS</Tab>
                <Tab>VETERINARY</Tab>
                <Tab>PET STORES</Tab>
                <Tab>PET SITTNG</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Adoptions />
                </TabPanel>
                <TabPanel>
                  <Veterinaries />
                </TabPanel>
                <TabPanel>
                  <PetStores />
                </TabPanel>
              </TabPanels>
            </Tabs>
        </>
    )
}

export default ServicesTabs;