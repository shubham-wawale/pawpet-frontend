import React from 'react';
import './Dashboard.css';
import Header from "./Header";
import Review from "./Review";
import Info from "./Info";
import Remain from "./Remain";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import Head from "./Head"


function Dashboard(props) {
  console.log(props.petsitters);
  return (
    
    <div className="backimg">
    <>
    <Navbar />
      <Header petsitters={props.petsitters}/>
      <Review />
      <Info />
      <Remain/>
      <Footer/>

      {/* <Head/> */}
    </>
    </div>

  );
};

export default Dashboard;
