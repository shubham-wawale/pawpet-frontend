import React from 'react';
import './Dashboard.css';
import Header from "./Header";
import Review from "./Review";
import Info from "./Info";
import Footer from "./Footer";
// import Head from "./Head"


function Dashboard() {
  return (
    <div className="backimg">
    <>
      <Header />
      <Review />
      <Info />
      <Footer/>
      {/* <Head/> */}
    </>
    </div>

  );
};

export default Dashboard;
