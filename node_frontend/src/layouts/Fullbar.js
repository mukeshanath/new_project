import React from 'react';
import Navbar from './Navbar';
import Topnavbar from './Topnav';
import { useEffect } from 'react';

export default function Fullbar(props) {

    const { divdata,title } = props;

    useEffect(() => {
      document.title = title; // Set your desired page title here
    }, []);


  return (
    <div>
      <div style={{ display: "flex", height: "100vh" }}>
          
          <Navbar/>
          <div className='topnav' style={{ width:"100%" }}>
          <Topnavbar/>
          <div>
           {divdata}

         </div>
         </div>
          </div>
    </div>
  )
}
