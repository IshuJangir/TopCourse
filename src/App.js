<<<<<<< HEAD
import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import { Routes,Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import NoPage from './components/NoPage';
import { useState } from 'react';

export default function App() {

  const[login,setLogin]=useState(false);


  return (
    <div className='bg-richblack-900  '>
      <Navbar login={login} setLogin={setLogin} />

      <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/About' element={<About></About>}/>
          <Route path='/Contact' element={<Contact login={login} ></Contact>}/>
          <Route path='/Login' element={<Login login={login} setLogin={setLogin}></Login>}/>
          <Route path='/Signup' element={<Signup login={login} setLogin={setLogin}></Signup>}/>
          <Route path='/Dashboard' element={<Dashboard></Dashboard>}/>
          <Route path='*' element={<NoPage></NoPage>}/>
      </Routes>
=======
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import { filterData,apiUrl } from './data'
import {toast} from 'react-toastify'

export default function App() {

  const[course,setCourse]=useState(null);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title);

  async function fetchData(){
    setLoading(true)

    try{
      let response= await fetch(apiUrl)
      let output = await response.json()
      setCourse(output.data)
      toast.success("data aa gya hai")
      console.log(output.data)
    }

    catch(error){
      toast.error("Network Problem")
    }

    setLoading(false)
  }

  useEffect(()=>{
    fetchData()
  },[])



  return (
    <div className='min-h-screen flex flex-col bg-bgDark2'>
      <Navbar></Navbar>
      <Filter category={category} setCategory={setCategory} filterData={filterData} ></Filter>
      {
        loading ? (<Spinner></Spinner>) : (<Cards category={category} course={course} ></Cards>)
      }
>>>>>>> 7bfdec8 (first commit)
    </div>
  )
}
