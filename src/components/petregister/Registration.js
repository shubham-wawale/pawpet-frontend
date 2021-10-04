
import './Register/Reg.css'
import Reg from './Register/Reg'
import Footer from './Register/Footer'
import './Register/Registration.css'
function Registration() {
  return (
    <>
      <div className="background">


        <div className="reghead">
          <h1>
            Become a Pet Sitter with PetBacker
          </h1>

          <p>Sitting with PetBacker is a fun and flexible way to <br />
            make money while spending time with pups.</p>

        </div>

      </div>

      <Reg />
      <Footer />

    </>

  );
}



export default Registration;
