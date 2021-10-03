
import './Register/Reg.css'
import Reg from './Register/Reg'
import Footer from './Register/Footer'
import {Box,Heading,Button,Text} from '@chakra-ui/react' 
function Registration() {
  return (
    <>
      <div className="background">
        
    
      <div className="reghead">
      <h2>
    Become a Pet Sitter with PetBacker
    </h2> 

      </div>
    
      </div>

      <Reg />
      <Footer />

    </>

  );
}



export default Registration;
