"use client";
import { CiBookmark } from "react-icons/ci";

export default function BookMark(){

    const handleOnClick = ()=>{
        
    };


    return (
        <span onClick={handleOnClick} className="hover:text-indigo-600 text-xl p-2 hover:bg-indigo-100  rounded-lg">
            <CiBookmark />
        </span>
    );
}