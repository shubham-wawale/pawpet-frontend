import { WrapItem,Wrap } from "@chakra-ui/layout";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResultCard from "./SearchResultCard";


const Search = () => {
    
    const [data,setData] = useState([
        {
            imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
            name: "Capella",
            type:"Dog",
            location: "mumbai",
            category: "adult",
            gender: "female",
          },
          {
            imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
            name: "Capella",
            type:"Dog",
            location: "delhi",
            category: "adult",
            gender: "female",
          },
          {
            imageUrl: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
            name: "Capella",
            type:"Dog",
            location: "delhi",
            category: "adult",
            gender: "female",
          },
          {
            imageUrl: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Capella",
            type:"Cat",
            location: "kolkata",
            category: "adult",
            gender: "female",
          },
          {
            imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",
            name: "Capella",
            type:"Cat",
            location: "mumbai",
            category: "adult",
            gender: "female",
          },
          {
            imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*",
            name: "Capella",
            type:"Cat",
            location: "kolkata",
            category: "adult",
            gender: "female",
          },
          {
            imageUrl: "https://www.thesprucepets.com/thmb/aTYzWacWg5mTEDfF7gXIT2q2lgY=/3168x3168/smart/filters:no_upscale()/pet-parrot-on-human-hand-1022424278-5c3ded0ac9e77c00016e6e2b.jpg",
            name: "Capella",
            type:"Parrot",
            location: "delhi",
            category: "adult",
            gender: "female",
          },
          {
            imageUrl: "https://i.insider.com/5f6cbd43c4049200115cb68d?width=750&format=jpeg&auto=webp",
            name: "Capella",
            type:"Rabbit",
            location: "mumbai",
            category: "adult",
            gender: "female",
          }
    ])
    const [newData, setNewData] = useState([]);

    const handleSearch = (location) => {
        const updatedData = data.filter(property => property.location === location);
        setNewData(updatedData);
    }
    return (
        <>
            <SearchBar data={data} handleSearch={handleSearch} />
            <Wrap justify="left" spacing="30px">
            {newData.length === 0 ? data.map(property => {
                return (
                    <WrapItem>
                        <SearchResultCard data={property}/>
                    </WrapItem>
                )
            }) : newData.map(property => {
                return (
                    <WrapItem>
                        <SearchResultCard data={property}/>
                    </WrapItem>
                )
            })}
            </Wrap>
            
        </>
    )
}

export default Search;