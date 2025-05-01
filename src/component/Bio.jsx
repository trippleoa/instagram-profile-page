
import { useState } from "react"
import profileIcon from "../Asset/profileIcon.svg"
//I dowloaded a package from terminal->> npm install get-photo-url.
import getPhotoUrl from "get-photo-url"
const Bio = () => {
  const [broForm,setebroForm]=useState({
    name:"Odebode Oluwapelumi.",
    about:"I am a frontend developer and UI/UX designer.",
  })
  const saveDetails=(event)=>{
    event.preventDefault()
    setebroForm({
      name:event.target.updateName.value,
      about:event.target.updateAbout.value,
    })
    seteditBio(false)
  }
  const [editBio,seteditBio]= useState(false)
  const [profilePhoto,setprofilePhoto]=useState(profileIcon)
  
   const updateProfilePhoto=async()=>{
    const newProfilePhoto= await getPhotoUrl('#profilePhotoInput')
    setprofilePhoto(newProfilePhoto)
   }
  
  const editForm=(
    <form action="" className="edit-bio-form" onSubmit={(e)=>saveDetails(e)}>
      <input type="text" id="" name="updateName" placeholder="Your name" />
      <input type="text" id="" name="updateAbout" placeholder="About you"/>
      <br/>
      <button type="button" className="cancel-button" onClick={()=>seteditBio(false)}>Cancel</button>
      <button type="submit" className="button">Save</button>
    </form>
  )
  return (
    <>
    <section className='bio'>
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
      <div className="profile-photo" role='button' title='click to edit photo' >
      <img src={profilePhoto} alt="profileImage" />
      </div>
      </label>
      <div className="profile-info">
      <p className="name">{broForm.name}</p>
      <p className="about">{broForm.about}</p>
      <button onClick={()=>seteditBio(true)}>Edit</button>
          { editBio?editForm:""}
      </div>
    </section>
    
    
    
    </>
  )
}

export default Bio