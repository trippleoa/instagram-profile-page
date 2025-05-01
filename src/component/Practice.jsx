import React, { useState } from 'react'

const Practice = () => {
  const [langOpen,setlangOpen]= useState(false)
  const [EducationOpen,setEducationOpen]= useState(false)
  
  const Language=(
    <>
    <ul>
    <li>REACT.JS</li>
      <li>JAVASCRIPT</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>UI/UX Design</li>
    </ul>
    </>
  )
  const Education=(
    <>
    <ul>
      <li>Babcock University, Software Engineering</li>
      <li>Microsoft Learn</li>
      <li>Udemy</li>
      <li> Code with Mosh</li>
      <li>Cousera</li>
    </ul>
    </>

  )


  return (



    <div>
      <div className="headings">
        <h1 onClick={()=>setlangOpen(true)}>Languages</h1>
        {langOpen?Language:""}
        <h1 onClick={()=>setEducationOpen(true)}>Education</h1>
        {EducationOpen?Education:""}
        
      </div>
    </div>
  )
}

export default Practice