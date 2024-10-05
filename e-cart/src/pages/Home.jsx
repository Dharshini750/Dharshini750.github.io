import React from 'react'
import Salesx from '../assets/img/formal suit.jfif'
import Salex from '../assets/img/fashion.jfif'
const Home = () => {
  return (
    <>
       <div className="w-[100%] h-auto flex flex-col ">
       <img src={Salesx} alt="sales" className="w-full  rounded-sm" />
       <img src={Salex} alt="sale" className="w-full  rounded-sm" />
       </div>
    </>
  )
}
export default Home;
