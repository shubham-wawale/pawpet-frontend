import React from 'react';
import './Dashboard.css';
import Header from "./Header";
import Review from "./Review";
import Info from "./Info";
import Remain from "./Remain";
import Footer from "./Footer";
// import Head from "./Head"


function Dashboard() {
  return (
    <div className="backimg">
    <>
      <Header />
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
