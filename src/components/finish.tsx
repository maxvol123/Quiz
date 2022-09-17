import React, { useState } from 'react';
interface ElementProps {
 point:number
}
export function Finish({point}:ElementProps) {    
    return(
        <div className='flex flex-col'>
        <h1 className="">Finish </h1>
        <div className="">your score -{point} </div>
        </div>
    )
}