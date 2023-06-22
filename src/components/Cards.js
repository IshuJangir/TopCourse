import React, { useState } from 'react'
import Card from './Card'

export default function Cards({course,category}) {

  const[likedCourse,setLikedCourse]=useState([])

  function extractingData(){
    
    if(category==="All"){
      let myData=[]
      Object.values(course).forEach((array)=>{
        array.forEach((data)=>{
          myData.push(data);
        })
      })
      return myData;
    }
    else{
      return course[category];
    }
  }


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4 w-11/12 mx-auto'>
      {
        extractingData().map((each_course)=>{
          return <Card likedCourse={likedCourse} setLikedCourse={setLikedCourse} each_course={each_course}></Card>
        })
      }
    </div>
  )
}
