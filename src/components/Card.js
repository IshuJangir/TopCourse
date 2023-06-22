import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify'

export default function Card({each_course,likedCourse,setLikedCourse}) {


    function clickHandler(){
        if(likedCourse.includes(each_course.id)){
            //phle se liked h means htana h
            setLikedCourse((prev)=>(
                prev.filter((cid)=>(
                    cid!==each_course.id
                ))
            ))
            toast.warning("Like Removed")
        }

        else{
            setLikedCourse((prev)=>[
                ...prev,each_course.id
            ])
            toast.success("Liked Successfully")
        }
    }


  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden relative'>
        <div>
            <img className='' src={each_course.image.url} alt={each_course.image.alt} />
        </div>

        <div onClick={clickHandler} className='absolute top-36 left-[250px] bg-white text-2xl p-2 rounded-full cursor-pointer'>
            {
                likedCourse.includes(each_course.id) ? (<FcLike></FcLike>) : (<FcLikePlaceholder></FcLikePlaceholder>)
            }
        </div>

        <div className='p-4'>

        <div >
            <p className='text-white font-semibold text-lg leading-6'>{each_course.title}</p>
        </div>

        <div>
            <p className='mt-2 text-white text-[12px]'>{each_course.description}</p>
        </div>

        </div>

        
    </div>
  )
}
